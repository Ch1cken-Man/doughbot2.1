var currentOrder = [0,0,0,0,0,0];


function readOrder(doughnutCode, labelid){
    document.getElementById(labelid).textContent = currentOrder[doughnutCode];
}


function changeOrder(doughnutCode, sign, labelid){
    currentOrder[doughnutCode] += sign;
    readOrder(doughnutCode, labelid);
}
