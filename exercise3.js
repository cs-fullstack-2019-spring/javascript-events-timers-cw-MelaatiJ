function startcountdown() // my function for my loop to iterate through each number
{
    for(var i=10;i>=0;i--) // started my count from 10
    {
        header.innerHTML=i;
        console.log(i)
    }
    console.log("liftoff") // console log liftoff after the numbers
}

var header = document.getElementById("emptyheader");  // calling my header with my id
var countdownbutton=document.getElementById("countdown"); // calling my button with its id

countdownbutton.addEventListener("click",startcountdown);