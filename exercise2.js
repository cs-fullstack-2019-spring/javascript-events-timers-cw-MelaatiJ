//my function that disables the type writer when the button is clicked
function whenallowtypingisclicked(e)
{
    if(allowType) //this sets its false to skip the first step
    {
        ta.setAttribute("disabled","" ); //set my attribute to disabled
        ta.value="";
        allowType = false;


    }
    else
    {
        ta.removeAttribute("disabled");
        ta.value="starttyping";
        allowType = true;
    }
}

var allowType = false;
//setting my boolean to false
var ta=document.getElementById("ta");
//grabbing my text area with its id
var allowtyping= document.getElementById("button");
//getting my allowtyping button with its id element

allowtyping.addEventListener("click",whenallowtypingisclicked);
//using an event listener when clicked it will run my function