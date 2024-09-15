import { Workbook } from 'exceljs/dist/exceljs.min.js';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method === 'POST') {
    const data = await request.json();
    
    // Download the template
    const templateUrl = TEMPLATE_URL;
    const templateResponse = await fetch(templateUrl);
    const templateArrayBuffer = await templateResponse.arrayBuffer();

    // Load the template into a workbook
    const workbook = new Workbook();
    await workbook.xlsx.load(templateArrayBuffer);

    // Get the first worksheet
    const worksheet = workbook.getWorksheet(1);

    // Add data for each calculator in columns
    data.calculators.forEach((calculator, index) => {
      const column = String.fromCharCode(67 + index); // Start from column C (67 is ASCII for 'C')

      worksheet.getCell(`${column}4`).value = calculator.unitsPerShipment;
      worksheet.getCell(`${column}5`).value = calculator.currency;
      worksheet.getCell(`${column}6`).value = calculator.productionCosts;
      worksheet.getCell(`${column}7`).value = calculator.manufacturerMargin;
      worksheet.getCell(`${column}9`).value = calculator.freightInsurance;
      worksheet.getCell(`${column}12`).value = calculator.customDuties;
      worksheet.getCell(`${column}13`).value = calculator.exciseTax;
      worksheet.getCell(`${column}16`).value = calculator.domesticLogistics;
      worksheet.getCell(`${column}17`).value = calculator.storage;
      worksheet.getCell(`${column}18`).value = calculator.importHandling;
      worksheet.getCell(`${column}21`).value = calculator.importerMargin;
      worksheet.getCell(`${column}22`).value = calculator.wholesalerMargin;
      worksheet.getCell(`${column}23`).value = calculator.retailerMargin;
    });

    // Force recalculation of the entire workbook
    workbook.calcProperties.fullCalcOnLoad = true;

    // Iterate through all worksheets and cells to force formula recalculation
    workbook.worksheets.forEach(sheet => {
      sheet.eachRow({ includeEmpty: false }, (row) => {
        row.eachCell({ includeEmpty: false }, (cell) => {
          if (cell.formula) {
            cell.value = { formula: cell.formula };
          }
        });
      });
    });

    // Generate the Excel file
    const buffer = await workbook.xlsx.writeBuffer();

    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="calculators.xlsx"',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } else {
    return new Response('Method not allowed', {
      status: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}