class Game {
    constructor() {


    }
    start() {
        player = new Player();
        playerCount= player.obtainNumber();
        
        formulary = new Form();
        formulary.display();

        player1=createSprite(width/2-50,height-100,30,30);
        player1.shapeColor="red";

        player2=createSprite(width/2+50,height-100,30,30);
        player1.shapeColor="blue";

        players=[player1,player2];
    }

    play() {
        formulary.ocultar();
        Player.obtenerInfoPlayers();
        if (allPlayers !== undefined) {
            background(background2);
           
            var index = 0
            for (var pl in allPlayers) {
                index = index + 1
                var x = allPlayers[pl].positionX;
                var y = height - allPlayers[pl].positionY;

                players[index-1].position.x=x;
                players[index-1].position.y=y;
            }
            this.controles();
            drawSprites();
        }
    }

    gameState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data){
            gameState = data.val();
        });
    }

    updateState(state) {
        database.ref("/").update({
            gameState: state
        });
    }

    controles(){
        if(keyIsDown(UP_ARROW)){
            player.positionY +=5;
            player.updatePosition();
        }
    }
}