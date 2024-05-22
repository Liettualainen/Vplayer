const LOCALSTORAGE_KEY = 'formimg';
const form = document.querySelector(".form-add");
const mainIMG = document.getElementById('selected');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let img = this.elements['img-add'];
  if (img.files[0]) {
    let fr = new FileReader();
    fr.readAsDataURL(img.files[0]);
    fr.onload = function (e) {
    localStorage.setItem(LOCALSTORAGE_KEY, mainIMG.src = e.target.result);
  }
  }  
}
        let Simage = localStorage.getItem(LOCALSTORAGE_KEY);
if (Simage) {
    mainIMG.src= Simage; 
    mainIMG.setAttribute('height', '1000');
    mainIMG.setAttribute('width', 'auto');
  }



   // document.body.insertBefore(Imgheader, imgForm)

   // let Imgheader = document.createElement('img');
    // Imgheader.src = Simage; 

    // console.log("img:", fr);
  // localStorage.setItem(LOCALSTORAGE_KEY, fr);



    //  form.reset();
   // console.log("Simage:", Simage);

  // let Simage = localStorage.getItem(LOCALSTORAGE_KEY, fr.result);
  // console.log("newimage", Simage)



  // let Imgheader = document.createElement('img');
  // Imgheader.src = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
  // Imgheader.height='10px';
  // Imgheader.width='10px';
  // document.getElementById('img-add').appendChild(Imgheader);





// let onFormSubmit = function () {
    //   e.preventDefault();

    //  console.log(formFields);

//   let fr = new FileReader();
//   fr.onload = function(e) {
//     document.getElementById('selected').src = e.target.result;
//   }
//     let imglocalsotrage = fr.readAsDataURL(img.files[0]);
//     console.log(imglocalsotrage);
//         localStorage.setItem(LOCALSTORAGE_KEY, imglocalsotrage)
  
// };

// function createStorage() {

//       let img = this.elements['img-add'];

//   let fr = new FileReader();
//   fr.onload = function(e) {
//     document.getElementById('selected').src = e.target.result;
//   }
//     let imglocalsotrage = fr.readAsDataURL(img.files[0]);
//     console.log(imglocalsotrage);
//     console.log("sdfsdfsf")
// }

// createStorage();

// localStorage.setItem(LOCALSTORAGE_KEY, onFormSubmit)
// form.submit(onFormSubmit)