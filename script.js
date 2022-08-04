var calculator=document.createElement("div");
calculator.className="calc";
document.body.append(calculator);

var heading=document.createElement("div");
heading.className="h";
heading.innerText="+ x / Calculator - % .";
calculator.append(heading);


var screen=document.createElement("input");
screen.className="scndiv";
screen.type="text";
screen.placeholder="0";
screen.setAttribute("onkeyup","display()");
calculator.append(screen);


var numbers=document.createElement("div");
numbers.className="numdiv";
calculator.append(numbers);



var clear=document.createElement("button");
clear.className="numbers";
clear.setAttribute("type","button")
clear.innerText="C";
clear.setAttribute("onclick","clears()");


var front=document.createElement("button");
front.className="numbers";
front.setAttribute("type","button")
front.innerText="+/-";
front.setAttribute("onclick","fronts()");


var perc=document.createElement("button");
perc.className="numbers";
perc.setAttribute("type","button")
perc.innerText="%";
perc.setAttribute("onclick","percs()");


var divi=document.createElement("button");
divi.className="numbers";
divi.setAttribute("type","button")
divi.innerText="/";
divi.setAttribute("onclick","divis()");

var seven=document.createElement("button");
seven.className="numbers";
seven.setAttribute("type","button")
seven.innerText="7";
seven.setAttribute("onclick","sevens()");

var eight=document.createElement("button");
eight.className="numbers";
eight.setAttribute("type","button")
eight.innerText="8";
eight.setAttribute("onclick","eights()");

var nine=document.createElement("button");
nine.className="numbers";
nine.setAttribute("type","button")
nine.innerText="9";
nine.setAttribute("onclick","nines()");

var multi=document.createElement("button");
multi.className="numbers";
multi.setAttribute("type","button")
multi.innerText="x";
multi.setAttribute("onclick","multis()");

var four=document.createElement("button");
four.className="numbers";
four.setAttribute("type","button")
four.innerText="4";
four.setAttribute("onclick","fours()");

var five=document.createElement("button");
five.className="numbers";
five.setAttribute("type","button")
five.innerText="5";
five.setAttribute("onclick","fives()");

var six=document.createElement("button");
six.className="numbers";
six.setAttribute("type","button")
six.innerText="6";
six.setAttribute("onclick","sixs()");

var sub=document.createElement("button");
sub.className="numbers";
sub.setAttribute("type","button")
sub.innerText="-";
sub.setAttribute("onclick","subs()");


var one=document.createElement("button");
one.className="numbers";
one.setAttribute("type","button")
one.innerText="1";
one.setAttribute("onclick","ones()");

var two=document.createElement("button");
two.className="numbers";
two.setAttribute("type","button")
two.innerText="2";
two.setAttribute("onclick","twos()");

var three=document.createElement("button");
three.className="numbers";
three.setAttribute("type","button")
three.innerText="3";
three.setAttribute("onclick","threes()");

var sum=document.createElement("button");
sum.className="numbers";
sum.setAttribute("type","button")
sum.innerText="+";
sum.setAttribute("onclick","sums()");

var zero=document.createElement("button");
zero.className="numbers";
zero.setAttribute("type","button")
zero.innerText="0";
zero.setAttribute("onclick","zeros()");

var dot=document.createElement("button");
dot.className="numbers";
dot.setAttribute("type","button")
dot.innerText=".";
dot.setAttribute("onclick","dots()");

var del=document.createElement("button");
del.className="numbers";
del.setAttribute("type","button")
del.innerText="DEL";
del.setAttribute("onclick","dels()");

var eql=document.createElement("button");
eql.className="numbers";
eql.setAttribute("type","button")
eql.innerText="=";
eql.setAttribute("onclick","eqls()");

numbers.append(clear,front,perc,divi,seven,eight,nine,multi,four,five,six,sub,one,two,three,sum,zero,dot,del,eql);
calculator.append(numbers);


function display() {
    if(screen.value!=parseInt(screen.value)||screen.value!=parseFloat(screen.value)){
    screen.value="DONTuseKEYBOARD/useBUTTONS";
    }
}

     function clears(){
        screen.value="";
     }

     function fronts(){
        screen.value="-"+""+screen.value;
    
     }

     function percs(){
        screen.value=screen.value+""+perc.innerText;
     }

     function divis(){
        screen.value=screen.value+""+divi.innerText;
     }


    function sevens(){
        screen.value=screen.value+""+seven.innerText;
     }

     function eights(){
        screen.value=screen.value+""+eight.innerText;
     }
     function nines(){
        screen.value=screen.value+""+nine.innerText;
     }

     function multis(){
        screen.value=screen.value+""+ "*";
     }

     function fours(){
        screen.value=screen.value+""+four.innerText;
     }

     function fives(){
        screen.value=screen.value+""+five.innerText;
     }

     function sixs(){
        screen.value=screen.value+""+six.innerText;
     }
     function subs(){
        screen.value=screen.value+""+sub.innerText;
     }

    function ones(){
    screen.value=screen.value+""+one.innerText;
     }

     function twos(){
        screen.value=screen.value+""+two.innerText;
     }  
     function threes(){
        screen.value=screen.value+""+three.innerText;
     }

     function sums(){
        screen.value=screen.value+""+sum.innerText;
     }
     function zeros(){
        screen.value=screen.value+""+zero.innerText;
     }
     function dots(){
        screen.value=screen.value+""+dot.innerText;
     }
     function dels(){
        console.log("deleting...");
   let arr=screen.value.split("");
   arr.pop();
   screen.value=arr.join("");
     }
     function eqls(){
        screen.value=eval(screen.value);
     }





