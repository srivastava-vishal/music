
		   
		   
			
			$('.play-icon').on('click',function() {
				toggleSong();
			});
			
			$('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
			
			function toggleSong(){
			 var song = document.querySelector('audio');
        if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
        } else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        }
		}
        function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

//converting time in seconds instead of milliseconds...
			function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    var currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
     }
	 
	 //humne ek function bnaya so that hume ye code baar baar na likhna pde....
	 function addSongNameClickEvent(songObj,position) {
		 var songName = songObj.fileName; // New Variable 
	  var id = '#song' + position;
		$(id).click(function() {
		var audio = document.querySelector('audio');
		var currentSong = audio.src;
		if(currentSong.search(songName) != -1)
		{
		toggleSong();
		}
		else {
		audio.src = songName;
		toggleSong();
		changeCurrentSongDetails(songObj); // Function Call
		}
		});
		}
	 
	 function changeCurrentSongDetails(songObj) {
    // Code goes here
	$('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}



	 //var songName1 = 'Teri Kami Hai';
		//var songName2 = 'khair mangdi';
		 //var songName3 = 'excuses';
		 //var songName4 = 'baarish';
		 //var songName5 ='bulleya';
		
		var songs = [{
        'name': 'Aadat',
        'artist': 'Ninja',
        'album': 'Aadat',
        'duration': '4:06',
       'fileName': 'song1.mp3',
	   'image': 'song1.jpg'
    },
	    {
        'name': 'Flying Car',
        'album': 'Evergreen',
        'artist': 'Ninja',
        'duration': '3:28',
        'fileName': 'song3.mp3',
		'image': 'song3.jpg'
    },
	    {
        'name': 'Back Bone',
        'artist': 'Hardy Sandhu',
        'album': 'Back Bone',
        'duration': '2:55',
        'fileName': 'song2.mp3',
		'image': 'song2.jpg'
    },
	    {
        'name': 'All Black',
        'artist': 'sukh E',
        'album': 'All Black',
        'duration': '3:45',
        'fileName': 'song4.mp3',
		'image': 'song4.jpg'
		
    },
	    {
        'name': 'Gabbroo',
        'artist': 'Jassie Gill',
        'album': 'Gabbroo',
        'duration': '3:29',
        'fileName': 'song5.mp3',
		'image': 'song5.jpg'
		 }]
		 
		 
		 window.onload = function() {
		for(var i =0; i < songList.length;i++) {
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(songList[i]);
        song.find('.song-artist').text(artistList[i]);
        song.find('.song-album').text(albumList[i]); // Added
        song.find('.song-length').text(durationList[i]); // Added
    }
	
		 }
		 //addSongNameClickEvent(fileNames[0],1);
	//addSongNameClickEvent(fileNames[1],2);
	//addSongNameClickEvent(fileNames[2],3);
	//addSongNameClickEvent(fileNames[3],4);
	
	
	
	
	for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1)
		
		}
	
	 
	            //isse jb hum page relode krenge to automatically humare 1st song ki image ajayeggi...
				window.onload = function(songList) {
					 changeCurrentSongDetails(songs[0]);
					 
					//table bnayya paging remove kr dii....
					$('#songs').DataTable({
                      paging: false
		               });
		        
				$('#song1 .song-name').text(songList[0]);
				 $('#song2 .song-name').text(songList[1]);
				 $('#song3 .song-name').text(songList[2]);
				 $('#song4 .song-name').text(songList[3]);
				 $('#song5 .song-name').text(songList[4]);
				 
		setInterval(function() {
		updateCurrentTime();
		},1000);
		}
		
		