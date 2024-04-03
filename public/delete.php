<?php
  require('../db.php');
  $data = json_decode(file_get_contents('php://input'));
  $userName = mysqli_real_escape_string($link, $data->{'userName'});
  $passhash = mysqli_real_escape_string($link, $data->{'passhash'});
  $slugs = mysqli_real_escape_string($link, $data->{'slugs'});
  
  $success = false;
  $sql = "SELECT * FROM imjurUsers WHERE name LIKE \"$userName\" AND passhash LIKE BINARY \"$passhash\";";
  $res = mysqli_query($link, $sql);
  if(mysqli_num_rows($res)){
    $row = mysqli_fetch_assoc($res);
    if($row['enabled'] || $row['admin']){
      $userID = $row['id'];
      forEach($slugs as $slug){
        $sql = "SELECT * FROM imjurUploads WHERE slug LIKE BINARY \"$slug\" AND userID = $userID";
        $res2 = mysqli_query($link, $sql);
        if(mysqli_num_rows($res2)){
          $row2 = mysqli_fetch_assoc($res2);
          $originalSlug = $row2['originalSlug'];
          $uploadID = $row2['id'];
          if($originalSlug && strlen($originalSlug) > 1 && $slug === $originalSlug){
            forEach(glob("uploads/$originalSlug*") as $file){
              unlink($file);
              $success = true;
            }
          }
          $sql = "DELETE FROM imjurUploads WHERE id = $uploadID AND userID = $userID";
          mysqli_query($link, $sql);
          $sql = "DELETE FROM imjurVotes WHERE uploadID = $uploadID";
          mysqli_query($link, $sql);
          $sql = "DELETE FROM imjurComments WHERE uploadID = $uploadID";
          mysqli_query($link, $sql);
        }
      }
    } else {
      echo json_encode([$success]);
    }
  } else {
    echo json_encode([$success]);
  }
?>