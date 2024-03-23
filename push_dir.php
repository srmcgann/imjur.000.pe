<?php

  // RECURSIVE DIRECTORY FTP PUSH

  $ftp_server  = "ftpupload.net";
  $ftp_user    = 'if0_35882111';
  $ftp_pass    = 'GNS1oMHbsX';
  $local_dir   = '/home/whitehotrobot/imjur.000.pe/dist_public';
  $remote_dir  = '/imjur.000.pe/htdocs';

  $ftp = ftp_connect($ftp_server) or die("Couldn't connect to $ftp_server"); 

  if (@ftp_login($ftp, $ftp_user, $ftp_pass)) {
    echo "Connected as $ftp_user@$ftp_server\n";
  } else {
    echo "Couldn't connect as $ftp_user\n";
  }

  ftp_pasv($ftp, true);

  function recurse($dir){
    global $remote_dir, $local_dir, $ftp;
    forEach(glob("$dir/*") as $entry){
      if(is_dir($entry)){
        $mkdir = $remote_dir . '/' . explode("$local_dir/", $entry)[1];
        @ftp_mkdir($ftp, $mkdir);
        recurse($entry);
      }else{
        $local_file = explode("$local_dir/", $entry)[1];
        $remote_file = "$remote_dir/$local_file";
        echo "uploading: $local_file -> $remote_file\n";
        ftp_put($ftp, $remote_file, $entry, FTP_BINARY);
      }
    }
  }

  recurse($local_dir);
?>
