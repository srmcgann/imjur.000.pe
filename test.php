<?php

  //require('db.php');

  function alphaToDec($val){
    $pow=0;
    $res=0;
    while($val!=""){
      $cur=$val[strlen($val)-1];
      $val=substr($val,0,strlen($val)-1);
      $mul=ord($cur)<58?$cur:ord($cur)-(ord($cur)>96?87:29);
      $res+=$mul*pow(62,$pow);
      $pow++;
    }
    return $res;
  }

  function decToAlpha($val){
    $alphabet="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $ret="";
    while($val){
      $r=floor($val/62);
      $frac=$val/62-$r;
      $ind=(int)round($frac*62);
      $ret=$alphabet[$ind].$ret;
      $val=$r;
    }
    return $ret==""?"0":$ret;
  }
 
  function genSlug(){
    global $link;
    $rndmax = getrandmax();
    do{
      $newid = decToAlpha(floor($rndmax/2+rand()));
      $sql = "SELECT id FROM uploads WHERE id = $newid";
      $res = mysqli_query($link, $sql);
    }while(mysqli_num_rows($res));
    return $newid;
  }

  $success = false;
  $uploadDir = 'uploads';
  $ct = 0;
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
          case 'image/jpg': $continue = true; break;
          case 'image/jpeg': $continue = true; break;
          case 'image/png': $continue = true; break;
          case 'image/gif': $continue = true; break;
          case 'image/webp': $continue = true; break;
          case 'video/webm': $continue = true; break;
          case 'video/mkv': $continue = true; break;
          case 'video/mp4': $continue = true; break;
          case 'audio/wav': $continue = true; break;
          case 'audio/mp3': $continue = true; break;
        }
        if($continue){
          $hash = hash_file('md5', "$uploadDir/$slug");
          $id = alphaToDec($slug);
          $original_name = basename($_FILES["uploads_$ct"]["name"]);
          $meta = json_encode([
            "file size" => $size,
            "sender IP" => $_SERVER['REMOTE_ADDR'],
            "original name" => $original_name
          ]);
          $meta = '';
          $sql = "INSERT INTO uploads (id, slug, meta, filehash, filetype) VALUES($id, \"$slug\", \"$meta\", \"$hash\", \"$type\")";
          $success = true;
        }else{
          unlink("$uploadDir/$slug");
        }
      }else{
        unlink("$uploadDir/$slug");
      }
      $ct++;
    }
  }
  
  echo json_encode([$success, $slug, $type]);
?>
