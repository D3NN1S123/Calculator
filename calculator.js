var number1 = "";
var number2 = "";
var outputString = "";
var myString = "";
var operation = "";
var answer = 0;


function clearScreen(){   
    number1 = "";
    number2 = "";
    document.getElementById('output').innerHTML = "0";
    document.getElementById('output2').innerHTML = "";
    myString="";
    operation="";
    answer = 0;
}

//check if rightmost character on the screen is an operation, if not
function number(number){
    if(operation===""){
        if(number1.length<8){
            if(document.getElementById('output').innerHTML==="0"){
                document.getElementById('output').innerHTML = "";
                number1 += ""+ number;
                myString+=number;
                document.getElementById('output').innerHTML += number;
            }
            else{
                number1 += ""+ number;
                myString+=number;
                document.getElementById('output').innerHTML += number;
            }
            
        }
        
    }
    else{

        if(number2.length<8){
            myString+=number;
            document.getElementById('output').innerHTML = "";
            document.getElementById('output2').innerHTML += number;
            number2+= ""+number;
        }
       
    }
}

function mult(){

if(myString.charAt(myString.length-1)==="*" || myString.charAt(myString.length-1)==="/"||myString.charAt(myString.length-1)==="+"||myString.charAt(myString.length-1)==="-"){
    operation="mult";
    myString.charAt(myString.length-1) = "*";
}
else{
    if(number2===""){
        operation = "mult";
        myString += "*";
    }
    else{
        equals();
        operation = "mult";
        myString += "*";
        number1 = ""+answer;
        number2 = "";
        myString=""+number1;
    }
}
    
    
}

function addi(){
    if(myString.charAt(myString.length-1)==="*" || myString.charAt(myString.length-1)==="/"||myString.charAt(myString.length-1)==="+"||myString.charAt(myString.length-1)==="-"){
        operation="add";
        myString.charAt(myString.length-1) = "+";
    }
    else{
        if(number2===""){
            operation = "add";
            myString += "+";
        }
        else{
            equals();
            operation = "add";
            myString += "+";
            number1 = ""+answer;
            number2 = "";
            myString=""+number1;
        }
    }   
    
}

function div(){
    if(myString.charAt(myString.length-1)==="*" || myString.charAt(myString.length-1)==="/"||myString.charAt(myString.length-1)==="+"||myString.charAt(myString.length-1)==="-"){
        operation="div";
        myString.charAt(myString.length-1) = "/";
    }
    else{
        if(number2===""){
            operation = "div";
            myString += "/";
        }
        else{
            equals();
            operation = "div";
            myString += "/";
            number1 = ""+answer;
            number2 = "";
            myString=""+number1;
        }
    }
    
    
}

function subt(){
    if(myString.charAt(myString.length-1)==="*" || myString.charAt(myString.length-1)==="/"||myString.charAt(myString.length-1)==="+"||myString.charAt(myString.length-1)==="-"){
        operation="sub";
        myString.charAt(myString.length-1) = "-";
    }
    else{
        if(number2===""){
            operation = "sub";
            myString += "-";
        }
        else{
            equals();
            operation = "sub";
            myString += "-";
            number1 = ""+answer;
            number2 = "";
            myString=""+number1;
        }
    }
    
}

function equals(){
    document.getElementById('output2').innerHTML = "";
    

    if(operation === "mult"){
        answer = (number1*number2);
        
        if((answer+"").length>8){
            if(answer>99999999){
                document.getElementById('output').innerHTML = answer.toExponential(2);
            }
            else{
                document.getElementById('output').innerHTML = answer.toFixed(2);
            }
        }
        else{
            document.getElementById('output').innerHTML = answer;
        }
         
    }
    else if(operation==="div"){
        answer = (number1/number2);

        if((answer+"").length>8){
            if(answer>99999999){
                document.getElementById('output').innerHTML = answer.toExponential(2);
            }
            else{
                document.getElementById('output').innerHTML = answer.toFixed(2);
            }
        }
        else{
            document.getElementById('output').innerHTML = answer;
        }
        
    }
    else if(operation==="add"){
        answer = parseFloat(parseFloat(number1)+parseFloat(number2));
        if((answer+"").length>8){
            if(answer>99999999){
                document.getElementById('output').innerHTML = answer.toExponential(2);
            }
            else{
                document.getElementById('output').innerHTML = answer.toFixed(2);
            }
        }
        else{
            document.getElementById('output').innerHTML = answer;
        }
        
    }
    else{
        answer = (number1-number2);
           
        if((answer+"").length>8){
            if(answer>99999999){
                document.getElementById('output').innerHTML = answer.toExponential(2);
            }
            else{
                document.getElementById('output').innerHTML = answer.toFixed(2);
            }
        }
        else{
            document.getElementById('output').innerHTML = answer;
        }
    }

    number1 = ""+answer;
    number2 = "";
    myString=""+number1;
}

function dott(){

    if(operation===""){
        if(myString.charAt(myString.length-1)!=="."){
            myString+=".";
            number1+=".";
            document.getElementById('output').innerHTML += ".";
        }   
    }
    else{
        if(myString.charAt(myString.length-1)!=="."){
            myString+=".";
            number2+=".";
            document.getElementById('output2').innerHTML += ".";
        } 
    }
}

function neg(){

    if(operation===""){
        if(number1>0){
            number1 = "-"+number1;
            var temp = ""+document.getElementById('output').innerHTML;
            if(temp.charAt(0)!=="-"){
                document.getElementById('output').innerHTML = "-"+document.getElementById('output').innerHTML;
            }
            
        }
        else{
            number1 = number1.substring(1, number1.length);
            
            document.getElementById('output').innerHTML = number1;
            
        }
    }
    else{
        if(number2>0){
            number2 = "-"+number2;
            var temp = ""+document.getElementById('output2').innerHTML;
            if(temp.charAt(0)!=="-"){
                document.getElementById('output2').innerHTML = "-"+document.getElementById('output2').innerHTML;
            }
            
        }
        else{
            number2 = number2.substring(1, number2.length);
            var temp = ""+document.getElementById('output2').innerHTML;
            if(temp.charAt(0)==="-"){
                document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML.charAt(0)="";
            }
        }
    }
}

function perc(){

    if(operation===""){
        number1 = number1/100.0;
        document.getElementById('output').innerHTML = document.getElementById('output').innerHTML/100.0;
    }
    else{
        number2 = number2/100.0;
        document.getElementById('output2').innerHTML = document.getElementById('output2').innerHTML/100.0;
    }

}

