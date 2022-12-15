

var currentOrder = [0,0,0,0,0,0];



var priceKey = [2.75,2.75,2.75,2.75,2.75,2.75]
totalPrice = 0

function changeLabel(text, labelid){
    document.getElementById(labelid).textContent = text;
}

function calculateTotal(){
    totalPrice = 0;
    for(let i = 0; i <currentOrder.length; i++){
        totalPrice += currentOrder[i]*priceKey[i];
    }
    if(totalPrice>=100){
        alert("you have ordered $100+ dollars of doughnuts. proceed??");
    }
    changeLabel(("total: $"+totalPrice), 'order-total');

}


function changeOrder(doughnutCode, sign, labelid){
    var expectedOrder = currentOrder[doughnutCode] + sign;
    if(expectedOrder>=0){
        currentOrder[doughnutCode] += sign;
    }
    var theText = currentOrder[doughnutCode];
    changeLabel(theText, labelid);
    calculateTotal();
}



function exitToConfirmationPage(){
    sessionStorage.setItem("carriedOrder",currentOrder);
    window.location.href='confirmationPage.html';
    
}




function loadConfirmationPage(){
    currentOrder = sessionStorage.getItem("carriedOrder");
    orderLength = currentOrder.length;
    for (var i = 0; i<orderLength; i++){
        alert("works");    
    }
}

function loadPaymentPage(){
    alert("next page loaded.");
}




function addDoughnutToOrderConfirmation(tags, nodeText){
    var tag = document.createElement(tags);
    var text = document.createTextNode(nodeText);
    tag.appendChild(text);
    var element = document.getElementById("the-summary");
    element.appendChild(tag);
}
