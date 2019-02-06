
//my function to send an alert if the box is clicked
function whencheckboxisclicked(e)
{
    alert("I TOLD YOU NOT TO CLICK IT");
    e.preventDefault(checkbox)
}


var checkbox= document.addEventListener("click", whencheckboxisclicked);
//using an event listener when the i click the checkbox it will run my function
