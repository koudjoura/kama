let let1 = document.getElementById("image1");
let let2 = document.getElementById("image2");
let let3 = document.getElementById("image3");
let let4 = document.getElementById("image4");
let let5 = document.getElementById("image5");

let body = document.querySelector("body");
  
 let containerdrapeau = document.createElement("div");
 let img = document.createElement("img");
 let1.addEventListener("click",()=>{
    img.src ="https://th.bing.com/th/id/OIP.Rw1pirbAlm8DGZUAjGNbxgHaEo?pid=ImgDet&rs=1";
    containerdrapeau.classList.add("div");
    containerdrapeau.appendChild(img);
 });
  
 let2.addEventListener("click",()=>{
    img.src = "https://th.bing.com/th/id/R.0058acd7393ecdfee003294c6acefafb?rik=YUVQ7NhXloIVSA&pid=ImgRaw&r=0";
    containerdrapeau.classList.add("div");
    containerdrapeau.appendChild(img);
 });
  
 let3.addEventListener("click",()=>{
    img.src = "https://th.bing.com/th/id/R.752cd9d70fb0604a1da3d6a9a1c784ef?rik=NvtgyxVueTnXDw&pid=ImgRaw&r=0";
    containerdrapeau.classList.add("div");
    containerdrapeau.appendChild(img);
 });
 let4.addEventListener("click",()=>{
    img.src = "https://www.flagsonline.fr/uploads/2016-6-6/1200-0/algeria.jpg";
    containerdrapeau.classList.add("div");
    containerdrapeau.appendChild(img);
 });
 let5.addEventListener("click",()=>{
    img.src ="https://th.bing.com/th/id/R.880dd76532da46273dd75387ac3bc650?rik=Ed9kY2bXAuo8pQ&riu=http%3a%2f%2fidata.over-blog.com%2f1%2f44%2f13%2f03%2fmakaila%2fmak4%2fdrapeau-tchad.png&ehk=ZgU1zTZR1Dw2djnvSuNdcqbttDzXSX7DJSrli0p1KAM%3d&risl=&pid=ImgRaw&r=0";
    containerdrapeau.classList.add("div");

    containerdrapeau.appendChild(img);
 });
 body.appendChild(containerdrapeau);