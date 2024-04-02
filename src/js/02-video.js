import Player from '@vimeo/player';
const iframe = document.querySelector("iframe");
console.log("here we are", iframe);
const player = new Player(iframe);
console.log(player);
import throttle from 'lodash.throttle';
const localStorageKey = "videoplayer-current-time";

const onPlay = function (timeupdate) {
//  console.log("timeupdate", timeupdate);    
    console.log('played the video!');
    console.log("seconds", (Object.values(timeupdate))[0]);
    localStorage.setItem(localStorageKey, (Object.values(timeupdate))[0]);
    console.log(localStorage.getItem(localStorageKey));
};
    

player.getVideoTitle().then(function (title) {
        console.log('title:', title);
    });
player.setVolume(0.5);

player.on('timeupdate', throttle(onPlay, 1000));  


player.setCurrentTime(localStorage.getItem(localStorageKey) ? localStorage.getItem(localStorageKey) : 0).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});

    
// 



