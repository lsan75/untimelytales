<?php

/*

	- band id = 206624199
	- api key = skettingrhroditautaknattaybogi
	
	clear display with parm : &debug
	
	0. get band_id
	http://api.bandcamp.com/api/url/1/info?key=skettingrhroditautaknattaybogi&url=http://burzinski.bandcamp.com
	
	1. get band id info
	http://api.bandcamp.com/api/band/3/info?key=skettingrhroditautaknattaybogi&band_id=206624199
	
	2. get album id
	http://api.bandcamp.com/api/url/1/info?key=skettingrhroditautaknattaybogi&url=http://burzinski.bandcamp.com/album/untimely-tales
	
		album_id = 1640359820
		
	3. get album detail
	http://api.bandcamp.com/api/album/2/info?key=skettingrhroditautaknattaybogi&album_id=1640359820	
		
*/

	$albumUrl = 'http://api.bandcamp.com/api/album/2/info?key=skettingrhroditautaknattaybogi&album_id=1640359820';

	$ch = curl_init(); 

	curl_setopt($ch, CURLOPT_URL, $albumUrl);
  	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    		'Content-Type: application/json'
      	)
  	);
  	
  	$data = curl_exec($ch);

	if( $fic = fopen('js/albumdata.js','w+') ){		
		fwrite($fic, 'var albumData = '.$data.';');
		fclose($fic);	
	}
  	
  	curl_close($ch);

?>
