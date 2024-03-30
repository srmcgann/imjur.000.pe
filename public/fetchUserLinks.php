<?php
  require('../db.php');
  $data = json_decode(file_get_contents('php://input'));
  $userName = mysqli_real_escape_string($link, $data->{'userID'});
  $sql = "SELECT * FROM imjurUploads WHERE userID = $userID";
  $res = mysqli_query($link, $sql);
  $links = [];
  for($i=0; $i<mysqli_num_rows($res); ++$i){
    $links[] = mysqli_fetch_assoc($res);
  }
  if(sizeof($links){
    echo json_encode([true, $links]);
  }else{
    echo json_encode([false]);
  }
?>