<?php

  // RECURSIVE DIRECTORY FTP PUSH

  $servers = [
    [
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'assets1',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html',
    ],[
      'ftp_server'  => "ftpupload.net",
      'ftp_user'    => 'if0_35882111',
      'ftp_pass'    => 'GNS1oMHbsX',
      'local_dir'   => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir'  => '/imjur.000.pe/htdocs'
    ],/*[
      'ftp_server'  => "ftpupload.net",
      'ftp_user'    => 'if0_35615011',
      'ftp_pass'    => 'ouVkeSu5FegeH',
      'local_dir'   => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir'  => '/htdocs/assets'
    ],[
      'ftp_server'  => "ftpupload.net",
      'ftp_user'    => 'if0_35680091',
      'ftp_pass'    => 'kjiGQM2DqnhUAuU',
      'local_dir'   => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir'  => '/htdocs/assets'
    ],[
      'ftp_server'  => "ftpupload.net",
      'ftp_user'    => 'if0_35680402',
      'ftp_pass'    => 'nBbQv0M3POyp',
      'local_dir'   => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir'  => '/htdocs/assets'
    ],[
      'ftp_server'  => "ftpupload.net",
      'ftp_user'    => 'if0_35680488',
      'ftp_pass'    => '9K12EE4mmF3yi',
      'local_dir'   => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir'  => '/htdocs/assets'
    ],[
      'ftp_server'  => "ftpupload.net",
      'ftp_user'    => 'if0_35681218',
      'ftp_pass'    => 'siann2ji7AGh',
      'local_dir'   => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir'  => '/htdocs/assets'
    ],[
      'ftp_server'  => "ftpupload.net",
      'ftp_user'    => 'if0_35686192',
      'ftp_pass'    => 'iOFWM03Om1SRTI',
      'local_dir'   => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir'  => '/htdocs/assets'
    ],[
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'fishable-searches',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html/imjur',
    ],[
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'orbs3',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html/imjur',
    ],[
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'orbs4',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html/imjur',
    ],[
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'efx2',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html/imjur',
    ],[
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'efx3',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html/imjur',
    ],[
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'warpspeed',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html/imjur',
    //],[
    //  'ftp_server' => 'files.000webhost.com',
    //  'ftp_user'   => 'orbstools',
    //  'ftp_pass'   => 'Chrome57253!*',
    //  'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
    //  'remote_dir' => '/public_html/imjur',
    ],[
      'ftp_server' => 'files.000webhost.com',
      'ftp_user'   => 'gummier-fish',
      'ftp_pass'   => 'Chrome57253!*',
      'local_dir'  => '/home/scottmcgann4/imjur.000.pe/dist_public',
      'remote_dir' => '/public_html/imjur',
    ],*/
  ];

  function recurse($dir){
    global $remote_dir, $local_dir, $ftp;
    forEach(glob("$dir/{,.}[!.,!..]*", GLOB_MARK|GLOB_BRACE) as $entry){
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

  function push($ftp_server, $ftp_user, $ftp_pass, $local_dir, $remote_dir){
    global $ftp;
    echo "\n\n\n$ftp_server\n$ftp_user\n$ftp_pass\n$local_dir\n$remote_dir\n\n\n";
    $ftp = ftp_connect($ftp_server) or die("Couldn't connect to $ftp_server"); 

    if (@ftp_login($ftp, $ftp_user, $ftp_pass)) {
      echo "Connected as $ftp_user@$ftp_server\n";
    } else {
      echo "Couldn't connect as $ftp_user\n";
    }

    ftp_pasv($ftp, true);

    @ftp_rmdir($ftp, $remote_dir);
    @ftp_mkdir($ftp, $remote_dir);
    recurse($local_dir);
  }

  forEach($servers as $server){
    $ftp_server = $server['ftp_server'];
    $ftp_user = $server['ftp_user'];
    $ftp_pass = $server['ftp_pass'];
    $local_dir = $server['local_dir'];
    $remote_dir = $server['remote_dir'];
    push($ftp_server, $ftp_user, $ftp_pass, $local_dir, $remote_dir);
  }
?>
