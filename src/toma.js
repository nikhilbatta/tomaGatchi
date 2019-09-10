import $ from 'jquery';
export class tomaGatchi {
  constructor(){
    this.age = 0
    this.hunger = false;
    this.sleepy = false;
    this.bored = true;
    this.hungry;
  }

  setHunger() {
    this.hungry = setInterval(() => {
      this.hunger = true;
    }, 10000);
      }
      setSleep(){
        setInterval(() => {
          this.sleepy = true;
        },60000);
      }
      setBored(){
        setInterval(() =>{
          this.bored = true;
        },80000)
      }
      setAge(){
        setInterval(() => {
          this.age++; console.log(this.age)
        },10000)
      }
      playBored(){
        this.bored = false;
      }

      sleepToma(){
        this.sleepy = false;
      }
      feedToma(){

        this.hunger = false;
        clearInterval(this.hungry);

      }
      display(){
        if(this.hunger === true){
          $(".foodStatus").text( "please feed your dog");
        }
        else{
          $(".foodStatus").text("I am FED AND HAPPY :)");
        }
        if (this.sleepy === true){
          $(".sleepStatus").text("I'm feeling tired");
        } else
        $(".sleepStatus").text("I'm great on sleep; thanks for asking!");
        if (this.bored === true) {
          $(".boredStatus").text("Entertain me or else!");
        } else
        $(".boredStatus").text("Life is great!");
      }
      startDisplay(){
        setInterval(() => {
          this.display();
        },1000)
      }
    }
    export class Giphy{
      getGiphy(){
        return new Promise(function(resolve,reject){
          let request = new XMLHttpRequest();
          const url = "http://api.giphy.com/v1/gifs/search?q=tomagatchi&api_key=GarghQLp0bL3BhOfYvD0eLdP0TXGMzFD&limit=5"
          request.onload = function(){
            if(this.status === 200){
              resolve(request.response)
              console.log(this.status)
            } else {
              console.log(this.status)
              reject(Error(request.statusText))

            }
          }
          request.open("GET", url, true);
          request.send();
        });
        }
      }
