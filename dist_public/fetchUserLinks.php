<?php
  require_once('../db.php');
  require_once('functions.php');
  $data = json_decode(file_get_contents('php://input'));
  $userID = mysqli_real_escape_string($link, $data->{'userID'});
  $sql = "SELECT * FROM imjurUploads WHERE userID = $userID";
  $res = mysqli_query($link, $sql);
  $uploadDir = 'uploads';
  $links = [];
  $meta = [];
  for($i=0; $i<mysqli_num_rows($res); ++$i){
    $row = mysqli_fetch_assoc($res);
    $m = [
      'id' => $row['id'],
      'slug' => $row['slug'],
      'size' => json_decode($row['meta'])->{'file size'},
      'name' => json_decode($row['meta'])->{'original name'},
      'type' => $row['filetype'],
      'date' => $row['date'],
      'userID' => $row['userID'],
      'origin' => $row['origin'],
      'upvotes' => $row['upvotes'],
      'downvotes' => $row['downvotes'],
      'views' => $row['views'],
      'description' => $row['description'],
      'originalSlug' => $row['originalSlug'],
      'serverTZO' => getServerTZOffset(),
    ];
    switch($row['filetype']){
      case 'audio/wav': $suffix = 'wav';  break;
      case 'audio/x-wav': $suffix = 'wav';  break;
      case 'audio/mp3': $suffix = 'mp3';  break;
      case 'audio/mpeg': $suffix = 'mp3';  break;

      case 'image/jpg': $suffix = 'jpg'; break;
      case 'image/jpeg': $suffix = 'jpeg';  break;
      case 'image/png': $suffix = 'png';  break;
      case 'image/gif': $suffix = 'gif';  break;
      case 'image/webp': $suffix = 'webp';  break;

      case 'video/webm': $suffix = 'webm';  break;
      case 'video/mkv': $suffix = 'mkv';  break;
      case 'video/mp4': $suffix = 'mp4';  break;
    }
    $originalSlug = $row['originalSlug'];
    $links[] = "$uploadDir/$originalSlug.$suffix";
    $meta[] = $m;
  }
  if(sizeof($links)){
    echo json_encode([true, $links, $meta]);
  }else{
    echo json_encode([false]);
  }
?>