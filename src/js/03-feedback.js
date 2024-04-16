import throttle from 'lodash.throttle';
// const selectImage = document.querySelector('#selectImage');
const inputFile = document.querySelector('#avatar');
const imgArea = document.querySelector('.img-area');

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
            // console.log("formdata", formData[this.name] = this.value);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        // console.log("Localstorage", this.name, ":", formData[this.name] = this.value);
        // console.log("formData", formData);
        return
    }
    else if (this.type === 'checkbox') {
        formData[this.name] = this.checked;
        // console.log("formData", formData);
        formData.password = "";
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        // console.log("check", formData[this.name]);
        // console.log("formData", formData);
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
    else if (this.type === 'file') {
        const imageFile = this.files[0];
        console.log("imageFile", imageFile);

        const reader = new FileReader();
        reader.onload = ()=> {
            const allImg = imgArea.querySelectorAll('img');
            allImg.forEach(item => item.remove());

            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            // console.log(img.src)
            imgArea.appendChild(img);
            imgArea.dataset.img = imageFile.name;
        }
             const upimage = reader.readAsDataURL(imageFile);
        console.log("formData", upimage);

        formData[this.name].files = imageFile;
        formData.password = "";
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        formData.password = CurrentPassword;
        console.log("formData", formData);

        return;
    }


    return;
}

function attachEvents() {
           if (LOCALSTORAGE_KEY) {
        CloneformData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            for (let key in CloneformData) {
                formData[key] = CloneformData[key];
               }
            //    console.log("formData", formData)
           }
  for (let i = 0; i < formFields.length; i++) {
      formFields[i].addEventListener('change', throttle(changeHandler, 500))
    }
    // console.log(formData);
}

function checkStorage() {
    const formFieldsSaved = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log("formFieldsSaved", formFieldsSaved);
    if (!formFieldsSaved) {
        EmptyObjectCreate();
    }
    else {
        for (let i in formFieldsSaved) {
            formDataMassive.push(formFieldsSaved[i]);
        }
        // console.log("formDataMassive", formDataMassive);
        for (let i = 0; i < formFields.length; ++i) {
            if (formFields[i].type !== 'submit' && formFields[i].type !== 'button') {
                if (formFields[i].type === 'checkbox') {
                    formFields[i].checked = formDataMassive[i];
                    //  console.log("formDataMassive", formDataMassive[i]);
                    // console.log("checkbox", formFields[i].checked = formDataMassive[i]);
                    // console.log("checkbox", formFields[i].name);
                }
                else if (formFields[i].type === 'file') {
                    // console.log("filelocalstorage", formDataMassive[i]);
                    //  console.log("filelocalstorage", formFields[i]);
                    formFields[i].file = formDataMassive[i];
                    // console.log("filefrom localstorage", formFields[i].file = formDataMassive[i]);
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
    // console.log("formData.check", formData.check)
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


// selectImage.addEventListener('click', function () {
//       console.log('Button clicked!');
//     inputFile.click();
// })
