// getting the value from history
function getHistory(){
    return document.getElementById("history-value"). innerText;
}

// printing the value from history
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

// getting the output value
function getoutput(){
    return document.getElementById("output-value").innerText;
}

//printing the input value
function Printoutput(num){
    //if the num is empty the it will print empty value
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    // but in else it will print the output value 
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    if(num=="-"){ 
        return "";
    }
    // it will convert the number into comma seperated value
    var n = Number(num);
    var value=n.toLocaleString("en");
    return value;
}


function reverseNumberFormat(num){
    // it will remove the comma's from the number
    return Number(num.replace(/,/g,''));
}
//alert(reverseNumberFormat(getoutput()));

var operator = document.getElementsByClassName("operator");

for(var i=0; i<operator.length; i++){
    //accesing the operator one by one using for loop
    // adding the event which will listen when the button is clicked
    operator[i].addEventListener('click',function(){
        //if the clear btn is clicked then it will clear the value of the both output and history value 
        if(this.id =="clear"){
            printHistory("");
            Printoutput("");
        }
        //if the backspace btn id clicked then it will clear the value of the output one by one
        else if(this.id =="backspace"){
            var output = reverseNumberFormat(getoutput()).toString(); // it will converted into string and remove comma from numbers
            if(output){
                output = output.substr(0,output.length-1); // substr(sub string function) remove the number from the end
                Printoutput(output);
            }
        }

        else{
            var output=getoutput(); // it get the output value 
            var history = getHistory(); // it get the history value
            if(output ==""&&history!=""){ // if output is empty and history is not empty 
                if(isNaN(history[history.length-1])){ // checking the last number is oprator or not
                    history = history.substr(0,history.length-1); // removing the last character from history
                }
            }

            if(output!="" || history!=""){
                // conditional statement: condition ? true:false
                output= output==""? output:reverseNumberFormat(output);  /*if the value of the output is empty and history is not empty 
                                                                            then output take the empty value else it will print the output value*/ 
                history = history + output;  // adding output value to history value
                if(this.id == "="){
                    var result = eval(history);
                    Printoutput(result); //result will be printed 
                    printHistory("");    //history value will be empty
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

for(var i=0; i<numbers.length; i++){ //accessing the number one by one using for loop
    numbers[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getoutput());
        if (output!=NaN){         //if output is a number then it will concatenate the number 
            output=output+this.id;
            Printoutput(output);  //printing the output value
        }

    });
}