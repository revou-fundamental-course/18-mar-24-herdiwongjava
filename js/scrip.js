function submitForm(){
let form = document.forms['contact-form'];
let nama = form['nama'].value;
let email = form['email'].value;
let slct = form['slct'].value;

if(nama == '') alert ('nama masih kosong');
if(email == '') alert ('email belum diisi');
if(slct == '') alert ('data belum lengkap');
}
document.getElementById('send-button').addEventListener('click',() => submitForm())


let indexSlide=0;
function automaticSlide(n){
    setTimeout(automaticSlide,2000);
    let listImage=document.getElementsByClassName('banner-img');
    for(n=0; n<listImage.length;n++){
        listImage[n].style.display="none";
    }
    indexSlide++;
    if(indexSlide > listImage.length){
        indexSlide = 1;
    }
    listImage[indexSlide -1].style.display="block";
}
automaticSlide();