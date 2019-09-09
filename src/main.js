import { tomaGatchi } from './toma.js';
import $ from 'jquery';
 // import 'bootstrap';
 // import 'bootstrap/dist/css/bootstrap.min.css';
 // import './styles.css';
 // var newPlayer = new tomaGatchi();
 var newPlayer = new tomaGatchi();
$(document).ready(function(){

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

  });
  $("#button1").click(function(){
    newPlayer.sleepToma()
  });
  $("#play").click(function(){
  newPlayer.playBored()
  })
  displayHunger()
})
function displayHunger(){
  if(newPlayer.hunger === true){
    alert("please feed your animal")
  }
}
