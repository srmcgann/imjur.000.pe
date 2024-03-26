<?php
  $res = exif_thumbnail($_GET['res'], $_GET['width'], $_GET['height'], $type);
  header('Content-type: ' . image_type_to_mime_type($type));
  echo $res;
?>