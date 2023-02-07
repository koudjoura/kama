let firstname = document.getElementById("firstname");
let name =document.getElementById("name");
let date = document.getElementById("date");
let  birthsday = document.getElementById("birthsday");
let woman = document.getElementById("woman");
let body = document.querySelector("body");
let statut = document.getElementById("statut");
 let man = document.getElementById("homme");
let reponse = false;
man.addEventListener("click",()=>{
    return reponse = true;
});
document.getElementById("btn").addEventListener("click",()=>{
    event.preventDefault();

    let writeInformation = document.createElement("div");
    writeInformation.classList.add("information");
    if(reponse == true){
        writeInformation.innerHTML = `
        <p>Nom : ${name.value}</p>
        <p>Prenom : ${firstname.value}</p>
        <p>date naissance :${date.value}</p>
        <p>Lieu de naissance:${birthsday.value}</p>
        <p>statut :${statut.value}</p>
        <p>sexe :${man.value}</p>
         `;
        body.appendChild(writeInformation);
    }
     
    else{
        writeInformation.innerHTML = `
        <p>Nom : ${name.value}</p>
        <p>Prenom : ${firstname.value}</p>
        <p>date naissance :${date.value}</p>
        <p>Lieu de naissance:${birthsday.value}</p>
        <p>statut :${statut.value}</p>
        <p>sexe :${woman.value}</p>
         `;
         body.appendChild(writeInformation);
    }
    name.value = "";
    firstname.value ="";
    man.value ="";
    date.value ="";
    woman.value ="";
    statut.value ="";
});