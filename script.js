class Calculator {
    constructor(){
        //TODO: Aqui é a propriedade que recebe os valores digitados pelo usuario
        this.displayValue = "";
    }

    //TODO: Este método adiciona valores à propriedade display value
    //TODO: e, em seguida, chama o método updateDisplay para atualizar o visor (input)
    appendToDisplay(value) {
        this.displayValue += value;
        this.updateDisplay();
    }
    //TODO: Este método atualiza o visor (input) com os valores 
    // TODO: Com os valores que o usuário digitou
    updateDisplay() {
        document.getElementById("displayContent").value = this.displayValue
    }
    //TODO: Este método limpa os valores do displayValue (input) e
    //TODO: chama o método updateDisplay para atualizar o visor (input)
    clearDisplay() {
        this.displayValue = "";
        this.updateDisplay();
    }
    //TODO:
    calculate() {
        try {
            const result = eval(this.displayValue);
            this.displayValue = result
            this.updateDisplay();
        } catch (error) {
            this.displayValue = "Error";
            this.updateDisplay();
        }
    }
}

// Instanciando o objeto
const calc = new Calculator()