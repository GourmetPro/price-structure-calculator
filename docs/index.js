// DOM Element Capture
function captureElements(table, columnIndex) {
    const nchild = columnIndex + 2;
  
    return {
      name: table.querySelector(
        `tr.name-row td:nth-child(${nchild}) input.name-input`
      ),
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
      cogsTotal: table.querySelector(
        `tr.cogs-heading td:nth-child(${nchild}) .cogs-total`
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
      //marketingBudget: table.querySelector(
      //  `tr.marketing-budget-row td:nth-child(${nchild}) input`
      //),
      //marketingBudgetPrice: table.querySelector(
      //  `tr.marketing-budget-row td:nth-child(${nchild}) .marketing-budget-price`
      //),
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
      name: elements.name.value,
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
      //marketingBudget: parseFloat(elements.marketingBudget.value) || 0,
    };
  }
  
  // Calculator Logic
  function calculateOutputs(inputs) {
    const baseCost = inputs.productionCosts;
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
    updateElement(elements.cogsTotal, data.exworksPrice);
    updateElement(elements.freightInsurancePrice, data.cifPrice);
    updateElement(elements.customDutiesPrice, data.priceAfterDuties);
    updateElement(elements.exciseTaxPrice, data.priceAfterDuties);
    updateElement(elements.domesticLogisticsPrice, data.cifLogisticsTotal);
    updateElement(elements.storagePrice, data.cifLogisticsTotal);
    updateElement(elements.importHandlingPrice, data.cifLogisticsTotal);
    updateElement(elements.importerMarginPrice, data.importerPrice);
    updateElement(elements.wholesalerMarginPrice, data.wholesalerPrice);
    updateElement(elements.retailerMarginPrice, data.retailerPrice);
    //updateElement(elements.marketingBudgetPrice, data.baseCost);
  
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
      index === 0
        ? extractTableColumn(containerTable, index + 1)
        : cloneTableColumn(containerTable, index);
    const elements = captureElements(containerTable, index);
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
  
    attachEventListeners(calculator);
  
    serializeCalculators(calculators);
  
    return calculator;
  }
  
  
  
  // Main function to tie it all together
  function updateCalculator(calculator) {
    calculator.inputs = extractInputs(calculator.elements);
    calculator.outputs = calculateOutputs(calculator.inputs);
    renderCalculator(calculator);
    serializeCalculators(calculators); // Update URL
  }
  
  
  
  // Function to delete a calculator
  function deleteCalculator(calculator) {
    if (calculators.size < 2) {
      showToast("Cannot delete the last calculator.", "#ff6347", "white");
      return;
    }
  
    calculator.column.forEach((element) => {
      element.remove();
    });
    calculators.delete(calculator);
    serializeCalculators(calculators); // Ensure URL is updated
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
      const originalElement = row.children[index];
      const clonedElement = originalElement.cloneNode(true);

      // Handle the name input field
      if (row.classList.contains('name-row')) {
        const originalInput = originalElement.querySelector('input.name-input');
        const clonedInput = clonedElement.querySelector('input.name-input');
        
        if (originalInput && originalInput.value.trim() !== '') {
          clonedInput.value = `${originalInput.value} copy`;
        } else {
          clonedInput.value = '';
        }
      }

    // Copy the value of the select element if it exists
    if (originalElement.querySelector('select')) {
      const originalSelect = originalElement.querySelector('select');
        const clonedSelect = clonedElement.querySelector('select');
        clonedSelect.value = originalSelect.value;
      }
      row.appendChild(clonedElement);
      return clonedElement;
    });
  }
  
  let containerTable;
  
  // Initialize the calculator when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    containerTable = document.querySelector("table");
    deserializeCalculators();
  
    document
      .getElementById("compare")
      .addEventListener("click", function () {
        const calculator = createCalculator();
        calculators.add(calculator);
        serializeCalculators(calculators);
      });
  });
  
  
  
  //document.getElementById("export").addEventListener("click", function() {
  //  document.getElementById("emailPopupWrapper").style.display = "flex";
 // });
  
  document.getElementById("submitEmail").addEventListener("click", async function() {
    const email = document.getElementById("userEmail").value;
    if (!email) {
      showToast("Please enter a valid email address.", "#ff6347", "white");
      return;
    }

    // Show loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';
    document.querySelector(".popup-container").appendChild(loadingSpinner);
  
    const calculatorsData = Array.from(calculators).map(calculator => ({
      name: calculator.inputs.name,
      unitsPerShipment: calculator.inputs.unitsPerShipment,
      currency: calculator.inputs.currency,
      productionCosts: calculator.inputs.productionCosts,
      manufacturerMargin: calculator.inputs.manufacturerMargin,
      freightInsurance: calculator.inputs.freightInsurance,
      customDuties: calculator.inputs.customDuties,
      exciseTax: calculator.inputs.exciseTax,
      domesticLogistics: calculator.inputs.domesticLogistics,
      storage: calculator.inputs.storage,
      importHandling: calculator.inputs.importHandling,
      importerMargin: calculator.inputs.importerMargin,
      wholesalerMargin: calculator.inputs.wholesalerMargin,
      retailerMargin: calculator.inputs.retailerMargin,
      //marketingBudget: calculator.inputs.marketingBudget,
      pricePerUnit: calculator.outputs.pricePerUnit,
      pricePerShipment: calculator.outputs.pricePerShipment,
    }));
  
    try {
      const response = await fetch('https://excel-generator.flat-salad-5e06.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ calculators: calculatorsData, email: email }),
      });

      // Remove loading spinner
      loadingSpinner.remove();
  
      if (response.ok) {

        // Clear the email input field
        document.getElementById("userEmail").value = "";
        
        // Show success toast
        showToast("Excel file has been sent to your email.", "#ffd212");
      } else {
        // Show error toast
        showToast("Failed to send Excel file. Please try again.", "#ff6347", "white");
      }
    } catch (error) {
      console.error('Error sending data:', error);
      loadingSpinner.remove();
      // Show error toast
      showToast("An error occurred. Please try again.", "#ff6347", "white");
    }
  
    //document.getElementById("emailPopupWrapper").style.display = "none";
  });
  
  //document.getElementById("cancelEmail").addEventListener("click", function() {
   // document.getElementById("emailPopupWrapper").style.display = "none";
  //});

  // Helper function to show toast
  function showToast(message, backgroundColor, textColor = "black") {
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      backgroundColor: backgroundColor,
      stopOnFocus: true,
      style: {
        color: textColor,
        borderRadius: "0.5rem",
      },
      closeOnClick: true,
      onClick: function(){} // Prevents closing on click
    }).showToast();
  
    // Change close button color to match text color
    const toastElement = document.querySelector('.toastify');
    if (toastElement) {
      const closeButton = toastElement.querySelector('.toast-close');
      if (closeButton) {
        closeButton.style.color = textColor;
      }
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  function updateComparisonContainerAndHeaderButtonsPadding() {
    const navContainer = document.querySelector('.nav-container');
    const comparisonContainer = document.querySelector('.comparison-container');
    const headerButtons = document.querySelector('.header-buttons');
    
    if (window.innerWidth > 480) {
      if (navContainer && comparisonContainer) {
        const leftDistance = navContainer.getBoundingClientRect().left;
        comparisonContainer.style.paddingLeft = `${leftDistance}px`;
      }
      
      if (navContainer && headerButtons) {
        const rightDistance = window.innerWidth - navContainer.getBoundingClientRect().right;
        headerButtons.style.paddingRight = `${rightDistance}px`;
      }
    } else {
      // Reset padding for mobile views
      if (comparisonContainer) {
        comparisonContainer.style.paddingLeft = '0';
      }
      if (headerButtons) {
        headerButtons.style.paddingRight = '0';
      }
    }
  }
  
  const debouncedUpdatePadding = debounce(updateComparisonContainerAndHeaderButtonsPadding, 250);
  
  document.addEventListener('DOMContentLoaded', () => {
    updateComparisonContainerAndHeaderButtonsPadding();
    window.addEventListener('resize', debouncedUpdatePadding);
  });


  function attachEventListeners(calculator) {
    // Add input listeners to update calculator and URL
    Object.values(calculator.elements).forEach(element => {
      if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
        element.addEventListener('input', function () {
          updateCalculator(calculator);
        });
      }
    });
  
    // Delete button listener
    calculator.elements.deleteButton.addEventListener('click', function () {
      deleteCalculator(calculator);
    });
  }
  
  function serializeCalculators(calculators) {
    const urlParams = new URLSearchParams();
    const paramKeys = ['n', 'c', 'us', 'pc', 'mm', 'fi', 'cd', 'et', 'dl', 's', 'ih', 'im', 'wm', 'rm'];
    
    // Initialize an object to hold arrays for each parameter
    const paramValues = {};
    paramKeys.forEach(key => paramValues[key] = []);
    
    calculators.forEach(calculator => {
      const inputs = calculator.inputs;
      paramValues['n'].push(encodeURIComponent(inputs.name || ''));
      paramValues['c'].push(encodeURIComponent(inputs.currency || 'USD'));
      paramValues['us'].push(inputs.unitsPerShipment || '');
      paramValues['pc'].push(inputs.productionCosts || '');
      paramValues['mm'].push(inputs.manufacturerMargin || '');
      paramValues['fi'].push(inputs.freightInsurance || '');
      paramValues['cd'].push(inputs.customDuties || '');
      paramValues['et'].push(inputs.exciseTax || '');
      paramValues['dl'].push(inputs.domesticLogistics || '');
      paramValues['s'].push(inputs.storage || '');
      paramValues['ih'].push(inputs.importHandling || '');
      paramValues['im'].push(inputs.importerMargin || '');
      paramValues['wm'].push(inputs.wholesalerMargin || '');
      paramValues['rm'].push(inputs.retailerMargin || '');
      // Add more parameters here as needed
    });
    
    // Set the URL parameters
    paramKeys.forEach(key => {
      const values = paramValues[key];
      // Only include the parameter if there are non-empty values
      if (values.some(value => value !== '')) {
        urlParams.set(key, values.join(','));
      }
    });
    
    window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
  }
  
  
  
  function updateURLWithCalculators() {
    const serializedData = serializeCalculators(calculators);
    const newURL = `${window.location.pathname}?calculators=${serializedData}`;
    window.history.replaceState(null, '', newURL);
  }
  
  // Deserialization Functions
  function deserializeCalculators() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramKeys = ['n', 'c', 'us', 'pc', 'mm', 'fi', 'cd', 'et', 'dl', 's', 'ih', 'im', 'wm', 'rm'];
    const paramValues = {};
    
    // Extract parameter values as arrays
    paramKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value !== null) {
        paramValues[key] = value.split(',').map(decodeURIComponent);
      } else {
        paramValues[key] = [];
      }
    });
    
    // Determine the number of calculators (length of the longest parameter array)
    const numCalculators = Math.max(...paramKeys.map(key => paramValues[key].length));
    
    // Reconstruct calculators
    for (let i = 0; i < numCalculators; i++) {
      const inputs = {
        name: paramValues['n'][i] || '',
        currency: paramValues['c'][i] || 'USD',
        unitsPerShipment: parseFloat(paramValues['us'][i]) || 0,
        productionCosts: parseFloat(paramValues['pc'][i]) || 0,
        manufacturerMargin: parseFloat(paramValues['mm'][i]) || 0,
        freightInsurance: parseFloat(paramValues['fi'][i]) || 0,
        customDuties: parseFloat(paramValues['cd'][i]) || 0,
        exciseTax: parseFloat(paramValues['et'][i]) || 0,
        domesticLogistics: parseFloat(paramValues['dl'][i]) || 0,
        storage: parseFloat(paramValues['s'][i]) || 0,
        importHandling: parseFloat(paramValues['ih'][i]) || 0,
        importerMargin: parseFloat(paramValues['im'][i]) || 0,
        wholesalerMargin: parseFloat(paramValues['wm'][i]) || 0,
        retailerMargin: parseFloat(paramValues['rm'][i]) || 0,
        // Add more parameters here as needed
      };
      
      const calculator = createCalculatorWithInputs(inputs);
      calculators.add(calculator);
    }
    
    if (numCalculators === 0) {
      // No calculators in URL, create a default one
      const calculator = createCalculator();
      calculators.add(calculator);
    }
  }
  
  
  
  function loadCalculatorsFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const calculatorsParam = urlParams.get('calculators');
    if (calculatorsParam) {
      const calculatorDataStrings = calculatorsParam.split('|');
      calculatorDataStrings.forEach(dataString => {
        const inputs = deserializeCalculators(dataString);
        const calculator = createCalculatorWithInputs(inputs);
        calculators.add(calculator);
      });
    } else {
      // No calculators in URL, create a default one
      const calculator = createCalculator();
      calculators.add(calculator);
    }
  }
  
  function createCalculatorWithInputs(inputs) {
    const index = calculators.size;
    const column =
      index === 0
        ? extractTableColumn(containerTable, index + 1)
        : cloneTableColumn(containerTable, index);
  
    const elements = captureElements(containerTable, index);
  
    // Set element values based on inputs
    Object.keys(inputs).forEach(key => {
      if (elements[key]) {
        if (elements[key] instanceof HTMLInputElement || elements[key] instanceof HTMLSelectElement) {
          elements[key].value = inputs[key];
        }
      }
    });
  
    const outputs = calculateOutputs(inputs);
    const calculator = { column, elements, inputs, outputs };
    renderCalculator(calculator);
    attachEventListeners(calculator);
    return calculator;
  }

  function closeSharePopup() {
    document.querySelector('.share-popup').style.display = 'none';
  }

  function openSharePopup() {
    document.querySelector('.share-popup').style.display = 'flex';
    
    const currentURL = window.location.href;
    document.querySelector('.url-text').textContent = currentURL;
  }

  function handleCopyButtonClick(button) {
    button.disabled = true; // Disable button to prevent multiple clicks
  
    navigator.clipboard.writeText(window.location.href).then(() => {
      button.textContent = 'Copied';
  
      setTimeout(() => {
        button.textContent = 'Copy';
        button.disabled = false; // Re-enable button after 2 seconds
      }, 2000);
    }).catch(err => {
      console.error('Copy to clipboard failed:', err);
      showToast("Failed to copy URL. Please try again.", "#ff6347", "white");
      button.disabled = false; // Re-enable button even if copy fails
    });
  }

  function handleShareClick(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
  
    let shareURL = '';
  
    switch (platform) {
      case 'x':
        // X (formerly Twitter)
        shareURL = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'facebook':
        shareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareURL = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        break;
      case 'email':
        shareURL = `mailto:?subject=${text}&body=Check out this link: ${url}`;
        break;
      default:
        showToast("Unsupported sharing platform.", "#ff6347", "white");
        return;
    }
  
    // Open the share URL in a new window/tab
    window.open(shareURL, '_blank', 'noopener,noreferrer');
  }
  
  // Function to initialize share buttons
  function initializeShareButtons() {
    const shareElements = document.querySelectorAll('[share-link]');
  
    shareElements.forEach(element => {
      const platform = element.getAttribute('share-link');
  
      element.addEventListener('click', () => {
        handleShareClick(platform);
      });
    });
  }

  document.querySelector('.close').addEventListener('click', closeSharePopup);
  document.querySelector('.share-button').addEventListener('click', openSharePopup);
  document.querySelector('.copy-button').addEventListener('click', function() {handleCopyButtonClick(this);});
  document.addEventListener('DOMContentLoaded', () => {initializeShareButtons();});

  
  