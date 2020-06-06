var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a29b89f2-91de-4453-94b4-e9a833d0cbb5","c7895845-5a54-4ac3-b710-beaca5c8b15c","3278f06c-de29-4f5b-8685-c47df2dfd824"],"propsByKey":{"a29b89f2-91de-4453-94b4-e9a833d0cbb5":{"name":"star","sourceUrl":"assets/v3/animations/IELERvALh579-x85VliLnd0xV2r38AU9jShuwAY70sI/a29b89f2-91de-4453-94b4-e9a833d0cbb5.png","frameSize":{"x":260,"y":260},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ap4YaPMqeQfjszDrhyQawNrUcs4Q7cbC","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":260},"rootRelativePath":"assets/v3/animations/IELERvALh579-x85VliLnd0xV2r38AU9jShuwAY70sI/a29b89f2-91de-4453-94b4-e9a833d0cbb5.png"},"c7895845-5a54-4ac3-b710-beaca5c8b15c":{"name":"star1","sourceUrl":"assets/v3/animations/IELERvALh579-x85VliLnd0xV2r38AU9jShuwAY70sI/c7895845-5a54-4ac3-b710-beaca5c8b15c.png","frameSize":{"x":281,"y":179},"frameCount":1,"looping":true,"frameDelay":4,"version":"gFjipa_3WSJsI2KJF5WvkZVAqRT4PUo9","loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":179},"rootRelativePath":"assets/v3/animations/IELERvALh579-x85VliLnd0xV2r38AU9jShuwAY70sI/c7895845-5a54-4ac3-b710-beaca5c8b15c.png"},"3278f06c-de29-4f5b-8685-c47df2dfd824":{"name":"wood","sourceUrl":"assets/api/v1/animation-library/gamelab/M9pZrnJprDtmZi2rjKZtWXHoMaR_gQ99/category_environment/wood.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"M9pZrnJprDtmZi2rjKZtWXHoMaR_gQ99","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/M9pZrnJprDtmZi2rjKZtWXHoMaR_gQ99/category_environment/wood.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var a = createSprite(0,0,800,5);
var a2 = createSprite(400,0,5,800);
var a3 = createSprite(400,400,800,5);
var a4 = createSprite(0,0,5,800);
var b = createSprite(25,200,2,340);
var c = createSprite(375,200,2,340);
var d = createSprite(220,30,310,2);
var e = createSprite(179,370,310,2);
var wall1 = createSprite(47,260,45,2);
var wall2 = createSprite(70,239,2,45);
var wall3 = createSprite(92,150,45,2);
var wall4 = createSprite(115,229,2,160);
var wall5 = createSprite(94,310,45,2);
var wall6 = createSprite(244,260,260,2);
var wall7 = createSprite(170,109,2,160);
var wall8 = createSprite(120,105,100,2);
var wall9 = createSprite(240,125,2,40);
var wall10 = createSprite(259,105,40,2);
var wall11 = createSprite(279,146,2,83);
var wall12 = createSprite(179,340,2,60);
var wall13 = createSprite(253,310,150,2);
var player = createSprite(10,10,10,10);
//var door = createSprite(384,384,27,27);
var door = createSprite(380,380,20,20);
var wall14 = createSprite(387,370,25,2);
var object = createSprite(200,200,10,10);
object.setAnimation("star");
object.scale = 0.05;
var object2 = createSprite(250,250,10,10);
object2.setAnimation("star1");
object2.scale = 0.08;
var wall15 = createSprite(334,383,2,28);
door.setAnimation("wood");
door.scale = 0.2;


function draw(){
  background(255);
  showMobileControls(false, false, false, true);
  if(keyDown("UP_ARROW")){
    player.velocityX = 0;
    player.velocityY = -2;
  }
  if(keyDown("DOWN_ARROW")){
    player.velocityX = 0;
    player.velocityY = 2;
  }
  if(keyDown("LEFT_ARROW")){
    player.velocityX = -2;
    player.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    player.velocityX = 2;
    player.velocityY = 0;
  }
  if(player.isTouching(object)){
  wall15.velocityX = -0.5;
   if((wall15.x = 100)&&(wall15.y = 383)){
 wall15.velocityX = 0;
   }
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
