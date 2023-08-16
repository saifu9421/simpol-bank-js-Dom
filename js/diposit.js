// step-1: add event Lisitener  to the deposit button 
 
   document.getElementById('btn-deposit').addEventListener('click',function(){
  //   step-2: get  the deposit amount the input field
   // for input field  use .value
               const depositFiend = document.getElementById('deposit-field');
               const depositAmountString = depositFiend.value ;
               const depositAmount = parseFloat(depositAmountString);
        
    // step-3: get the deposit current  total 
    //  for non input(element other the  input, textArea) use inner text  to get the  text 
      const depositTotalElement = document.getElementById('diposit-total');
      const depositTotalString  = depositTotalElement.innerText;
           const depositTotal = parseFloat(depositTotalString);
      const totalDeposit  =  depositTotal + depositAmount;
      depositTotalElement.innerText = totalDeposit;


//     step-  4 : fiend the total balance 

        const balanceFiendElement =  document.getElementById('balance-total');
       const  balanceFiendString =  balanceFiendElement.innerText;
        const balanceFiend =  parseFloat(balanceFiendString);
        const totalBalance = balanceFiend + depositAmount;
        balanceFiendElement.innerText = totalBalance;
        
    //   step-7 : clear the deposit field 
        depositFiend.value = '';
    
});