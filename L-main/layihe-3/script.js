let rubl = document.querySelector('.rubl')
let dollar = document.querySelector('.dollar')
let euro = document.querySelector('.euro')
let  gbp = document.querySelector('.gbp')
let rubl2 = document.querySelector('.rubl2')
let dollar2 = document.querySelector('.dollar2')
let euro2 = document.querySelector('.euro2')
let gbp2 = document.querySelector('.gbp2')
let exchange1 = document.querySelector('.exchange1')
let exchange2 = document.querySelector('.exchange2')
let  input1 = document.querySelector('.input1')
let  input2 = document.querySelector('.input2')
let  bottom = document.querySelector('.bottom-bottom')
let value1 = document.querySelector('.value1')
let value2 = document.querySelector('.value2')
let currency1='RUB';
let currency2='USD';

rubl.addEventListener('click',f1)
function f1(e) {
    e.target.classList.toggle('deyis')
    gbp.classList.remove('deyis')
    euro.classList.remove('deyis')
    dollar.classList.remove('deyis')
   }

dollar.addEventListener('click',f2)
function f2(e) {
       e.target.classList.toggle('deyis')
       gbp.classList.remove('deyis')
       euro.classList.remove('deyis')
       rubl.classList.remove('deyis')
      }
      
gbp.addEventListener('click',f3)
function f3(e) {
    e.target.classList.toggle('deyis')
    rubl.classList.remove('deyis')
    euro.classList.remove('deyis')
    dollar.classList.remove('deyis')
   }
   
euro.addEventListener('click',f4)
function f4(e) {
    e.target.classList.toggle('deyis')
    gbp.classList.remove('deyis')
    rubl.classList.remove('deyis')
    dollar.classList.remove('deyis')
   }




   
rubl2.addEventListener('click',g1)
function g1(e) {
    e.target.classList.toggle('deyis')
    gbp2.classList.remove('deyis')
    euro2.classList.remove('deyis')
    dollar2.classList.remove('deyis')
   }

dollar2.addEventListener('click',g2)
   function g2(e) {
       e.target.classList.toggle('deyis')
       gbp2.classList.remove('deyis')
       euro2.classList.remove('deyis')
       rubl2.classList.remove('deyis')
      }
      
gbp2.addEventListener('click',g3)
function g3(e) {
    e.target.classList.toggle('deyis')
    rubl2.classList.remove('deyis')
    euro2.classList.remove('deyis')
    dollar2.classList.remove('deyis')
   }
   
euro2.addEventListener('click',g4)
function g4(e) {
    e.target.classList.toggle('deyis')
    gbp2.classList.remove('deyis')
    rubl2.classList.remove('deyis')
    dollar2.classList.remove('deyis')
   }

// // leftside
// exchange1.forEach.((btnleft)=>{
//   btnleft.addEventListener('click',(e)=>{
//     currency1= e.target.id;
//     let btnParent = e.target.parentElement.children;
//     for(let i=0; i< btnParent.length; i++){
//       btnParent[i].classList.remove('active_btn');
//     }
//     e.target.classList.add('active_btn');
//     fetch(`https://aphttps://api.exchangerate.host/latest?base=${currency1}&symbols=${currency2}`)
//     .then((res)=>res.json())
//     .then((data)=>{
//       let ratesValue=Object.values(data.rates);
//       let ratesKey=Object.keys(data.rates);
//       inpurRight.value=ratesValue*inputLeft.value;
//       hesab1.innerHTML=`1${currency1}=${ratesValue} ${ratesKey}`
//       hesab2.innerHTML=`1${ratesKey}=${ratesValue} ${currency1}`
//     })
//   })
// })
// // rightside
// exchange2.forEach.((btnleft)=>{
//   btnleft.addEventListener('click',(e)=>{
//     currency1= e.target.id;
//     let btnParent = e.target.parentElement.children;
//     for(let i=0; i< btnParent.length; i++){
//       btnParent[i].classList.remove('active_btn');
//     }
//     e.target.classList.add('active_btn');
//     fetch(`https://aphttps://api.exchangerate.host/latest?base=${currency1}&symbols=${currency2}`)
//     .then((res)=>res.json())
//     .then((data)=>{
//       let ratesValue=Object.values(data.rates);
//       let ratesKey=Object.keys(data.rates);
//       inpurRight.value=ratesValue*inputLeft.value;
//       hesab1.innerHTML=`1${currency1}=${ratesValue} ${ratesKey}`
//       hesab2.innerHTML=`1${ratesKey}=${ratesValue} ${currency1}`
//     })
//   })
// })



//RUBL
bottom.addEventListener('click', dogru)
function dogru() {
    if (rubl.classList.contains('deyis') && rubl2.classList.contains('deyis')){
     input2.value = input1.value
     value1.innerText = '1 RUB = 1 RUB'
     value2.innerText = '1 RUB = 1 RUB'
     
    }
 
}

bottom.addEventListener('click', dogru5)
function dogru5() {
    let deyer 
    let deyer2
    if (rubl.classList.contains('deyis') && dollar2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=RUB&to=USD')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 RUB ' + '=' + ' ' + deyer + ' USD'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=USD&to=RUB')
  .then(res => res.json())
  .then(data => {
    
    deyer2 = data.result
    value2.innerText = '1 USD ' + '=' + ' ' + deyer2 + ' RUB'
  })
    }
}

bottom.addEventListener('click', dogru6)
function dogru6() {
    let deyer 
    let deyer2
    if (rubl.classList.contains('deyis') && euro2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=RUB&to=EUR')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 RUB ' + '=' + ' ' + deyer + ' EUR'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=EUR&to=RUB')
  .then(res => res.json())
  .then(data => {
    
    deyer2 = data.result
    value2.innerText = '1 EUR ' + '=' + ' ' + deyer2 + ' RUB'
  })
    }
}

bottom.addEventListener('click', dogru7)
function dogru7() {
    let deyer 
    let deyer2
    if (rubl.classList.contains('deyis') && gbp2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=RUB&to=GBP')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 RUB ' + '=' + ' ' + deyer + ' GBP'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=RUB')
  .then(res => res.json())
  .then(data => {
    
    deyer2 = data.result
    value2.innerText = '1 GBP ' + '=' + ' ' + deyer2 + ' RUB'
  })
    }
}




//USD
bottom.addEventListener('click', dogru2)
function dogru2() {
    if (dollar.classList.contains('deyis') && dollar2.classList.contains('deyis')){
     input2.value = input1.value
     console.log('duz')
     value1.innerText = '1 USD = 1 USD '
     value2.innerText = '1 USD = 1 USD'
    }
 
}

bottom.addEventListener('click', dogru8)
function dogru8() {
    let deyer 
    let deyer2
    if (dollar.classList.contains('deyis') && rubl2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=USD&to=RUB')
        .then(res => res.json())
        .then(data => {
         
          deyer = data.result
          value1.innerText = '1 USD ' + '=' + ' ' + deyer + ' RUB'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=RUB&to=USD')
  .then(res => res.json())
  .then(data => {
    
    deyer2 = data.result
    value2.innerText = '1 RUB ' + '=' + ' ' + deyer2 + ' USD'
  })
    }
}

bottom.addEventListener('click', dogru9)
function dogru9() {
    let deyer 
    let deyer2
    if (dollar.classList.contains('deyis') && euro2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=USD&to=EUR')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 USD ' + '=' + ' ' + deyer + ' EUR'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=EUR&to=USD')
  .then(res => res.json())
  .then(data => {
    
    deyer2 = data.result
    value2.innerText = '1 EUR ' + '=' + ' ' + deyer2 + ' USD'
  })
    }
}

bottom.addEventListener('click', dogru10)
function dogru10() {
    let deyer 
    let deyer2
    if (dollar.classList.contains('deyis') && gbp2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=USD&to=GBP')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 USD ' + '=' + ' ' + deyer + ' GBP'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=USD')
  .then(res => res.json())
  .then(data => {
    
    deyer2 = data.result
    value2.innerText = '1 GBP ' + '=' + ' ' + deyer2 + ' USD'
  })
    }
}




//EURO
bottom.addEventListener('click', dogru3)
function dogru3() {
    if (euro.classList.contains('deyis') && euro2.classList.contains('deyis')){
     input2.value = input1.value
     value1.innerText = '1 EURO = 1 EURO'
     value2.innerText = '1 EURO = 1 EURO'
    }
 
}

bottom.addEventListener('click', dogru11)
function dogru11() {
    let deyer 
    let deyer2
    if (euro.classList.contains('deyis') && rubl2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=EUR&to=RUB')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 EURO ' + '=' + ' ' + deyer + ' RUB'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=RUB&to=EUR')
  .then(res => res.json())
  .then(data => {
    
    deyer2 = data.result
    value2.innerText = '1 RUB ' + '=' + ' ' + deyer2 + ' EURO'
  })
    }
}

bottom.addEventListener('click', dogru12)
function dogru12() {
    let deyer 
    let deyer2
    if (euro.classList.contains('deyis') && dollar2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=EUR&to=USD')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 EURO ' + '=' + ' ' + deyer + ' USD'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=USD&to=EUR')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 USD ' + '=' + ' ' + deyer2 + ' EURO'
  })
    }
}


bottom.addEventListener('click', dogru13)
function dogru13() {
    let deyer 
    let deyer2
    if (euro.classList.contains('deyis') && gbp2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=EUR&to=GBP')
        .then(res => res.json())
        .then(data => {
          
          deyer = data.result
          value1.innerText = '1 EURO ' + '=' + ' ' + deyer + ' GBP'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 GBP ' + '=' + ' ' + deyer2 + ' EURO'
  })
    }
}




//GBP
bottom.addEventListener('click', dogru4)
function dogru4() {
    if (gbp.classList.contains('deyis') && gbp2.classList.contains('deyis')){
     input2.value = input1.value
     value1.innerText = '1 GBP = 1 GBP'
     value2.innerText = '1 GBP = 1 GBP'
    }
 
}

bottom.addEventListener('click', dogru14)
function dogru14() {
    let deyer 
    let deyer2
    if (gbp.classList.contains('deyis') && rubl2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=GBP&to=RUB')
        .then(res => res.json())
        .then(data => {
        
          deyer = data.result
          value1.innerText = '1 GBP ' + '=' + ' ' + deyer + ' RUB'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 RUB ' + '=' + ' ' + deyer2 + ' GBP'
  })
    }
}

bottom.addEventListener('click', dogru15)
function dogru15() {
    let deyer 
    let deyer2
    if (gbp.classList.contains('deyis') && dollar2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=GBP&to=USD')
        .then(res => res.json())
        .then(data => {
        
          deyer = data.result
          value1.innerText = '1 GBP ' + '=' + ' ' + deyer + ' USD'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=USD&to=GBP')
  .then(res => res.json())
  .then(data => {
 
    deyer2 = data.result
    value2.innerText = '1 USD ' + '=' + ' ' + deyer2 + ' GBP'
  })
    }
}

bottom.addEventListener('click', dogru16)
function dogru16() {
    let deyer 
    let deyer2
    if (gbp.classList.contains('deyis') && euro2.classList.contains('deyis')){
        fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR')
        .then(res => res.json())
        .then(data => {
        
          deyer = data.result
          value1.innerText = '1 GBP ' + '=' + ' ' + deyer + ' EUR'
          input2.value = input1.value * deyer
        })

    fetch('https://api.exchangerate.host/convert?from=EUR&to=GBP')
  .then(res => res.json())
  .then(data => {
   
    deyer2 = data.result
    value2.innerText = '1 EUR ' + '=' + ' ' + deyer2 + ' GBP'
  })
    }
}