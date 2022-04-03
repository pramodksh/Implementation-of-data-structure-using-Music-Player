



// Splash screen animation 

var splashScreenTime = 4000;

function pageLoaded(){

  setTimeout(() => 
  {
      localStorage.setItem("email","true")
  }, 4000);
  if (localStorage.getItem("email") == null) 
  {
    var animation =bodymovin.loadAnimation({
      container : document.getElementById('animate'),
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:'data.json'
    })
    // console.log("Animate Function called");  
    const element = document.getElementById("animate");
    setTimeout(() => {
      element.remove();
    }, splashScreenTime);
  }else{  
    // console.log(localStorage.getItem("email"));
    // Do nothing
  }
}

// window.addEventListener("beforeunload",()=>localStorage.removeItem('email'));



