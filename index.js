// DOM Element Capture
function captureElements(table, columnIndex) {
  const nchild = columnIndex + 2;

  return {
    unitsPerShipment: table.querySelector(
      `tr.units-per-shipment-row td:nth-child(${nchild}) input`
    ),
    currency: table.querySelector(
      `tr.currency-row td:nth-child(${nchild}) select`
    ),
    productionCosts: table.querySelector(
      `tr.production-costs-row td:nth-child(${nchild}) input`
    ),
    manufacturerMargin: table.querySelector(
      `tr.manufacturer-margin-row td:nth-child(${nchild}) input`
    ),
    manufacturerMarginValue: table.querySelector(
      `tr.manufacturer-margin-row td:nth-child(${nchild}) .manufacturer-margin-value`
    ),
    manufacturerMarginPrice: table.querySelector(
      `tr.manufacturer-margin-row td:nth-child(${nchild}) .manufacturer-margin-price`
    ),
    freightInsurance: table.querySelector(
      `tr.freight-insurance-row td:nth-child(${nchild}) input`
    ),
    freightInsurancePrice: table.querySelector(
      `tr.freight-insurance-row td:nth-child(${nchild}) .freight-insurance-price`
    ),
    customDuties: table.querySelector(
      `tr.custom-duties-row td:nth-child(${nchild}) input`
    ),
    customDutiesValue: table.querySelector(
      `tr.custom-duties-row td:nth-child(${nchild}) .custom-duties-value`
    ),
    customDutiesPrice: table.querySelector(
      `tr.custom-duties-row td:nth-child(${nchild}) .custom-duties-price`
    ),
    exciseTax: table.querySelector(
      `tr.excise-tax-row td:nth-child(${nchild}) input`
    ),
    exciseTaxValue: table.querySelector(
      `tr.excise-tax-row td:nth-child(${nchild}) .excise-tax-value`
    ),
    exciseTaxPrice: table.querySelector(
      `tr.excise-tax-row td:nth-child(${nchild}) .excise-tax-price`
    ),
    domesticLogistics: table.querySelector(
      `tr.domestic-logistics-row td:nth-child(${nchild}) input`
    ),
    domesticLogisticsPrice: table.querySelector(
      `tr.domestic-logistics-row td:nth-child(${nchild}) .domestic-logistics-price`
    ),
    storage: table.querySelector(
      `tr.storage-row td:nth-child(${nchild}) input`
    ),
    storagePrice: table.querySelector(
      `tr.storage-row td:nth-child(${nchild}) .storage-price`
    ),
    importHandling: table.querySelector(
      `tr.import-handling-row td:nth-child(${nchild}) input`
    ),
    importHandlingPrice: table.querySelector(
      `tr.import-handling-row td:nth-child(${nchild}) .import-handling-price`
    ),
    importerMargin: table.querySelector(
      `tr.importer-margin-row td:nth-child(${nchild}) input`
    ),
    importerMarginValue: table.querySelector(
      `tr.importer-margin-row td:nth-child(${nchild}) .importer-margin-value`
    ),
    importerMarginPrice: table.querySelector(
      `tr.importer-margin-row td:nth-child(${nchild}) .importer-margin-price`
    ),
    wholesalerMargin: table.querySelector(
      `tr.wholesaler-margin-row td:nth-child(${nchild}) input`
    ),
    wholesalerMarginValue: table.querySelector(
      `tr.wholesaler-margin-row td:nth-child(${nchild}) .wholesaler-margin-value`
    ),
    wholesalerMarginPrice: table.querySelector(
      `tr.wholesaler-margin-row td:nth-child(${nchild}) .wholesaler-margin-price`
    ),
    retailerMargin: table.querySelector(
      `tr.retailer-margin-row td:nth-child(${nchild}) input`
    ),
    retailerMarginValue: table.querySelector(
      `tr.retailer-margin-row td:nth-child(${nchild}) .retailer-margin-value`
    ),
    retailerMarginPrice: table.querySelector(
      `tr.retailer-margin-row td:nth-child(${nchild}) .retailer-margin-price`
    ),
    marketingBudget: table.querySelector(
      `tr.marketing-budget-row td:nth-child(${nchild}) input`
    ),
    marketingBudgetPrice: table.querySelector(
      `tr.marketing-budget-row td:nth-child(${nchild}) .marketing-budget-price`
    ),
    freightInsuranceTotal: table.querySelector(
      `tr.freight-insurance-heading td:nth-child(${nchild}) .freight-insurance-total`
    ),
    dutiesTotal: table.querySelector(
      `tr.duties-heading td:nth-child(${nchild}) .duties-total`
    ),
    cifLogisticsTotal: table.querySelector(
      `tr.cif-logistics-heading td:nth-child(${nchild}) .cif-logistics-total`
    ),
    marginsTotal: table.querySelector(
      `tr.margins-heading td:nth-child(${nchild}) .margins-total`
    ),
    pricePerUnit: table.querySelector(
      `tr.price-per-unit-row td:nth-child(${nchild}) span`
    ),
    pricePerShipment: table.querySelector(
      `tr.price-per-shipment-row td:nth-child(${nchild}) span`
    ),
    deleteButton: table.querySelector(
      `tr.delete-row td:nth-child(${nchild}) button`
    ),
  };
}

function extractInputs(elements) {
  return {
    currency: elements.currency.value,
    unitsPerShipment: parseFloat(elements.unitsPerShipment.value) || 0,
    productionCosts: parseFloat(elements.productionCosts.value) || 0,
    manufacturerMargin: parseFloat(elements.manufacturerMargin.value) || 0,
    freightInsurance: parseFloat(elements.freightInsurance.value) || 0,
    customDuties: parseFloat(elements.customDuties.value) || 0,
    exciseTax: parseFloat(elements.exciseTax.value) || 0,
    domesticLogistics: parseFloat(elements.domesticLogistics.value) || 0,
    storage: parseFloat(elements.storage.value) || 0,
    importHandling: parseFloat(elements.importHandling.value) || 0,
    importerMargin: parseFloat(elements.importerMargin.value) || 0,
    wholesalerMargin: parseFloat(elements.wholesalerMargin.value) || 0,
    retailerMargin: parseFloat(elements.retailerMargin.value) || 0,
    marketingBudget: parseFloat(elements.marketingBudget.value) || 0,
  };
}

// Calculator Logic
function calculateOutputs(inputs) {
  const baseCost = inputs.productionCosts + inputs.marketingBudget;
  const exworksPrice = baseCost / (1 - inputs.manufacturerMargin / 100);
  const cifPrice =
    exworksPrice + inputs.freightInsurance / inputs.unitsPerShipment;
  const customDutiesValue = (inputs.customDuties / 100) * cifPrice;
  const exciseTaxValue = inputs.exciseTax;
  const priceAfterDuties = cifPrice + customDutiesValue + exciseTaxValue;
  const cifLogisticsTotal =
    priceAfterDuties +
    inputs.domesticLogistics +
    inputs.storage +
    inputs.importHandling;
  const importerPrice = cifLogisticsTotal / (1 - inputs.importerMargin / 100);
  const wholesalerPrice = importerPrice / (1 - inputs.wholesalerMargin / 100);
  const retailerPrice = wholesalerPrice / (1 - inputs.retailerMargin / 100);

  const importerMarginValue = importerPrice - cifLogisticsTotal;
  const wholesalerMarginValue = wholesalerPrice - importerPrice;
  const retailerMarginValue = retailerPrice - wholesalerPrice;
  const totalMargins =
    importerMarginValue +
    wholesalerMarginValue +
    retailerMarginValue +
    cifLogisticsTotal;

  return {
    baseCost,
    exworksPrice,
    cifPrice,
    customDutiesValue,
    exciseTaxValue,
    priceAfterDuties,
    cifLogisticsTotal,
    importerPrice,
    wholesalerPrice,
    retailerPrice,
    importerMarginValue,
    wholesalerMarginValue,
    retailerMarginValue,
    totalMargins,
    pricePerUnit: retailerPrice,
    pricePerShipment: retailerPrice * inputs.unitsPerShipment,
  };
}

// Render Object
function renderCalculator(calculator) {
  const currency = calculator.inputs.currency;
  const elements = calculator.elements;
  const data = calculator.outputs;

  const formatCurrency = (value) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency,
    }).format(value);

  const updateElement = (element, value) => {
    if (element) {
      element.textContent = formatCurrency(value);
    }
  };

  // Update all the price displays
  updateElement(elements.manufacturerMarginPrice, data.exworksPrice);
  updateElement(elements.freightInsurancePrice, data.cifPrice);
  updateElement(elements.customDutiesPrice, data.priceAfterDuties);
  updateElement(elements.exciseTaxPrice, data.priceAfterDuties);
  updateElement(elements.domesticLogisticsPrice, data.cifLogisticsTotal);
  updateElement(elements.storagePrice, data.cifLogisticsTotal);
  updateElement(elements.importHandlingPrice, data.cifLogisticsTotal);
  updateElement(elements.importerMarginPrice, data.importerPrice);
  updateElement(elements.wholesalerMarginPrice, data.wholesalerPrice);
  updateElement(elements.retailerMarginPrice, data.retailerPrice);
  updateElement(elements.marketingBudgetPrice, data.baseCost);

  // Update totals
  updateElement(elements.freightInsuranceTotal, data.cifPrice);
  updateElement(elements.dutiesTotal, data.priceAfterDuties);
  updateElement(elements.cifLogisticsTotal, data.cifLogisticsTotal);
  updateElement(elements.marginsTotal, data.totalMargins);

  // Update results
  updateElement(elements.pricePerUnit, data.pricePerUnit);
  updateElement(elements.pricePerShipment, data.pricePerShipment);

  // Update margin values
  updateElement(
    elements.manufacturerMarginValue,
    data.exworksPrice - data.baseCost
  );
  updateElement(elements.customDutiesValue, data.customDutiesValue);
  updateElement(elements.exciseTaxValue, data.exciseTaxValue);
  updateElement(elements.importerMarginValue, data.importerMarginValue);
  updateElement(elements.wholesalerMarginValue, data.wholesalerMarginValue);
  updateElement(elements.retailerMarginValue, data.retailerMarginValue);
}

let calculators = new Set();

function createCalculator() {
  const index = calculators.size;
  const column =
    index == 0
      ? extractTableColumn(containerTable, index + 1)
      : cloneTableColumn(containerTable, index);
  const elements = captureElements(containerTable, index); // find way to search through column instead
  const inputs = extractInputs(elements);
  const outputs = calculateOutputs(inputs);

  const calculator = {
    column,
    elements,
    inputs,
    outputs,
  };
  calculators.add(calculator);
  renderCalculator(calculator);

  Object.keys(elements)
    .filter((key) => {
      return (
        elements[key] instanceof HTMLInputElement ||
        elements[key] instanceof HTMLSelectElement
      );
    })
    .map((key) => {
      return elements[key].addEventListener("input", () => {
        updateCalculator(calculator);
      });
    });

  elements.deleteButton.addEventListener("click", function () {
    deleteCalculator(calculator);
  });

  return calculator;
}

// Main function to tie it all together
function updateCalculator(calculator) {
  calculator.inputs = extractInputs(calculator.elements);
  calculator.outputs = calculateOutputs(calculator.inputs);
  renderCalculator(calculator);
}

// Function to delete a calculator
function deleteCalculator(calculator) {
  if (calculators.size < 2) {
    return alert("Cannot delete this calculator.");
  }

  calculator.column.forEach((element) => {
    element.remove();
  });
  calculators.delete(calculator);
}

const currencies = [
  { code: "JPY", name: "Japanese Yen" },
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "INR", name: "Indian Rupee" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "ZAR", name: "South African Rand" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "DKK", name: "Danish Krone" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "PLN", name: "Polish Złoty" },
  { code: "THB", name: "Thai Baht" },
  { code: "KRW", name: "South Korean Won" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "AED", name: "United Arab Emirates Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "VND", name: "Vietnamese Dong" },
];

function extractTableColumn(table, index) {
  const rows = table.querySelectorAll("tr");
  return Array.from(rows).map((row) => {
    return row.children[index];
  });
}

function cloneTableColumn(table, index) {
  const rows = table.querySelectorAll("tr");
  return Array.from(rows).map((row) => {
    const element = row.children[index].cloneNode(true);
    row.appendChild(element);
    return element;
  });
}

let containerTable;

// Initialize the calculator when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  containerTable = document.querySelector("table");
  createCalculator();

  // Add event listener for the "Compare" button
  document
    .getElementById("compare")
    .addEventListener("click", createCalculator);
});
