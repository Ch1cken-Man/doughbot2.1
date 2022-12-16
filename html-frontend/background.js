

var currentOrder = [0,0,0,0,0,0];



var priceKey = [2.75,2.75,2.75,2.75,2.75,2.75]
totalPrice = 0

//changes a label's text
function changeLabel(text, labelid){
    document.getElementById(labelid).textContent = text;
}

//frontpage.html used-
//calculates order total and updates label at bottom
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

//the function that changes the order when the add or remove button is pressed
function changeOrder(doughnutCode, sign, labelid){
    var expectedOrder = currentOrder[doughnutCode] + sign;
    if(expectedOrder>=0){
        currentOrder[doughnutCode] += sign;
    }
    var theText = currentOrder[doughnutCode];
    changeLabel(theText, labelid);
    calculateTotal();
}


//takes the currentOrder to the confirmation page
function exitToConfirmationPage(){
    stringedOrder = JSON.stringify(currentOrder);
    sessionStorage.setItem("carriedOrder",stringedOrder);
    window.location.href='confirmationPage.html';
    
}



//gets currentOrder from the previous page
//adds the items in the order to a list to show what you choose.
function loadConfirmationPage(){
    unparsedOrder = sessionStorage.getItem("carriedOrder");
    currentOrder = JSON.parse(unparsedOrder);

    orderLength = currentOrder.length;
    for (var i = 0; i<orderLength; i++){
        if(currentOrder[i]>0){
            addDoughnutToOrderConfirmation(i);
        }
    }
}

function exitToPaymentPage(){
    alert("exiting to payment page");
}

function loadPaymentPage(){
    alert("next page loaded.");
}




function addDoughnutToOrderConfirmation(doughnutID){

    //the container everything goes in
    var oneDoughnutOrderContainer = document.createElement('div');
    oneDoughnutOrderContainer.className = 'single-dough-container';    


    //image
    var image = document.createElement('img');
    image.src = "reward-doughnut.png";
    image.style.width = '100%';
    image.style.height = '100%';
    
    
    //text-how many of the specific doughnut
    var numberDoughnutIndicator = document.createElement('div');
    numberDoughnutIndicator.id = "num-order-indicator";
    var numText = document.createTextNode('x'+currentOrder[doughnutID]);
    numberDoughnutIndicator.appendChild(numText);


    //adds elements to microcontaine
    
    oneDoughnutOrderContainer.appendChild(image);
    oneDoughnutOrderContainer.appendChild(numberDoughnutIndicator);
    
    
    //appends microcontainer to the main container
    var wholeContainer = document.getElementById('the-summary');
    wholeContainer.appendChild(oneDoughnutOrderContainer);
    
}
