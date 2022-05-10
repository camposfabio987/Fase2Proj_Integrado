var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var x = 200;
var y = 100;
var auxX = 50;
var auxY = 25;

  // CRIANDO OBJETOS ESTÁTICOS
  ctx.fillStyle = 'rgba(0,255,0,0.5)'; // COR DO CHÃO
  ctx.fillRect(0, 600,(window.innerWidth), 50); // CHÃO
  
  ctx.fillStyle = 'blue'; // COR DO PERSONAGEM PRINCIPAL
  ctx.fillRect(0, 500, 100, 100); //PERSONAGEM PRINCIPAL
  
