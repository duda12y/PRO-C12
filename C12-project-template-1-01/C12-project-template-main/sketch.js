var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {
  // carrega a imagem da pista
  pathImg = loadImage('path.png');
  // carrega a animação de corrida para o menino
  boyImg = loadAnimation('Runner-1.png', 'Runner-2.png');
}

function setup() {
  createCanvas(400, 400);
  // cria um sprite para a pista
  path = createSprite(200, 200);
  // adiciona uma imagem para a pista
  path.addImage(pathImg);

  // define a velocidade Y da pista para que ela se mova
  path.velocityY = 4;
  path.scale = 1.2;

  // cria um sprite de menino
  boy = createSprite(180, 340, 30, 30);
  // adiciona uma animação de corrida para ele
  boy.addAnimation('JakeRunning', boyImg);
  boy.scale = 0.08;

  // cria um limite à esquerda
  leftBoundary = createSprite(0, 0, 100, 800);
  // define visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false;

  // cria um limite à direita
  rightBoundary = createSprite(410, 0, 100, 800);
  // define visibilidade como falsa para o limite à direita
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);

  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // código para redefinir o fundo
  if (path.y > height) {
    path.y = height / 2;
  }

  drawSprites();
}
