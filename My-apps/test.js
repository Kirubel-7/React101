export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: randomBetween0And3, 
        time: timeformatter
    }
}

function timeformatter(date = new Date()){
  const hours   = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  return `${hours}:${minutes}:${seconds}`;
}

function randomBetween0And3() {
    return Number((Math.random() * 3).toFixed(2))
}

console.log(getStockData())
