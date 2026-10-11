//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen.
let music_index = 3;
let artistName = document.querySelector('.container .music-info .artist-name .artist');
let songName = document.querySelector('.container .music-info .song-name .song');
let musicImg = document.querySelector('.container .img-box img');
let playPauseBtn = document.querySelector('.container .play-pause-btn');
let playPauseIcon = document.querySelector('.container .play-pause-btn i');
let currentTime = document.querySelector('.container .waveform-box .current-time');
let totalTime = document.querySelector('.container .waveform-box .total-time');
let nextSongBtn = document.querySelector('.container .btns-box .next-btn');
let prevSongBtn = document.querySelector('.container .btns-box .prev-btn');
let volumeIcon = document.querySelector('.container .volume-box .volume-icon');
let volumeIncreBtn = document.querySelector('.container .volume-box .volume-incre');
let volumeDecreBtn = document.querySelector('.container .volume-box .volume-decre');
let volumeInput = document.querySelector('.container .volume-box input');

 var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#ddd',
            progressColor: '#5467FF', 
            barWidth: 2,
            responsive: true,
            height: 90,
            barRadius: 2
});
wavesurfer.load(`${allmusic[music_index - 1].src}.mp3`);

window.addEventListener('DOMContentLoaded',()=>{
 loadMusic(music_index);  
});


let loadMusic =()=>{
 artistName.innerHTML = `${allmusic[music_index - 1].artist}`;
 songName.innerHTML = `${allmusic[music_index - 1].name}`;
 musicImg.src = `${allmusic[music_index - 1].img}.jpg`;
};

playPauseBtn.addEventListener('click',()=>{
 wavesurfer.playPause();
 if(playPauseBtn.classList.contains('play')){
   playPauseBtn.classList.remove('play');  
   playPauseBtn.classList.add('pause');  
   playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
   musicImg.classList.add('rotate');
 }else{
  playPauseBtn.classList.remove('pause');
  playPauseBtn.classList.add('play');
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';  
   musicImg.classList.remove('rotate');
 }
});

//time calculate
let timecalculator = function(value) {
        let second = Math.floor(value % 60);
        let minute = Math.floor(value / 60);

        if (second < 10) {
                second = "0" + second;
        }
        return `${minute}:${second}`;
}

//get total Time
wavesurfer.on("ready",()=>{
  totalTime.innerHTML = timecalculator(wavesurfer.getDuration());    
});

//Get Current Time
wavesurfer.on("audioprocess",()=>{
  currentTime.innerHTML = timecalculator(wavesurfer.getCurrentTime());    
});

wavesurfer.on('finish', () => {
   playPauseBtn.classList.remove('pause');
   playPauseBtn.classList.add('play');
   playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
   musicImg.classList.remove('rotate');
   wavesurfer.stop();
});

nextSongBtn.addEventListener('click',()=>{
 music_index++;
 music_index > allmusic.length ? music_index = 1 : music_index = music_index;
 loadMusic(music_index);
 wavesurfer.load(`${allmusic[music_index - 1].src}.mp3`);
 playPauseBtn.classList.remove('pause');
 playPauseBtn.classList.add('play');
 playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';  
 musicImg.classList.remove('rotate'); 
 wavesurfer.setTime(0);
 setTimeout(()=>{
     if (playPauseBtn.classList.contains('play')) {
          playPauseBtn.classList.remove('play');
          playPauseBtn.classList.add('pause');
          playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          musicImg.classList.add('rotate');
     }
     wavesurfer.play();
 },2000)
});

prevSongBtn.addEventListener('click',()=>{
 music_index--;
 music_index < 1 ? music_index = allmusic.length : music_index = music_index;
 loadMusic(music_index);
 wavesurfer.load(`${allmusic[music_index - 1].src}.mp3`);
 playPauseBtn.classList.remove('pause');
 playPauseBtn.classList.add('play');
 playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';  
 musicImg.classList.remove('rotate');    
 wavesurfer.setTime(0);
 setTimeout(() => {
   if(playPauseBtn.classList.contains('play')) {
         playPauseBtn.classList.remove('play');
         playPauseBtn.classList.add('pause');
         playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
         musicImg.classList.add('rotate');
    }
   wavesurfer.play();
 }, 2000)
});

//On Volume Input
volumeInput.addEventListener('input',()=>{
   wavesurfer.setVolume(volumeInput.value);
   if(volumeInput.value == 0) {
      volumeIcon.innerHTML = 'volume_off';
   }else{
      volumeIcon.innerHTML = 'volume_up';
   }
});

//Volume Increase
volumeIncreBtn.addEventListener('click',()=>{
   volumeInput.stepUp();  
   wavesurfer.setVolume(volumeInput.value);  
   if(volumeInput.value != 0){
     volumeIcon.innerHTML = 'volume_up';   
   }
});

volumeDecreBtn.addEventListener('click',()=>{
  volumeInput.stepDown();
  wavesurfer.setVolume(volumeInput.value);   
  if(volumeInput.value == 0){
     volumeIcon.innerHTML = 'volume_off';   
  }else{
     volumeIcon.innerHTML = 'volume_up';   
  }
})
