import { tomaGatchi } from './toma.js';
import { Giphy } from './toma.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap'); 
// import './styles.css';
// var newPlayer = new tomaGatchi();
var newPlayer;
$(document).ready(function(){
  $("#Toma").click(function(){
    newPlayer = new tomaGatchi();
    newPlayer.setHunger()
    newPlayer.setSleep()
    newPlayer.setBored()
    newPlayer.setAge()
    newPlayer.startDisplay();

    let giphy1 = new Giphy()
    let promise = giphy1.getGiphy()

    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(body.data[0])
      $("body").prepend(`<img src=${body.data[0].images.original.url}/>`)
    }, function(error){
      $('body').append(error.message);
    });
});
$("#buttonHunger").click(function(){
  newPlayer.feedToma()
  newPlayer.setHunger()
});
$("#button1").click(function(){
  newPlayer.sleepToma()
});
$("#play").click(function(){
  newPlayer.playBored()
});
});
