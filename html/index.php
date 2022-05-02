<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "music";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
 }

$sql = "SELECT * FROM `songslist` ";
$result = mysqli_query($conn,$sql);
$data=array();


if (mysqli_num_rows($result)>0){
  while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;
  }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
    <!-- <link href="control.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&family=Lato:wght@300;400&family=Oswald:wght@500&family=Roboto+Condensed&display=swap"
        rel="stylesheet">
    

    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->

    <!-- <script src="/js/songs.js"></script> -->
    <!-- <script src="/js/script.js"></script> -->
    
</head>

<!-- <body onload="alert('test');"> -->
    <body onload="pageLoaded()">
    <div id="animate">
    </div>
    <div class="fullnav">
        <div class="navbar">


            <ul class="navitem">
                <li class="item">
                    <img src="../images/logo3.png" alt="Logo not found" style="height: 60px;">
                    <!-- <h1>!musicPlayer</h1> -->
                </li>

                <li class="item"> <a href="index.php">Stack</a></li>
                <li class="item"> <a href="queue.php">Queue</a></li>
                <li class="item"> <a href="about.html">About Us</a></li>
                <li class="item"> <a href="stackinfo.html">Stackinfo</a></li>
                <li class="item"> <a href="queueinfo.html">Queueinfo </a></li>
            </ul>
        </div>
    </div>
    
    <!--
        
        Explore section
    
    
    -->
        <div class="main-container">
        <div class="board-layout">
            <h1 id="main-heading">STACK</h1>
            <div class="board-lists">
                <div id='list1' class="board-list" ondrop="dropIt(event)" ondragover="allowDrop(event)">
                   
                <!-- Card are inserted here!!! -->
                
                </div>
                    <img id="main_image_id" class="main_image" src=""
                    width="100%" alt="">
                <div id='list2' class="board-list" ondrop="dropIt(event)" ondragover="allowDrop(event)">
 
                </div>
            </div>

            <br>

            <div class="music-player">
                <div class="inner-element">
                    <div class="namesong">
                        <h4 id="song-name-id">It's Time</h4>
                        <h6 id="artist-name-id">Imagine Dragons</h6>
                    </div>
                    
                    <div>
                        <audio id="audio-path-id" controls src=null onplay="changePath()">
                        </audio>
                    </div>  

                </div>
            </div>
        </div>
    </div>
    
</body>


<script src="/js/lottie.js"></script>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

<script type="text/javascript">

var songs=<?php echo json_encode($data); ?>;
    console.log(songs);



</script>
<script type="text/javascript" src="../js/dragAndDrop.js"></script>
</html>