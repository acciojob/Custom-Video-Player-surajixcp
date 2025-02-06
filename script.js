const video = document.querySelector('.player__video');
const toggle = document.querySelector('.player__button.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeControl = document.querySelector('.player__volume');
const speedControl = document.querySelector('.player__speed');
const skipButtons = document.querySelectorAll('.player__button.skip');
const slider = document.querySelector('.player__slider');

function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateVolume() {
    video.volume = volumeControl.value;
}

function updateSpeed() {
    video.playbackRate = speedControl.value;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);
skipButtons.forEach(button => button.addEventListener('click', skip));
volumeControl.addEventListener('input', updateVolume);
speedControl.addEventListener('input', updateSpeed);
