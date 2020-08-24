var turn = document.getElementById("turn");    
    
function getwinner()
    {
        var box1 = document.getElementById("box1");
        var box2 = document.getElementById("box2");
        var box3 = document.getElementById("box3");
        var box4 = document.getElementById("box4");
        var box5 = document.getElementById("box5");
        var box6 = document.getElementById("box6");
        var box7 = document.getElementById("box7");
        var box8 = document.getElementById("box8");
        var box9 = document.getElementById("box9");
    
if(box1.innerHTML != "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    {
     select_winner_boxes(box1, box2, box3);   
    }
if(box4.innerHTML != "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
    {
     select_winner_boxes(box4, box5, box6);   
    }
if(box7.innerHTML != "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
    {
     select_winner_boxes(box7, box8, box9);   
    }    
if(box1.innerHTML != "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
    {
     select_winner_boxes(box1, box4, box7);
    }
if(box2.innerHTML != "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    {
     select_winner_boxes(box2, box5, box8);
    }    
if(box3.innerHTML != "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    {
     select_winner_boxes(box3, box6, box9);
    }
if(box1.innerHTML != "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    {
     select_winner_boxes(box1, box5, box9);   
    }
if(box3.innerHTML != "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    {
     select_winner_boxes(box3, box5, box7);   
    }
}

    
var boxes = document.querySelectorAll("#main div");
var xo = 0;
 
for(var i=0; i<boxes.length; i++)
{
    boxes[i].onclick = function()
            {
             if(this.innerHTML !== "X" && this.innerHTML !== "O")
                {
                   if(xo % 2 ===0)    
                       {
                         this.innerHTML="X";
                         turn.innerHTML = "O - Turns Now";
                         getwinner();
                         xo = xo+1;
                       }
                    else    
                       {
                         this.innerHTML="O";
                         turn.innerHTML = "X - Turns Now";
                         getwinner();
                         xo = xo+1;
                       }
                 }
        }
}
    
function select_winner_boxes(b1, b2, b3)
{
    b1.style.background = "red";
    b2.style.background = "red";
    b3.style.background = "red";
    turn.innerHTML = b1.innerHTML + " Won! Congrats";
}

function replay()
    {
        for(var i=0; i<boxes.length; i++)
            {
                boxes[i].innerHTML = "";
                boxes[i].style.background = "white";
                turn.innerHTML = "Start Now";
            }
    }