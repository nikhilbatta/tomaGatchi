import { tomaGatchi } from './toma.js';
import $ from 'jquery';
 // import 'bootstrap';
 // import 'bootstrap/dist/css/bootstrap.min.css';
 // import './styles.css';
 // var newPlayer = new tomaGatchi();
 var newPlayer = new tomaGatchi();
$(document).ready(function(){
  // setInterval(onChange(),5000)
  newPlayer.startDisplay();
  $("#Toma").click(function(){
    newPlayer.setHunger()
    newPlayer.setSleep()
    newPlayer.setBored()
    newPlayer.setAge()
      // if(newPlayer.hunger === true){
    //   alert("please feed your animal")
    // }
  })
  $("#buttonHunger").click(function(){
    newPlayer.feedToma()
    newPlayer.setHunger()
  });
  $("#button1").click(function(){
    newPlayer.sleepToma()
  });
  $("#play").click(function(){
  newPlayer.playBored()
  })
  // displayHunger(newPlayer)
})
function displayHunger(newPlayer){
  if(newPlayer.hunger === true){
    alert("please feed your animal")
    console.log(newPlayer.hunger)
  }
}
