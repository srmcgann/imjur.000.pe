<?php
  require('../db.php');
  $data = json_decode(file_get_contents('php://input'));
  $userID = mysqli_real_escape_string($link, $data->{'userID'});
  $sql = "SELECT * FROM imjurUploads WHERE userID = $userID";
  $res = mysqli_query($link, $sql);
  $links = [];
  for($i=0; $i<mysqli_num_rows($res); ++$i){
    $row = mysqli_fetch_assoc($res);
    $link = [
      'id' => $row['id'],
      'slug' => $row['slug'],
      'filetype' => $row['filetype'],
      'date' => $row['date'],
      'userID' => $row['userID'],
      'upvotes' => $row['upvotes'],
      'downvotes' => $row['downvotes'],
      'views' => $row['views'],
      'description' => $row['description'],
      'originalSlug' => $row['originalSlug'],
    ];
    $links[] = $link;
  }
  if(sizeof($links)){
    echo json_encode([true, $links]);
  }else{
    echo json_encode([false]);
  }
?>