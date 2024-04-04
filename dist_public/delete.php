<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  require('../db.php');
  $data = json_decode(file_get_contents('php://input'));
  $userName = mysqli_real_escape_string($link, $data->{'userName'});
  $passhash = mysqli_real_escape_string($link, $data->{'passhash'});
  $slugs = $data->{'slugs'};
  
  $success = false;
  $delFileCount = 0;
  $delRecCount = 0;
  $sql = "SELECT * FROM imjurUsers WHERE name LIKE \"$userName\" AND passhash LIKE BINARY \"$passhash\";";
  $res = mysqli_query($link, $sql);
  if(mysqli_num_rows($res)){
    $row = mysqli_fetch_assoc($res);
    if($row['enabled'] || $row['admin']){
      $userID = $row['id'];
      forEach($slugs as $slug){
        //$slug = mysqli_real_escape_string($link, $slug);
        $sql = "SELECT * FROM imjurUploads WHERE slug LIKE BINARY \"$slug\" AND userID = $userID";
        $res2 = mysqli_query($link, $sql);
        if(mysqli_num_rows($res2)){
          $row2 = mysqli_fetch_assoc($res2);
          $originalSlug = $row2['originalSlug'];
          $uploadID = $row2['id'];
          $sql = "SELECT * FROM imjurUploads WHERE originalSlug LIKE BINARY \"$originalSlug\"";
          $res2 = mysqli_query($link, $sql);
          if(mysqli_num_rows($res2) == 1 && $originalSlug && strlen($originalSlug) > 1 && $slug === $originalSlug){
            forEach(glob("uploads/$originalSlug*") as $file){
              unlink($file);
              $delFileCount++;
            }
          }
          $success = true;
          $sql = "DELETE FROM imjurUploads WHERE id = $uploadID AND userID = $userID";
          mysqli_query($link, $sql);
          $sql = "DELETE FROM imjurVotes WHERE uploadID = $uploadID";
          mysqli_query($link, $sql);
          $sql = "DELETE FROM imjurComments WHERE uploadID = $uploadID";
          mysqli_query($link, $sql);
          $delRecCount++;
        }
      }
      echo json_encode([$success, 1, $sql, $delFileCount, $delRecCount, $slugs]);
    } else {
      echo json_encode([$success, 1, $sql, $slugs]);
    }
  } else {
    echo json_encode([$success, 2, $sql, $slugs]);
  }
?>