class Validator {
    constructor() {
        this.validations = [

        ]
    }
    validate(form) {
        let inputs = form.getElementByTagName("input");

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input){

        });

      }



}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validatior = new Validator();

submit.addEventListener("click", function(e) {
    e.preventDefault();
    validator.validate(form);
});