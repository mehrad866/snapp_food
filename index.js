let pasta = 0
let pizza = 0
let brger = 0
let salad = 0
let price
let data
let fetchedData = []
let btn_pasta = document.getElementById("btn_pasta")
let btn_pizza = document.getElementById("btn_pizza")
let btn_brger = document.getElementById("btn_brger")
let btn_salad = document.getElementById("btn_salad")
let p_sbad = document.getElementById("sbad")
async function fetchdata(){
    try{
        let responce = await fetch ("index.json",{method: "get"})
        data = await responce.json()

        data.product.name.forEach((item) => {
            fetchedData.push(item)
        })
    }catch(error){
        console.log(error);
    }
    finally{
        console.log("fetch data is over");
        
    }
} 

btn_brger.addEventListener("click" , function (){
    brger++
    render()
})
btn_pasta.addEventListener("click" , function (){
    pasta++
    render()
})
btn_pizza.addEventListener("click" , function (){
    pizza++
    render()
})
btn_salad.addEventListener("click" , function (){
    salad++
    render()
})
function render(){
    price = fetchedData[0].cost*pasta+ fetchedData[1].cost*brger+ fetchedData[2].cost*pizza+ fetchedData[3].cost*salad
    p_sbad.innerHTML=`
    
    <p>تعداد برگر ${brger}</p>
    <p>ـعداد پیتزا ${pizza}</p>
    <p> تعداد سالاد${salad}</p>
    <p>تعداد پاستا ${pasta}</p>
    <p>مجموع قیمت ${price}</p>
    `
}
