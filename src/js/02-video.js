import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).then(function (time) {});

const timeUpdate = function (seconds) {
  let time = seconds.seconds;
  console.log(time);
  localStorage.setItem('videoplayer-current-time', time);
};

player.on('timeupdate', throttle(timeUpdate, 1000));
