const checkYuGiOh = () =>{
    let result = [];
    for(let i = 1; i <= 20; i++){
      if(i % 2 === 0 && i % 3 === 0){
        console.log("Yu-Gi");
      }
        
      if (i % 2 === 0 && i % 5 === 0) {
        console.log("Yu-Oh")
      }
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("Gi-Oh")
      }
        else if (i % 2 === 0){
        console.log("Yu");
      }else if (i % 3 === 0){
        console.log("Gi");
      }
      else if (i % 5 === 0){
        console.log("Oh");
      }else{
        console.log(i);
      }
    }
  }
  checkYuGiOh()

