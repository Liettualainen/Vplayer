import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const formFields = form.elements;
const submitButton = form.querySelector('[type="submit"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};
const formDataMassive = [];

submitButton.addEventListener('click', clearStorage);

function changeHandler() {
    if (LOCALSTORAGE_KEY) {
        CloneformData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            for (let key in CloneformData) {
            formData[key] = CloneformData[key];
        }
        // console.log("formData Localsotorage", formData);
    } 
    formData[this.name] = this.value;
    // console.log("Form data element",this.name,":", formData[this.name] = this.value);
    // console.log("formData", formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
function attachEvents() {
  for (let i = 0; i < formFields.length; i++) {
  formFields[i].addEventListener('change', throttle(changeHandler, 500))
    }
}



function checkStorage() {
    const formFieldsSaved = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (!formFieldsSaved) {
         for (let i = 0; i < formFields.length; ++i) {
             if (formFields[i].type !== 'submit') {
                    formData[form.elements[i].name] = "";
                    // console.log("form element name:", formData);
                    }}
    }
    else {
        for (let i in formFieldsSaved) {
        formDataMassive.push(formFieldsSaved[i]);
          }
         for (let i = 0; i < formFields.length; ++i) {
            if (formFields[i].type !== 'submit') {
                formFields[i].value = formDataMassive[i];
            //   console.log(formFields[i].value);
          }  
       }
    }
   attachEvents();
}

    
function clearStorage(evt) {
   formData = null;
    formData = {};
    formDataMassive.lenght = 0;
      form.reset();
    evt.preventDefault();
    console.log("formData is submited to backend", localStorage.getItem(LOCALSTORAGE_KEY));
     localStorage.removeItem(LOCALSTORAGE_KEY);
    // console.log(formData);

    checkStorage();
}
    
    checkStorage();



    // localStorage.getItem(formFields[i].name) ?
    //                formFields[i].value = localStorage.getItem(formFields[i].name) :
    //     (        formFields[i].value = "" )