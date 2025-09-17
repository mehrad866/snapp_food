let pasta = 0
let pizza = 0
let brger = 0
let salad = 0
let price = 0
let data
let firstkh = true
let ArraySabtSefaresh = []
let fetchedData = []
let p_sbad = document.getElementById("sbad")
async function fetchdata(){
    try{
        let responce = await fetch ("index.json",{method: "get"})
        data = await responce.json()

        data.forEach((item) => {
            fetchedData.push(item)
        })
    }catch(error){
        console.log(error);
    }
    finally{
        console.log("fetch data is over");
        
    }
} 
function fbrger(){
    brger++
    render()
}
function fpasta(){
    pasta++
    render()
}
function fpizza(){
    pizza++
    render()
}
function fsalad(){
salad++
    render()
}
function render(){
    if(firstkh == true){
        price=price*90/100
    }
    p_sbad.innerHTML=`
    
    <p>تعداد برگر ${brger}</p>
    <p>ـعداد پیتزا ${pizza}</p>
    <p> تعداد سالاد${salad}</p>
    <p>تعداد پاستا ${pasta}</p>
    <p>مجموع قیمت ${price}</p>
    `
}

function sabt(){
    ArraySabtSefaresh.push(brger)
    ArraySabtSefaresh.push(pasta)
    ArraySabtSefaresh.push(pizza)
    ArraySabtSefaresh.push(salad)
    brger = 0   
    pasta = 0   
    pizza = 0   
    salad = 0
    console.log(ArraySabtSefaresh);
    ArraySabtSefaresh.splice(0,4)
    p_sbad.innerHTML=``   
    firstkh = false
}