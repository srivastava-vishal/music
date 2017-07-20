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
					var currentSongNumber = 1;
					var willLoop = 0;
					var willShuffle = 0; // will use this soon

					function setvolume(){
						var song =document.querySelector('audio');
						song.volume =slider.value/100;
						
					}
					
					//Toggle function is added
			function toggleSong() {
			var song = document.querySelector('audio');
			if(song.paused == true) {
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
			}
			else {
			console.log('Pausing');
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();
			}
			}
			
			
	
	//Time format changes
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
			
			 function updateTimer(){
		var song = document.querySelector('audio');
		var ct = song.currentTime;
		var td = song.duration;
		var percentage = (ct/td)*100;
		$('.progress-filled').css('width', percentage+ "%");
	}
			
			function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album);
	
}

   
     function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
     }
	 
	
			
				
	//current time updation
				function updateCurrentTime() {
				var song = document.querySelector('audio');
				//console.log(song.currentTime);
				//console.log(song.duration);
				var currentTime =Math.floor(song.currentTime);
				currentTime = fancyTimeFormat(currentTime);
				var duration = Math.floor(song.duration);
				duration = fancyTimeFormat(duration);
				$('.time-elapsed').text(currentTime);
				$('.song-duration').text(duration);
				}
				
				function addSongNameClickEvent(songObj,position) {
					var id ="#song" + position;
    var songName = songObj.fileName; 
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
			
			 function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}
	
				
				window.onload = function() {
					
			  changeCurrentSongDetails(songs[0]);
				updateCurrentTime();
				setInterval(function(){
				updateCurrentTime();
				updateTimer();
				},1000);
				//var songName1 = 'Tamma Song';
				//var songName2 = 'Humma Song';
				//var songName3 = 'Nashe Si Chadh Gayi';
				//var songName4 = 'The Breakup Song';
				// declaration of array
				// var songList = ['love me like you do','Carnage feat','Let me love you ','Dont let me down']; 
				 // var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
				 // var artistList = ['neha', 'monali', 'neha', 'neha']; 
				 // var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
					//var durationList = ['2:56','3:15','2:34','2:29'];
					

				 for(var i =0; i < songs.length;i++) {
					var Obj = songs[i];
					var name = '#song' + (i+1);
					var song = $(name);
					song.find('.song-name').text(Obj.name);
					song.find('.song-artist').text(Obj.artist);
					song.find('.song-album').text(Obj.album);
					song.find('.song-length').text(Obj.duration);
					addSongNameClickEvent(Obj,i+1)
				}
				
					//addSongNameClickEvent(fileNames[0],1);
					//addSongNameClickEvent(fileNames[1],2);
					//addSongNameClickEvent(fileNames[2],3);
					//addSongNameClickEvent(fileNames[3],4);
					
					//for (var i = 0; i < fileNames.length ; i++) {
						//addSongNameClickEvent(fileNames[i],i)
					//} 
					$('#songs').DataTable({
        paging: false
    });
					
				}
				
		
	
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
	
	//click function added
    $('.play-icon').on('click', function() {
       toggleSong();
    });
	
	//keypress function added
    $('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});

      
        changeCurrentSongDetails(songs[0]); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    
		  $('.fa-repeat').on('click',function() {
			$('.fa-repeat').toggleClass('disabled')
			willLoop = 1 - willLoop;
		});

		$('.fa-random').on('click',function() {
			$('.fa-random').toggleClass('disabled')
			willShuffle = 1 - willShuffle;
		});
		
		$('#slider').on('mousemove',function(){
			setvolume();
		});

$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})