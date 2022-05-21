function math_operation(clicked_id){
    let x = clicked_id;
    let nr1 = parseFloat(document.getElementById("nr1").innerHTML);
    let nr2 = parseFloat(document.getElementById("nr2").innerHTML);
    let result;  
    switch(x) {
        case "coma":        
            document.getElementById("comaa").innerHTML = "coma";
            break;
        case "add":
            document.getElementById("operation").innerHTML = "add";
            document.getElementById("main_calc").innerHTML = "+";
            break;
        case "sub":
            document.getElementById("operation").innerHTML = "sub";
            document.getElementById("main_calc").innerHTML = "-";
            break;
        case "mult":
            document.getElementById("operation").innerHTML = "mult";
            document.getElementById("main_calc").innerHTML = "*";
            break;
        case "div":
            document.getElementById("operation").innerHTML = "div";
            document.getElementById("main_calc").innerHTML = "/";
            break;
        case "reset":
            document.getElementById("main_calc").innerHTML = 0;
            document.getElementById("equal").innerHTML = "";
            document.getElementById("nr1").innerHTML = "";
            document.getElementById("nr2").innerHTML = "0";
            document.getElementById("operation").innerHTML = "";
            document.getElementById("comaa").innerHTML = "";
            break;
        case "is":
            document.getElementById("equal").innerHTML = "true";
            let operation = document.getElementById("operation").innerHTML;
            switch(operation){
                case "add":
                    result = nr1 + nr2;
                    document.getElementById("main_calc").innerHTML = result;
                    break;
                case "sub":
                    result = nr1 - nr2;
                    document.getElementById("main_calc").innerHTML = result;
                    break;
                case "mult":
                    result = nr1 * nr2;
                    document.getElementById("main_calc").innerHTML = result;
                    break;
                case "div":
                    if(nr2 == 0){
                        document.getElementById("main_calc").innerHTML = "Don't divide by zero!";
                    }else{
                    result = nr1 / nr2;
                    document.getElementById("main_calc").innerHTML = result;
                    }
                    break;
                }        
                document.getElementById("nr1").innerHTML = result;
              
                
            }}

// add digits function
function add_digit(clicked_id){
   let coma = document.getElementById("comaa").innerHTML;
   let x = document.getElementById("main_calc").innerHTML;
   //check operation status
   let operation = document.getElementById("operation").innerHTML;
   //if main calc = 0 return empty string
    if(x == 0 || x == "+" || x == "-" || x == "*" || x == "/") {
        x = "";
    }
    let y = clicked_id;
        if(x.includes(".") == true){
            document.getElementById("comaa").innerHTML = ""; 
        }else{
        switch(coma){
        case "coma":
        x += ".";
        document.getElementById("main_calc").innerHTML = x + ",";
        document.getElementById("comaa").innerHTML = "";
        break;
        }
    }
    let number = x + y;
    let nr1 = document.getElementById("nr1").innerHTML;
        if(operation == ""){
            document.getElementById("nr1").innerHTML = number;
        }else{
            document.getElementById("nr2").innerHTML = number;
        }   
        document.getElementById("main_calc").innerHTML = number;
}

// tomorrow add function with will be check of value 1 passed.