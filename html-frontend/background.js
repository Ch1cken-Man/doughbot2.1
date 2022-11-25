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


function loadPayementPage(){
    
    for(let i = 0; i<currentOrder.length;i++){
        if(i>0){
            const newNode = document.createElement("div");
            const textNode = document.createTextNode(currentOrder[i]+"works");
            newNode.appendChile(textNode);

            const container = document.getElementById("the-summary");
            container.insertBefore(newNode, container.children[0]);
        }
    }
}

