// // Splash screen animation 

// var splashScreenTime = 4000;
// localStorage.setItem("temp","1");
// console.log("Local value set temp = 1");


// function animate()
// {
//   console.log("Animate Function called");  
//   const element = document.getElementById("animate");
//   setTimeout(() => {
//     element.remove();
//   }, splashScreenTime);
//   localStorage.setItem("temp","0");
//   // console.log("Local value set temp = z");
//   console.log("Local value is cleared");
// }

// if (localStorage.getItem('email') !== null) {
//   console.log(`Email address exists`);
//   console.log(`Do nothing `);
//   //   localStorage.removeItem('email');
// } 
// else 
// {
//   console.log("Animate the splash screen!!")
//   localStorage.setItem('email','hehe')
//   console.log(`Email address not found`);
// }

// function pageLoaded(){
//   console.log(localStorage.getItem("temp") + "==== 1")
//   if(localStorage.getItem("temp")==1){

//     console.log("PageLoad Function called");
//     animate();
//   }
//   else
//     return 0;
// }



// Splash screen animation 

var splashScreenTime = 4000;

// var animation =bodymovin.loadAnimation({
//   container : document.getElementById('animate'),
//   renderer:'svg',
//   loop:true,
//   autoplay:true,
//   path:'data.json'
// })

// function animate()
// {
//   console.log("Animate Function called");  
//   const element = document.getElementById("animate");
//   setTimeout(() => {
//     element.remove();
//   }, splashScreenTime);

// }



function pageLoaded(){

  setTimeout(() => 
  {
      localStorage.setItem("email","true")
  }, 4000);
  console.log("See This" ,localStorage.getItem("email"))
  if (localStorage.getItem("email") == null) 
  {
    var animation =bodymovin.loadAnimation({
      container : document.getElementById('animate'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:'data.json'
    })
    console.log("Animate Function called");  
    const element = document.getElementById("animate");
    setTimeout(() => {
      element.remove();
    }, splashScreenTime);
  }else{  
    console.log("value of email is :")
    console.log(localStorage.getItem("email"))
  }
}

// window.addEventListener("beforeunload",()=>localStorage.removeItem('email'));



