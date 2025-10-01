let error = document.getElementById("error")
let pasta = 0
let pizza = 0
let time = 0
let brger = 0
let timee = document.getElementById("timee")
let salad = 0
let price = 0
let p_sbad = document.getElementById("sbad")
let input_title = document.getElementById("input-title")
let input_info = document.getElementById("input-info")
let input_cost = document.getElementById("input-cost")
let input_img = document.getElementById("input-img")
let body = document.getElementById("body")
let gazajaded = []
let fetcheddata2 = []
let numder =0 
let firstkh = true
let ArraySabtSefaresh = []
let fetchedData = []


async function fetchdata(){
    try{
        let responce = await fetch ("index.json")
        let data = await responce.json()
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
fetchdata() 
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
    time =fetchedData[0].time*pasta+fetchedData[1].time*brger+fetchedData[2].time*pizza+fetchedData[3].time*salad
    price=fetchedData[0].cost*pasta+fetchedData[1].cost*brger+fetchedData[2].cost*pizza+fetchedData[3].cost*salad
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
    timee.innerHTML=`${time} دقیقه یه دیگر اماده میشود سفارش شما`
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

function fetchdata2(){
    let data2 = {
        title : input_title.value ,
        info : input_info.value ,
        cost : input_cost.value ,
        img : input_img.value
    }
    fetcheddata2.push(data2)
}

function rendermeno() {
    if(input_title.value == "" || input_cost.value == "" || input_info.value == ""){
        error.innerHTML= "لطفا فیلد ها را پر کنید"
    }
    else{

    fetchdata2()
    input_cost.value = ""
    input_info.value = ""
    input_title.value = ""
    input_img.value = ""
    body.innerHTML += `
    <div style="padding:5px;" class="card">
    <div class="card-body">
    <img alt="${fetcheddata2[numder].title}" src="${fetcheddata2[numder].img}" height="200px" width="200px">
    <p class="card-title">${fetcheddata2[numder].title}</p>
    <p class="card-text">${fetcheddata2[numder].info}</p>
    <p>${fetcheddata2[numder].cost}</p>
    <button id="${fetcheddata2[numder].title}" class="btn btn-outline-secondary">افزودن به سبد خرید</button>
    </div>
    </div>
    `
    gazajaded.push(fetcheddata2[numder].title)
    numder++  
    }

}