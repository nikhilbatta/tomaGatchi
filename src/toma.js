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
      this.hunger = true; console.log(this.hunger)
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
     console.log(this.hunger)

    clearInterval(this.hungry);
    this.hungry = setInterval(() => {
      this.hunger = true; console.log(this.hunger)
    }, 10000);
  }
  hungerChecker(){

    if(this.hunger === true){
      alert("FUCK THIS STUPID SHIT")
  //     setInterval(() => {
  //    console.log("please feed your animal");
  // }, 1000);
    }
    else {
      console.log("it didnt work")
    }

  }
}
