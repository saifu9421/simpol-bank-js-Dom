// step-1 : even lisiner withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
        
    // step-2:get the withdraw amount input field
    const withdrawFiend =  document.getElementById('withdraw-field');
        const withdrawString =  withdrawFiend.value ;
             const withdrawValue = parseFloat(withdrawString);
            const windowTotal  =  document.getElementById('withdraw-total') ;
                  windowTotal.innerText = withdrawValue;
            // step-3 : get the withdraw value
            const balanceFiendElement =  document.getElementById('balance-total');
            const  balanceFiendString =  balanceFiendElement.innerText;
            const balanceFiend =  parseFloat(balanceFiendString);
            const totalBalance = balanceFiend - withdrawValue;
            balanceFiendElement.innerText = totalBalance;
            

                //   step-7 : clean the withdraw field 
                withdrawFiend.value ='';
});
