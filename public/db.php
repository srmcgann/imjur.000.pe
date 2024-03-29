<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

  $db_user  = 'if0_35882111';
  $db_pass  = 'GNS1oMHbsX';
  $db_host  = 'sql309.infinityfree.com';
  $db       = "if0_35882111_imjur";
  $port     = '3306';
  $link     = mysqli_connect($db_host,$db_user,$db_pass,$db,$port);
?>