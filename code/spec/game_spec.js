var Game = require('../game.js')
var Player = require('../player.js')
var Chicken = require('../chicken.js')

describe("Game", function() {

  var game;
  var players;

  beforeEach(function() {
    // chicken_options = {
    //   players: [new Player]],
    //   speed: 5,
    //   scare: 3
    // }
    // chicken = new Chicken(chicken_options);

    player1 = new Player("Valerie");
    player2 = new Player("Jay");

    players = [player1, player2];

    game = new Game(players);

  });

});