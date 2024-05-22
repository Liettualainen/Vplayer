import throttle from 'lodash.throttle';
const img = document.createElement('img');
const imgArea = document.querySelector('.img-area');
const imgAreaOld = imgArea.innerHTML
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
    if (this.type !== 'checkbox' && this.type !== 'password' && this.type !== 'file') {
        formData[this.name] = this.value;
        formData.password = "";
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        return
    }
    else if (this.type === 'checkbox') {
        formData[this.name] = this.checked;
        formData.password = "";
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        return
    }
    else if (this.type === 'password') {
        formData[this.name] = "";
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData[this.name] = this.value;
        CurrentPassword = this.value;
        console.log("CurrentPassword:", CurrentPassword);
        return
    }
    else if (this.type === 'file') {
        const imageFile = this.files[0];
        const fr = new FileReader();
        fr.readAsDataURL(imageFile);
        fr.onload = () => {
            const allImg = imgArea.querySelectorAll('img');
            allImg.forEach(item => item.remove());
            allImg.src = fr.result
            formData[this.name] = allImg.src;
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
            const imgLoaded = fr.result;
                 if (imgLoaded) {
                        imgArea.innerHTML = "";
            }   
              img.src = imgLoaded;
            imgArea.appendChild(img);    
            imgArea.dataset.img = imageFile.name;
        }
        formData.password = "";
        return;
    }
    return;
}

function attachEvents() {
           if (LOCALSTORAGE_KEY) {
       let CloneformData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            for (let key in CloneformData) {
                formData[key] = CloneformData[key];
               }
           }
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
        }

        for (let i = 0; i < formFields.length; ++i) {
            if (formFields[i].type !== 'submit' && formFields[i].type !== 'button') {
                if (formFields[i].type === 'checkbox') {
                    formFields[i].checked = formDataMassive[i];

                }
                else if (formFields[i].type === 'file') {
                    if (formDataMassive[i]) {
                        formFields[i].src = formDataMassive[i];
                        img.src = formFields[i].src;
                        imgArea.innerHTML = "";
                        imgArea.appendChild(img);
                    imgArea.dataset.img = formFields[i].name;
                    }
                }
                else {
                    formFields[i].value = formDataMassive[i];
                }
            }
        }
    }
        attachEvents();
    }
function clearStorage() {

    if (formData.check) {
        img.remove();
        imgArea.innerHTML = imgAreaOld;
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


