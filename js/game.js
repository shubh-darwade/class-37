class Game
{
    constructor()
    {

    }

    getState()
    {
        var gameStateref=database.ref('GameState');
        gameStateref.on("value",function (data){
            gameState= data.val();
        });
        
    }

    update(state)
    {
        database.ref('/').update(
            {
            gameState:state
            }
        );

    }
    play()
  {
    form.hide();
    textSize(15);
    text("Game Start",width/2,height/2);
    Player.getPlayerInfo();
    if(allPlayers !== undefined)
    {
    var displayPosition = height/2+20;  
    for (var i in allPlayers)
  {
     displayPosition +=20;
     if(i==="player"+player.index)
   {
    fill("red");
   }
   else
   {
       fill("black");
   }

     text(allPlayers[i].name+" : "+ allPlayers[i].distance,width/2,displayPosition);
     
  }
}
if(keyDown(UP_ARROW) && player.index!==null)
{
    player.distance +=40;
    player.update();
}
  }
  async start()
        {
      if(gameState===0)
      {
        player= new Player();
        var PlayerCountref = await database.ref('playerCount').once("value");
        if(PlayerCountref.exists())
        {
           playerCount = PlayerCountref.val();
           player.getCount();
           
        }
        form = new Form();
        form.display();
      }
        }
    
}