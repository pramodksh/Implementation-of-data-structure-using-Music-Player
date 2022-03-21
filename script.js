// Splash screen animation 
// var bool = true;
function pageLoaded()
{
    const element = document.getElementById("animate");
    setTimeout(() => {
      element.remove();
    }, 4000);
}

// if(bool){
//   bool = false;
  var animation =bodymovin.loadAnimation({
    container : document.getElementById('animate'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'data.json'
  })
// }

function allowDrop(ev) {
    ev.preventDefault();  // default is not to allow drop
  }
  function dragStart(ev) {
    // The 'text/plain' is referring the Data Type (DOMString) 
    // of the Object being dragged.
    // ev.target.id is the id of the Object being dragged
    ev.dataTransfer.setData("text/plain", ev.target.id);

  console.log(ev.sourceId)
  }
  function dropIt(ev) {
    ev.preventDefault();  // default is not to allow drop
    let sourceId = ev.dataTransfer.getData("text/plain");
    let sourceIdEl=document.getElementById(sourceId);
    let sourceIdParentEl=sourceIdEl.parentElement;
    // ev.target.id here is the id of target Object of the drop
    let targetEl=document.getElementById(ev.target.id)
    let targetParentEl=targetEl.parentElement;
    console.log("Source ID : " , sourceId);
    console.log("Source ID E1: " , sourceIdEl);
    console.log("Source ID Parent E1: " , sourceIdParentEl);

    console.log("-----------------------------------");
    console.log(targetParentEl);
    console.log(targetEl.length);
    console.log("------------------------------------");

    console.log(targetParentEl.id);
    console.log(sourceIdParentEl.id);
    
  
    // Compare List names to see if we are going between lists
    // or within the same list
    console.log(targetEl.className,"===",sourceIdEl.className)
    if (targetParentEl.id!==sourceIdParentEl.id){
// If the source and destination have the same 
        // className (card), then we risk dropping a Card in to a Card
        // That may be a cool feature, but not for us!
        if (targetEl.className === sourceIdEl.className ){
          // Append to parent Object (list), not to a 
          // Card in the list
          // This is in case you drag and drop a Card on top 
          // of a Card in a different list
           targetParentEl.prepend(sourceIdEl);
         
        }else{
            // Append to the list
             targetEl.prepend(sourceIdEl);
           
        }
       
    }
    else{
      console.log("Object Dragged to same Container!!!")
    }
    // else
    // {
    //     // Same list. Swap the text of the two cards
    //     // Just like swapping the values in two variables
      
    //     // Temporary holder of the destination Object
    //     let holder=targetEl;
    //     // The text of the destination Object. 
    //     // We are really just moving the text, not the Card
    //     let holderText=holder.textContent;
    //     // Replace the destination Objects text with the sources text
    //     targetEl.textContent=sourceIdEl.textContent;
    //     // Replace the sources text with the original destinations
    //     sourceIdEl.textContent=holderText;
    //     holderText='';
    // }
    
  }