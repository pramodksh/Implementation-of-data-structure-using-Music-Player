
function changee() {
  document.getElementById("song-name-id").innerHTML = "Demons"
}




console.log("Drag and Drop is working !!!");
class Song {
  constructor(dataAttribute, name, artist, imagePath, audioPath) {
    this.dataAttribute = dataAttribute;
    this.name = name;
    this.artist = artist;
    this.imagePath = imagePath;
    this.audioPath = audioPath;
  }
}

imagePath1 = "https://m.media-amazon.com/images/I/513soaaS2BS._SY550_.jpg";
imagePath2 = "https://i.ytimg.com/vi/mD3Lb2rSXQI/maxresdefault.jpg"
imagePath3 = "https://ih1.redbubble.net/image.2086000339.6433/farp,small,wall_texture,product,750x1000.jpg"
imagePath4 = "https://i.ytimg.com/vi/Ev1-M3yoD08/maxresdefault.jpg"
imagePath5 = "https://i.pinimg.com/236x/03/43/a5/0343a557914b3b7b2220b72dc54857e6.jpg"

let songs = [
  new Song("song1", "Demons", "Imagine Dragons", imagePath1,  "../audios/demons.mp3"),
  new Song("song2", "Brethe", "Pink Floyd", imagePath2,  "../audios/breathe.mp3"),
  new Song("song3", "Circles", "Post Malon", imagePath3,  "../audios/circles.mp3"),
  new Song("song4", "Counting Stars", "OneRepublic", imagePath4,  "../audios/countingStars.mp3"),
  new Song("song5", "Ignite", "K-391 and Alan Walker", imagePath5, "../audios/ignite.mp3"),
];  
console.log(songs[0].dataAttribute);

let list1Songs = [];
let list2Songs = [];

let setList1 = () => {
  var list1Content = "";
  for (let i = 0; i < list1Songs.length; i++) {
    let song = list1Songs[i];
    list1Content = list1Content + `
    <div id=card${i + 1} class="card" 
    data-song-id = "${song.dataAttribute}" 
    data-name-id = "${song.name}"
    data-artist-id = "${song.artist}"
    data-imagePath-id = "${song.imagePath}"
    data-audioPath-id = "${song.audioPath}"
    " draggable="true" ondragstart="dragStart(event)">
      <img class="round" src=${song.imagePath}
        height="50px" width="50px" alt="Image not found">
      <div class="song_title">
        <h2>${song.name}</h2>
        <p class="song_name_font"> ${song.artist} </p>
      </div>
    </div>
    `;
    // console.log({ list1Content });
  }

  document.getElementById("list1").innerHTML = list1Content;
};


function init() {
  list1Songs = songs;
}



window.onload = function () {
  init();
  setList1();
};

// ----------------------------------------------

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

listOfSongsToBePlayed = []
listOfImagesToBeDisplayed = []
listOfSongNamesToBeDisplayed = []
listOfArtistNamesToBeDisplayed = []
audioo =  document.getElementById("audio-path-id")
imagee = document.getElementById("main_image_id")
songName = document.getElementById("song-name-id")
artistName = document.getElementById("artist-name-id")



function dropIt(ev) {
  ev.preventDefault();  // default is not to allow drop
  let sourceId = ev.dataTransfer.getData("text/plain");
  let sourceIdEl = document.getElementById(sourceId);
  let sourceIdParentEl = sourceIdEl.parentElement;
  // ev.target.id here is the id of target Object of the drop
  let targetEl = document.getElementById(ev.target.id)
  let targetParentEl = targetEl.parentElement;

  // ------------------------------Un-comment this ------------------------------ 

  // console.log("Source ID : ", sourceId);
  // console.log("Source ID E1: ", sourceIdEl);
  // console.log("Source ID Parent E1: ", sourceIdParentEl);


  // console.log("-----------------------------------");
  // console.log("TargetParentE1 :", targetParentEl);
  // console.log("TargetEl Length : ", targetEl.length);
  // let numb = document.getElementById("list2").childNodes;
  // // console.log("~~~~~~~~~~~~~~~~~~~Number of elements in list2 is~~~~~~~~~~\n ",numb.forEach(foo));
  // console.log("------------------------------------");

  // console.log(targetParentEl.id);
  // console.log(sourceIdParentEl.id);


  // // Compare List names to see if we are going between lists
  // // or within the same list
  // console.log(targetEl.className, "===", sourceIdEl.className)


  // ------------------------------Un-comment this ------------------------------ 

  if (targetParentEl.id !== sourceIdParentEl.id) {

    // If the source and destination have the same 
    // className (card), then we risk dropping a Card in to a Card
    // That may be a cool feature, but not for us!

    if (targetEl.className === sourceIdEl.className) {

      // Append to parent Object (list), not to a 
      // Card in the list
      // This is in case you drag and drop a Card on top 
      // of a Card in a different list

      targetParentEl.prepend(sourceIdEl);

    } else {

      console.log("List of elements in container 2 are  : ");
      setTimeout(() => {
        var listOfSongs = [];

        const list2Elements = document.getElementById("list2").childNodes;
        // console.log("List 2 Elemenets are : "+document.getElementById("list2").firstChild.className);
        // console.log("List 2 Elemenets are : "+list2Elements[0].id);
        
        for (let i = 0; i < list2Elements.length; i++) {
          if (list2Elements[i].className == "card") {
            // console.log(list2Elements[i].id);
            listOfSongs.push(list2Elements[i].id);
          }
        }
        const var1 = listOfSongs[0];
        const var2 = document.getElementById(list1Songs[0]);

        console.log(listOfSongs);
        listOfSongsToBePlayed = []
        listOfImagesToBeDisplayed = []
        listOfSongNamesToBeDisplayed = []
        listOfArtistNamesToBeDisplayed = []

        for (let i = 0; i < listOfSongs.length; i++) {
          if (songs[i]['dataAttribute'] = document.getElementById(listOfSongs[i]).dataset.songId) {
            // console.log("Value of i is " + i);
            // console.log(songs[i]['audioPath']);
            console.log(document.getElementById(listOfSongs[i]).dataset.songId);
            console.log(document.getElementById(listOfSongs[i]).dataset.nameId);
            console.log(document.getElementById(listOfSongs[i]).dataset.artistId);
            console.log(document.getElementById(listOfSongs[i]).dataset.audiopathId);
            console.log(document.getElementById(listOfSongs[i]).dataset.imagepathId);
            listOfSongsToBePlayed.push(document.getElementById(listOfSongs[i]).dataset.audiopathId)
            listOfImagesToBeDisplayed.push(document.getElementById(listOfSongs[i]).dataset.imagepathId)
            listOfSongNamesToBeDisplayed.push(document.getElementById(listOfSongs[i]).dataset.nameId)
            listOfArtistNamesToBeDisplayed.push(document.getElementById(listOfSongs[i]).dataset.artistId)
          }
        }
        console.log("listOfSongsToBePlayed is : ");
        console.log(listOfSongsToBePlayed);
        console.log("listOfImagesToBeDisplayed is : ");
        console.log(listOfImagesToBeDisplayed);
        console.log("listOfSongNamesToBeDisplayed is : ");
        console.log(listOfSongNamesToBeDisplayed);
        console.log("listOfArtistNamesToBeDisplayed is : ");
        console.log(listOfArtistNamesToBeDisplayed);
        audioo.src=listOfSongsToBePlayed[0];
        imagee.src=listOfImagesToBeDisplayed[0];
        songName.innerHTML=listOfSongNamesToBeDisplayed[0];
        artistName.innerHTML=listOfArtistNamesToBeDisplayed[0];
      }, 500);

      // }

      // Append to the list
      targetEl.prepend(sourceIdEl);

    }

  }
  else {
    alert("Object Dropped to same Container !!!")
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




// --------------------code used to change music ---------------------
function fooo() {
  if(document.getElementById("audioFile").src == `http://127.0.0.1:${location.port}/null`)
  {
    // alert("Source file path is empty!!!");
    console.log("Source file path is empty");
  }
  else
  {
    // alert("Source file found");
    console.log("Source file found");
  }
}

var index = 1;
    
function changePath() {
    // console.log("Change Path Function Called !!!");
    // console.log("Flag1");
    // audioo.src="audio1.mp3";
    // console.log("Flag2");
    audioo.play();
    // console.log("Flag3");
    audioo.onended = function foo() {
      // console.log("Flag4");
      // console.log("Foo is called " + index);
      // console.log("Flag5");
      audioo.src = listOfSongsToBePlayed[index];
      imagee.src = listOfImagesToBeDisplayed[index];
      songName.innerHTML=listOfSongNamesToBeDisplayed[index];
      artistName.innerHTML=listOfArtistNamesToBeDisplayed[index];
      console.log("----------------------------See Here :Image Changed-----------------------");
      // console.log(document.getElementById("main_image_id").src);
      // console.log("Flag6");
      audioo.play();
      // console.log("Flag7");
      index++;
      // console.log("Incremented Index");
    }
}



// console.log(location.port);