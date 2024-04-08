import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const formFields = form.elements;
const submitButton = form.querySelector('[type="submit"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let CurrentPassword;
let formData = {};
const formDataMassive = [];

submitButton.addEventListener('click', clearStorage);
function EmptyObjectCreate() {
        for (let i = 0; i < formFields.length; ++i) {
             if (formFields[i].type !== 'submit' ) {
                    formData[form.elements[i].name] = "";
                    }}
    }
function clearStorage() {
    if (formData.check) {
        form.reset();
        console.log("formData is submited to backend", formData);
        formData = null;
        formData = {};
        formDataMassive.lenght = 0;
        localStorage.removeItem(LOCALSTORAGE_KEY);
checkStorage();
    }
    else {
       alert("Please accept subscribe")
    }}
function changeHandler() {
    if (LOCALSTORAGE_KEY) {
              CloneformData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            for (let key in CloneformData) {
            formData[key] = CloneformData[key];
        }
    } 
    if (this.type !== 'checkbox' && this.type !== 'password') {
        formData[this.name] = this.value;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        console.log("Localstorage", this.name, ":", formData[this.name] = this.value);
        console.log("formData", formData);
        return
    }
    else if (this.type === 'checkbox') {
        formData[this.name] = this.checked;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        console.log("check", formData[this.name]);
        console.log("formData", formData);
        return
    }
    else if (this.type === 'password') {
        formData[this.name] = "";
         localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData[this.name] = this.value;
        CurrentPassword = this.value;
        // formData[this.name] = "sdds";
       
        console.log("CurrentPassword", CurrentPassword);
        console.log("formData", formData);
        return
    }
    return;

}
function attachEvents() {
  for (let i = 0; i < formFields.length; i++) {
  formFields[i].addEventListener('change', throttle(changeHandler, 500))
    }
}

function checkStorage() {
    const formFieldsSaved = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (!formFieldsSaved) {
        EmptyObjectCreate();
    }
    else {
        for (let i in formFieldsSaved) {
            formDataMassive.push(formFieldsSaved[i]);
            console.log( formDataMassive)
       } for (let i = 0; i < formFields.length; ++i) {
    if (formFields[i].type !== 'submit') 
                formFields[i].value = formDataMassive[i];
                console.log( formFields)
        }
} attachEvents();
    }
   
checkStorage();
