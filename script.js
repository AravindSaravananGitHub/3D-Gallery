
//console.log("Hello I'm Working");

const img_container=document.querySelector(".image-container");
const btn_prev=document.querySelector("#btn-prev");
const btn_next=document.querySelector("#btn-next");
let x=0;
let timer;
btn_next.addEventListener("click",()=>{
    x+=45;
    clearTimeout(timer);
    ubdateGallery();
});
btn_prev.addEventListener("click",()=>{
    x-=45;
    clearTimeout(timer);
    ubdateGallery();;
});

 function ubdateGallery(){
    img_container.style.transform=`perspective(1000px) rotateY(${x}deg)`;
    timer=setTimeout(()=>{
        x+=45;
        ubdateGallery();
    },3000);
 }
 ubdateGallery();