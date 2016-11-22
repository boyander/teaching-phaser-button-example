
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'button_sprite_sheet.png', 193, 71);
    game.load.image('background','starfield.png');

}

var background;

function create() {

    game.stage.backgroundColor = '#182d3b';
    var n = 0;
    var background = game.add.tileSprite(0, 0, 800, 600, 'background');
    for(var i=0; i < 3; i++) {
        for(var j=0; j < 4; j++){
            var key = "boton-"+n;
            game.add.button(i * 50, j * 50, key, actionOnClick, {keyname:n}, 0, 0, 0)
            n++;
        }
    }

}

function actionOnClick () {
    console.log("Tecla pulsada:" + this.keyname);
    //background.visible =! background.visible;
}












