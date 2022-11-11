const previousOperationText = document.querySelector("#previous-operation") ;
const currentOperationText = document.querySelector("#current-operation") ;
const buttons = document.querySelectorAll("#buttons-container button") ; 

class Calculator {
    constructor(previousOperationText,currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // add digit to calculator screen
    addDigit(digit) {
        console.log (digit);
        // check if number already has a dot 
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        }
        
  this.currentOperation = digit;
  this.updateScreen();
  
    }

// process all calculator operations
ProcessOperation(operation){
    //check if current is empty
    if (this.currentOperationText.innerText === "" && operation !== "c") {
        //change operation
        if (this.previousOperationText.innerText !== "") {
            this.changeoperation(operation);

        }
        return;
    }
    //get current and previous value
    let operationvalue;
    let previous = +this.previousOperationText.innerText.split(" ")[0];
    let  current = +this.currentOperationText.innerText;

        switch (operation) {
                
            case"+":
            operationvalue = previous + current;
            this.updateScreen (operationvalue,operation,current,previous);
            break;

            case"-":
            operationvalue = previous - current;
            this.updateScreen (operationvalue,operation,current,previous);
            break;

            case"/":
            operationvalue = previous / current;
            this.updateScreen (operationvalue,operation,current,previous);
            break;

            case"*":
            operationvalue = previous * current;
            this.updateScreen (operationvalue,operation,current,previous);
            break;

            case",":
            operationvalue = previous , current;
            this.updateScreen (operationvalue,operation,current,previous);
            break;

            case"DEL":
            this.processDelOperator();
            break;

            case"CE":
            this.processclearCurrentOperator();
            break;

            case"C":
            this.processclearoperator();
            break;

            case"=":
            this.processEqualOperator();
            break;
            default:
                return;
}
}


// charge values of the calculator screnn
updateScreen(
    operationvalue = null,
    operation = null,
    current = null,
    previous = null,
    ) {

     if(operationvalue === null) {
        //append number to current value
        this.currentOperationText.innerText += this.currentOperation;
     }else {
        // check if values is zero if it is just add current value
        if(previous === 0) {
            operationvalue = current;
        }
        //add current value to previous
        this.previousOperationText.innerText = '${operationvalue} ${operation}';
        this.currentOperationText.innerText = "";

     }
     }
     // change math operation
     changeoperation(operation) {
        const mathoperations = ["*", "/", "+", "-"];

        if (!mathoperations.includes(operation)) {
            return;
        }
        
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice (0, -1) + operation;
     }
     //delete the last digit 
 processDelOperator() {
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);

 }
 //clear current operation
 processclearCurrentOperation(){
this.currentOperationText.innerText= "";
 }
 // clear all  operations
 processclearoperation() {
 this.currentOperationText.innerText ="";
 this.previousOperationText.innerText = "";
 }
 // process an operation
 processEqualOperator() {
    let operation = previousOperationText.innerText.split(" ")[1];
    this.ProcessOperation (operation);
 }
}

const calc = new Calculator(previousOperationText,currentOperationText);


buttons.forEach( (btn) =>{btn.addEventListener("click",(e) => {const value = e.target.innerText; 

if (+value >= 0 || value === ".") {
    console.log(value);
    calc.addDigit(value);
} else {
    calc.processOperation (value);

}
});
});


