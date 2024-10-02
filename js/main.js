function teste(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("p");
    const imagem = document.querySelector("img");
    const x = document.querySelector('#x').value;

    if (x== 1){
        texto.innerHTML = "VOCE ESTÁ FELIZ!";
        texto2.innerHTML = "MUITO BEM CONTINUE ASSIM!";
        imagem.setAttribute("src","img/feliz.png");
        imagem.setAttribute("width","300px");


    } else if (x== 2){
        texto.innerHTML = "POR QUE ESTÁ PARA BAIXO!";
        texto2.innerHTML = "PROCURE FALAR OU FAZER ALGO DIVERTIDO!";
        imagem.setAttribute("src","img/parabaixo.gif");
        imagem.setAttribute("width","500px");

    } else {
        texto.innerHTML = " Você é o Spike!";
        texto2.innerHTML = "Bulldog é confiante e traz seriedade!";
        imagem.setAttribute("src","img/SUICIDIO.png");
        imagem.setAttribute("width","400px");
    }
}
 