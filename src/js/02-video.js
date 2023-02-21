import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const settings = {
  "videoplayer-current-time": 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};
 
// let time = 0;
const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).then(function (time) {
  // seconds = the actual time that the player seeked to
});


console.log(iframe);
player.on('timeupdate', function (seconds) {
    // console.log('time:', seconds);
//    let time;
    time = seconds.seconds;
    console.log(time);
    localStorage.setItem('videoplayer-current-time', time);
  //   console.log('played the video!');
});
 console.log(time);




 
// player.getCurrentTime().then(function (seconds) {
//      console.log('title:', seconds);
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });




// player.on('timeupdate', function (e) {
// localStorage.setItem("videoplayer-current-time", e.getCurrentTime().then);
// //     "videoplayer-current-time"
// //   console.log(player.getCurrentTime().then);
// });
// const theme = localStorage.getItem('videoplayer-current-time');
// console.log(theme);