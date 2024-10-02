import { Workbook } from 'exceljs/dist/exceljs.min.js';

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, env);
  }
};

async function handleRequest(request, env) {
 // const TEMPLATE_URL_TEST = env.TEMPLATE_URL_TEST;
  const TEMPLATE_URL = env.TEMPLATE_URL;
  const BREVO_API_KEY = env.BREVO_API_KEY;
  const SENDER_EMAIL = env.SENDER_EMAIL;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        ...corsHeaders,
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  if (request.method === 'POST') {
    try {
      const data = await request.json();
      const { calculators, email } = data;
      
      const templateResponse = await fetch(TEMPLATE_URL);
      //const templateResponse = await fetch(TEMPLATE_URL_TEST);
      if (!templateResponse.ok) {
        throw new Error(`Failed to fetch template: ${templateResponse.statusText}`);
      }
      const templateArrayBuffer = await templateResponse.arrayBuffer();

      const workbook = new Workbook();
      await workbook.xlsx.load(templateArrayBuffer);

      const worksheet = workbook.getWorksheet(1);

      data.calculators.forEach((calculator, index) => {
        const column = String.fromCharCode(67 + index);
        worksheet.getCell(`${column}3`).value = calculator.name;
        worksheet.getCell(`${column}11`).value = calculator.unitsPerShipment;
        worksheet.getCell(`${column}4`).value = calculator.currency;
        worksheet.getCell(`${column}6`).value = calculator.productionCosts;
        worksheet.getCell(`${column}7`).value = calculator.manufacturerMargin;
        worksheet.getCell(`${column}10`).value = calculator.freightInsurance;
        worksheet.getCell(`${column}14`).value = calculator.customDuties;
        worksheet.getCell(`${column}15`).value = calculator.exciseTax;
        worksheet.getCell(`${column}18`).value = calculator.domesticLogistics;
        worksheet.getCell(`${column}19`).value = calculator.storage;
        worksheet.getCell(`${column}20`).value = calculator.importHandling;
        worksheet.getCell(`${column}23`).value = calculator.importerMargin;
        worksheet.getCell(`${column}24`).value = calculator.wholesalerMargin;
        worksheet.getCell(`${column}25`).value = calculator.retailerMargin;
      });

      workbook.calcProperties.fullCalcOnLoad = true;

      workbook.worksheets.forEach(sheet => {
        sheet.eachRow({ includeEmpty: false }, (row) => {
          row.eachCell({ includeEmpty: false }, (cell) => {
            if (cell.formula) {
              cell.value = { formula: cell.formula };
            }
          });
        });
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const base64File = btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));

      const emailPayload = {
        sender: { name: 'GourmetPro', email: SENDER_EMAIL },
        to: [{ email: email, name: 'Valued Customer' }],
        subject: 'Your Excel Calculator',
        htmlContent: '<html><body><h1>Your Excel Calculator</h1><p>Please find attached your Excel calculator.</p></body></html>',
        attachment: [{
          content: base64File,
          name: 'calculator.xlsx'
        }],
        headers: {
          'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        }
      };

      const options = {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        body: JSON.stringify(emailPayload)
      };

      const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', options);
      const emailResponseData = await emailResponse.json();

      if (emailResponse.ok) {
        console.log('Email sent successfully');
        return new Response(JSON.stringify({
          message: 'Email sent successfully',
          apiResponse: emailResponseData
        }), {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        });
      } else {
        console.error('Email sending failed:', JSON.stringify(emailResponseData, null, 2));
        return new Response(JSON.stringify({
          message: 'Failed to send email',
          apiResponse: emailResponseData
        }), {
          status: emailResponse.status,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        });
      }
    } catch (error) {
      console.error('Unhandled error:', error);
      return new Response(JSON.stringify({
        message: 'Internal server error',
        error: error.message
      }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      });
    }
  }

  return new Response('Method not allowed', {
    status: 405,
    headers: corsHeaders
  });
}