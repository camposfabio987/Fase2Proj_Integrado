var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


  // CRIANDO OBJETOS ESTÁTICOS
  ctx.fillStyle = 'rgba(0,255,0,0.5)'; // COR DO CHÃO
  ctx.fillRect(0, 600, (window.innerWidth), 50); // CHÃO

  ctx.fillStyle = 'yellow'; // COR DO PRÉDIO 1
  ctx.fillRect(0, 300, 250, 20); //PRÉDIO 1 

  ctx.fillStyle = 'red'; // COR DO PRÉDIO 2
  ctx.fillRect(271, 335, 175, 25); //PRÉDIO 2
  
  ctx.fillStyle = 'orange'; // COR DO PRÉDIO 3, ONDE O PERSONAGEM ENTRA
  ctx.fillRect(492, 250, 225, 35); //PRÉDIO 3, ONDE O PERSONAGEM ENTRA 
  
  ctx.fillStyle = 'purple'; // COR DA LOJA 
  ctx.fillRect(753, 400, 325, 45); //LOJA 

  ctx.fillStyle = 'pink'; // COR DO PRÉDIO 4, Ñ TERÁ INTERAÇÃO
  ctx.fillRect(1100, 100, 300, 10); // PRÉDIO 4, Ñ HAVERÁ INTERAÇÃO

  // PERSONAGEM PRINCIPAL 

  function TestePP() {
    requestAnimationFrame(TestePP)

    ctx.fillStyle = 'blue'; // COR DO PERSONAGEM PRINCIPAL
    ctx.fillRect(0, 225, 75, 75); //PERSONAGEM PRINCIPAL
  }

 TestePP()
