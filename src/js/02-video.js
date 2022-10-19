import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timePlay, 1000));

function timePlay({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds)
};

const writing = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(writing);

