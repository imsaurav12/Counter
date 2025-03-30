const countValue = document.getElementById('counter');

function increment(){
    //get value from UI
    let value = parseInt(countValue.innerText); // countValue.innerText string ke form me return krega, isliye 'parseInt' krrke usko integer me convert krenge
    value += 1;
    //set value into UI
    countValue.innerText = value;
}

const decrement = ()=>{
    //get value from UI
    let value = parseInt(countValue.innerText);
    value -= 1;
    //set value into UI
    countValue.innerText = value;
}

function resetCounter(){
    countValue.innerText=0;
}