<?php

  require('db.php');

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
      $newid = decToAlpha($rndmax/2+rand();
      $sql = "SELECT id FROM uploads WHERE id = $newid";
      $res = mysqli_query($link, $sql);
    }while(mysqli_num_rows($res);
    return $newid;
  }

  $success = false;
  $uploadDir = 'uploads';
  if(sizeof($_FILES['uploads'])){
    forEach($_FILES['uploads']['error']) as $key => $error){
      if($error == UPLOAD_ERR_OK){
        $tmp_name = $_FILES['uploads']['tmp_name'][$key];
        $slug = genSlug();
        move_uploaded_file($tmp_name, "$uploadDir/$name";
        $success = true;
      }
    }
  }
  
  echo json_encode([$success, $slug]);
?>