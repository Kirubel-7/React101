import { getStockData } from "./test";

function renderStockTicker (data) {
   const {name, sym, price, time} = data;
   const stockDisplayName = document.getElementById('name')
   const stockDisplaySymbol = document.getElementById('symbol')
   const stockDisplayPrice = document.getElementById('price')
   const stockDisplayPriceIcon = document.getElementById('price-icon')
   const stockDisplayTime = document.getElementById('time')
   

   setInterval(() => {
    const nextPrice = price();
    let previousPrice = null;

    if(previousPrice === 'null'){
        stockDisplayPrice.textContent = nextPrice;
        stockDisplayTime.textContent = time();
        previousPrice = nextPrice;
    }


   },1500)
}

function comparePrice(oldPrice, newPrice){

    if(oldPrice > newPrice){
        return 'down'
    }else if(oldPrice < newPrice){
        return 'up'
    }else {
        return 'same'
    } 
}