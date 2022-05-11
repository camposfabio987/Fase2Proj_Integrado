var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

var Largura = window.innerWidth
var Altura = window.innerHeight
var andar_nitaner = (Largura)*0.146
var velocidade_nitaner = 5
var andar_direita, andar_esquerda

  function ObjEst(){
  // CRIANDO OBJETOS ESTÁTICOS

  ctx.fillStyle = 'blue'; // COR DO PERSONAGEM PRINCIPAL
  ctx.fillRect(0, (Altura)*0.342, (Largura)*0.054, (Altura)*0.114); //PERSONAGEM PRINCIPAL

  ctx.fillStyle = 'rgba(0,255,0,0.5)'; // COR DO CHÃO
  ctx.fillRect(0, (Altura)*0.913, (Largura), (Altura)*0.083); // CHÃO

  ctx.fillStyle = 'yellow'; // COR DO PRÉDIO 1
  ctx.fillRect(0, (Altura)*0.456,  (Largura)*0.183, (Altura)*0.030); //PRÉDIO 1 

  ctx.fillStyle = 'red'; // COR DO PRÉDIO 2
  ctx.fillRect((Largura)*0.198, (Altura)*0.509, (Largura)*0.128, (Altura)*0.038); //PRÉDIO 2
  
  ctx.fillStyle = 'orange'; // COR DO PRÉDIO 3, ONDE O PERSONAGEM ENTRA
  ctx.fillRect((Largura)*0.360, (Altura)*0.380, (Largura)*0.164, (Altura)*0.053); //PRÉDIO 3, ONDE O PERSONAGEM ENTRA 
  
  ctx.fillStyle = 'purple'; // COR DA LOJA 
  ctx.fillRect((Largura)*0.551, (Altura)*0.608, (Largura)*0.237, (Altura)*0.068); //LOJA 

  ctx.fillStyle = 'pink'; // COR DO PRÉDIO 4, Ñ TERÁ INTERAÇÃO
  ctx.fillRect((Largura)*0.805, (Altura)*0.152, (Largura)*0.219, (Altura)*0.015); // PRÉDIO 4, Ñ HAVERÁ INTERAÇÃO
  }
 


 function Nitaner() {
  requestAnimationFrame(Nitaner)
  
  ctx.clearRect(0, 0, innerWidth, innerHeight)

  ObjEst()

  ctx.fillStyle = 'gray'; // COR DO NITANER
  ctx.fillRect(andar_nitaner, (Altura)*0.837, (Largura)*0.036, (Altura)*0.076); //NITANER
  
  if(( andar_nitaner + 200) > innerWidth) {
    velocidade_nitaner = -velocidade_nitaner
   }
   else if (andar_nitaner<0){
 velocidade_nitaner = -velocidade_nitaner
   }
   andar_nitaner=andar_nitaner+velocidade_nitaner;
 }
  
Nitaner()


document.addEventListener('keydown', BotaoDireita, false)
document.addEventListener('keyup', BotaoDireitaSolto, false)

document.addEventListener('keydown', BotaoEsquerda, false)
document.addEventListener('keyup', BotaoEsquerdaSolto, false)


function BotaoDireita() {
  if (e.keyCode == 39) {
    andar_direita = true;
}
}

function BotaoDireitaSolto() {
  if (e.keyCode == 39) {
    andar_direita = false;
}
}

function BotaoEsquerda() {
  if (e.keyCode == 37) {
    andar_esquerda = true;

}
}

function BotaoEsquerdaSolto() {
  if (e.keyCode == 37) {
    andar_esquerda = false;

}
}