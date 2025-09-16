let pasta = 0
let pizza = 0
let brger = 0
let salad = 0
let data
let fetchedData = []
async function fetchdata(){
    try{
        let responce = await fetch ("index.json",{method: "get"})
        data = await responce.json()

        data.product.name.forEach((item) => {
            fetchedData.push(item)
        })
        console.log(fetchedData);
        
    }catch(error){
        console.log(error);
    }
    finally{
        console.log("fetch data is over");
        
    }
} 