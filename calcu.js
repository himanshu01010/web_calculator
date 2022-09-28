function getHistory(){
    return document.getElementById("history-value"). innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
//printHistory("9*9+8");

function getoutput(){
    return document.getElementById("output-value").innerText;
}

function Printoutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value=n.toLocaleString("en");
    return value;
}
//Printoutput("798798798");

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
//alert(reverseNumberFormat(getoutput()));

var operator = document.getElementsByClassName("operator");

for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id =="clear"){
            printHistory("");
            Printoutput("");
        }

        else if(this.id =="backspace"){
            var output = reverseNumberFormat(getoutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                Printoutput(output);
            }
        }

        else{
            var output=getoutput();
            var history = getHistory();
            if(output ==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }

            if(output!="" || history!=""){
                output= output==""? output:reverseNumberFormat(output);
                history = history + output;
                if(this.id == "="){
                    var result = eval(history);
                    Printoutput(result);
                    printHistory("");
                }

                else{
                    history = history+this.id;
                    printHistory(history);
                    Printoutput("");
                }
            }

        }
    });
}

var numbers = document.getElementsByClassName("number");

for(var i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getoutput());
        if (output!=NaN){
            output=output+this.id;
            Printoutput(output);
        }

    });
}