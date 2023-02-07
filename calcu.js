function numero(valeur){
    document.getElementById('resultat').value +=valeur;
}
function operation(){
    var opera = document.getElementById('resultat').value;
    if( opera == 0){
        document.getElementById('resultat').value = "sans operation"
    }else{
        document.getElementById('resultat').value = eval(opera);

    }
}
function restar(){
    document.getElementById("resultat").value = " ";
}