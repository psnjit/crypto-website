const API_KEY= "CG-JZSUUjDAFzYB9e1uKUUjbeqG";
const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr';
const pricePoints = document.querySelectorAll('h3');

async function setData(){
    const response= await fetch(URL);
    const data= await response.json();
    console.log(data);
    pricePoints[0].innerHTML=data.bitcoin.inr+' INR';
    pricePoints[1].innerHTML=data.ethereum.inr+' INR';
    pricePoints[2].innerHTML=data.dogecoin.inr+' INR';
}

setInterval(setData, 1000);