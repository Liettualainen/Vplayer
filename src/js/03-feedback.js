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

function changeHandler() {
    // if (LOCALSTORAGE_KEY) {
    //     CloneformData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    //         for (let key in CloneformData) {
    //             formData[key] = CloneformData[key];
    //     }
    // }
    
    if (this.type !== 'checkbox' && this.type !== 'password') {
        formData[this.name] = this.value;
         formData.password = "";
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        console.log("Localstorage", this.name, ":", formData[this.name] = this.value);
        console.log("formData", formData);
        return
    }
    else if (this.type === 'checkbox') {
        formData[this.name] = this.checked;
        console.log("formData", formData);
        formData.password = "";
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
        console.log("CurrentPassword", CurrentPassword);
        console.log("formData", formData);
        return
    }
    return;

}
function attachEvents() {
           if (LOCALSTORAGE_KEY) {
        CloneformData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            for (let key in CloneformData) {
                formData[key] = CloneformData[key];
        } }
  for (let i = 0; i < formFields.length; i++) {
      formFields[i].addEventListener('change', throttle(changeHandler, 500))
   
    }  console.log(formData);
}

function checkStorage() {
    const formFieldsSaved = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log("formFieldsSaved", formFieldsSaved);
    if (!formFieldsSaved) {
        EmptyObjectCreate();
    }
    else {
        for (let i in formFieldsSaved) {
            formDataMassive.push(formFieldsSaved[i]);
        } console.log("formDataMassive", formDataMassive);
        
        for (let i = 0; i < formFields.length; ++i) {
            if (formFields[i].type !== 'submit' && formFields[i].type !== 'button') {
                
                if (formFields[i].type === 'checkbox') {
                    formFields[i].checked = formDataMassive[i];
                     console.log("formDataMassive", formDataMassive[i]);
                    console.log("checkbox", formFields[i].checked = formDataMassive[i]);
                    console.log("checkbox", formFields[i].name);
                }
                else {
                    formFields[i].value = formDataMassive[i];
                    // console.log(formFields[i].name, formFields[i].value = formDataMassive[i]);
                }
      
            }
        }
    }
        attachEvents();
    }
function clearStorage() {
    console.log("formData.check", formData.check)
    if (formData.check) {
        form.reset();
        console.log("formData is submited to backend:", formData);
        formData = null;
        formData = {};
        formDataMassive.lenght = 0;
        localStorage.removeItem(LOCALSTORAGE_KEY);
checkStorage();
    }
    else {
       alert("Please accept subscribe")
    }}   
checkStorage();
