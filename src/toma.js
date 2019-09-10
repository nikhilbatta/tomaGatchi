import $ from 'jquery';
export class tomaGatchi {
  constructor(){
    this.age = 0
    this.hunger = false;
    this.sleepy = false;
    this.bored = true;
    this.hungry;
    // this.setHunger()
    // this.setSleep()
    // this.setBored()
    // this.setAge()
  }
  //if hunger is false then set interval otherwise alert that things is hungry
  setHunger() {
    this.hungry = setInterval(() => {
      this.hunger = true;
    }, 10000);
    // if (this.hunger === true){
      //   alert("please feed your animal")
      // }else{
        //   alert("its not hitting it")
        // }

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
      }
      startDisplay(){
        setInterval(() => {
          this.display();
        },1000)
      }

    }
