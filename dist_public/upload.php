<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

  require_once('db.php');
  require_once('functions.php');

  $success = false;
  $uploadDir = 'uploads';
  $ct = 0;
  $links = [];
  $types = [];
  $sizes = [];
  if(sizeof($_FILES)){
    forEach($_FILES as $key => $val){
      $tmp_name = $_FILES["uploads_$ct"]['tmp_name'];
      $slug = genSlug();
      move_uploaded_file($tmp_name, "$uploadDir/$slug");
      $type = mime_content_type("$uploadDir/$slug");
      $continue = false;
      $size = filesize("$uploadDir/$slug");
      if($size < 1e8){ //~100MB
        switch($type){
          case 'audio/wav': $continue = true; $suffix = 'wav';  break;
          case 'audio/mp3': $continue = true; $suffix = 'mp3';  break;
          case 'audio/mpeg': $continue = true; $suffix = 'mp3';  break;

          case 'image/jpg': $continue = true; $suffix = 'jpg'; break;
          case 'image/jpeg': $continue = true; $suffix = 'jpeg';  break;
          case 'image/png': $continue = true; $suffix = 'png';  break;
          case 'image/gif': $continue = true; $suffix = 'gif';  break;
          case 'image/webp': $continue = true; $suffix = 'webp';  break;

          case 'video/webm': $continue = true; $suffix = 'webm';  break;
          case 'video/mkv': $continue = true; $suffix = 'mkv';  break;
          case 'video/mp4': $continue = true; $suffix = 'mp4';  break;
        }
        if($continue){
          $hash = hash_file('md5', "$uploadDir/$slug");
          $id = alphaToDec($slug);
          $original_name = basename($_FILES["uploads_$ct"]["name"]);
          $meta = mysqli_real_escape_string($link, json_encode([
            "file size" => $size,
            "sender IP" => $_SERVER['REMOTE_ADDR'],
            "original name" => $original_name,
          ]));
          $meta = '';
          $description = $_FILES["uploads_$ct"]["description"];
          $origin = "user file: $original_name";
          $userID = -1;
          
$sql = <<<SQL
INSERT INTO imjurUploads (id, 
                          slug,
                          meta,
                          hash,
                          filetype,
                          origin,
                          userID,
                          upvotes,
                          downvotes,
                          views,
                          description
                          )VALUES(
                            $id,
                            "$slug",
                            "$meta",
                            "$hash",
                            "$type",
                            "$origin",
                            $userID,
                            0,
                            0,
                            0,
                            "$description"
                          )
SQL;
          
          mysqli_query($link, $sql);
          $success = true;
          $links[] = "$uploadDir/$slug.$suffix";
          $sizes[] = $size;
          $types[] = $type;
          rename("$uploadDir/$slug", "$uploadDir/$slug.$suffix");
        }else{
          unlink("$uploadDir/$slug");
        }
      }else{
        unlink("$uploadDir/$slug");
      }
      $ct++;
    }
  }
  
  echo json_encode([$success, $links, $sizes, $types, $ct, $sql]);
?>