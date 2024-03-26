document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Receives gross pay value
    const grossPay = parseFloat(document.getElementById('grossPay').value);
    const annualPay = grossPay * 12;
    const personalRelief = 2400;
    let taxRate = 0;
    let nhifDeduction = 0;
   
  
    // Determines tax rate to calculate PAYE on annual pay
    if (annualPay <= 288000) {
      taxRate = 0.1;
    } else if (annualPay <= 388000) {
      taxRate = 0.25;
    } else if (annualPay <= 6000000) {
      taxRate = 0.3;
    } else if (annualPay <= 9600000) {
      taxRate = 0.325;
    } else {
      taxRate = 0.35;
    }
  
    // Calculates NHIF deductions from gross pay
    if (grossPay < 6000) {
      nhifDeduction = 150;
    } else if (grossPay < 8000) {
      nhifDeduction = 300;
    } else if (grossPay < 12000) {
      nhifDeduction = 400;
    } else if (grossPay < 15000) {
      nhifDeduction = 500;
    } else if (grossPay < 20000) {
      nhifDeduction = 600;
    } else if (grossPay < 25000) {
      nhifDeduction = 750;
    } else if (grossPay < 30000) {
      nhifDeduction = 850;
    } else if (grossPay < 35000) {
      nhifDeduction = 900;
    } else if (grossPay < 40000) {
      nhifDeduction = 950;
    } else if (grossPay < 45000) {
      nhifDeduction = 1000;
    } else if (grossPay < 50000) {
      nhifDeduction = 1100;
    } else if (grossPay < 60000) {
      nhifDeduction = 1200;
    } else if (grossPay < 70000) {
      nhifDeduction = 1300;
    } else if (grossPay < 80000) {
      nhifDeduction = 1400;
    } else if (grossPay < 90000) {
      nhifDeduction = 1500;
    } else if (grossPay < 100000) {
      nhifDeduction = 1600;
    } else {
      nhifDeduction = 1700;
    }
  
    // Deducts 1.5% for housing levy
    const housingLevy = grossPay * 0.015;
  
    // Calculates net salary
    const taxableIncome = annualPay - personalRelief;
    let taxAmount = taxableIncome * taxRate;
    let payE = taxAmount / 12;
    const netSalary = grossPay - (taxAmount / 12) - (nhifDeduction / 12) - housingLevy;
  
    // Gives the results
    // Update the result display in the summary section
    document.getElementById('grossPayValue').textContent = grossPay.toFixed(2);
    document.getElementById('personalReliefValue').textContent = personalRelief.toFixed(2);
    document.getElementById('payEValue').textContent = payE.toFixed(2);
    document.getElementById('nhifDeductionValue').textContent = nhifDeduction.toFixed(2);
    document.getElementById('housingLevyValue').textContent = housingLevy.toFixed(2);
    document.getElementById('netSalaryValue').textContent = netSalary.toFixed(2);
  });

  //  Resets the calculator for new calculation
function refreshPage() {
    window.location.reload();
}