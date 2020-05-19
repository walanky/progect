"use strict";

let userSettings = {
	times: document.getElementById("timer"),
	playBtn: document.getElementById("play"),
	pause: "image/svg/play.svg",
	play: "image/svg/pause.svg",
};

setEventListener(getTimersHTML());
setTimes(document.getElementsByClassName("timers__btn")[1].getAttribute('data-time') * 1000 * 60);

// =======================
function setTimes(time){
	let timer = document.getElementById("timer");
	timer.innerHTML = getNormalizeTime(time);
	timer.setAttribute("data-timer",time);
}
function getNormalizeTime(time){
	let min = Math.floor((time/1000/60) << 0);
	let sec = Math.floor((time/1000) % 60);
	return min + ":" + sec;
}
// =======================

function getTimersHTML(){
	let timers = document.getElementsByClassName("timers__btn");
	return timers;
};

function getTime(timer,index){
	return timer[index].getAttribute('data-time');
}

function setEventListener(array){
	for(let index = 0; index < array.length; index++){
		array[index].addEventListener("click",() => changeActiveBtn(array,array[index]));
	}
}

function changeActiveBtn(array,activeBtn){
	destroyActiveBtn(array);
	setActiveBtn(activeBtn); 
	setUserSettings("times",activeBtn.getAttribute("data-time"));
	setTimes(activeBtn.getAttribute("data-time") * 1000 * 60);

}

function setActiveBtn(activeBtn){
	activeBtn.classList.add("active");
}

function destroyActiveBtn(array){
	for(let index = 0; index < array.length; index++){
			array[index].classList.remove("active")
	}
}
function setUserSettings(name,value){
	if(userSettings[name]){
		userSettings[name] = value;
		} else {
			return false
		}
}


// РАБОТА С КНОПКОЙ

userSettings.playBtn.addEventListener("click",() => PlayVideo());


function checkPlayVideo(){
	if(userSettings.playBtn.getAttribute("data-checkedPlay") === "true"){
		return true;
	}
	return false;
}

function setRadioVideo(){
	if(checkPlayVideo()){
			startVideo();
			TimerSecondary();
			
	} else{
			stopVideo();
	}
}
function TimerSecondary(){
	let timer = document.getElementById("timer")
	if (timer.getAttribute("data-timer") <= 0){
		video.pause();
		stopVideo();
		setTimes(document.getElementsByClassName("timers__btn active")[0].getAttribute("data-time") * 1000 * 60);
		return;
	} else if (userSettings.playBtn.getAttribute("data-checkedPlay") === "false") {
		var timeout = setTimeout(() => TimerSecondary(), 1000);
		timer.setAttribute("data-timer", timer.getAttribute("data-timer") - 1000);
		setTimes(timer.getAttribute("data-timer"));
	} else {
		clearTimeout(timeout);
		
	}
}
function stopVideo(){
	userSettings.playBtn.setAttribute("src", userSettings.pause);
	userSettings.playBtn.setAttribute("data-checkedPlay", "true");
}
function startVideo(){
	userSettings.playBtn.setAttribute("src", userSettings.play);
	userSettings.playBtn.setAttribute("data-checkedPlay", "false");
}
function PlayVideo(){
	let video = document.getElementById("video");
	if(checkPlayVideo()){
		video.play();
	} else {
		video.pause()
	}
	setRadioVideo()
}

// Смена музыки
SetWeatherListener();
function SetWeatherListener(){
	let weather = document.getElementsByClassName("weather__item");
	for(let index = 0 ;index < weather.length; index++){
		weather[index].addEventListener('click', () => setVideo(weather[index]))
	}
}

function setVideo(name){
	name = name.getAttribute("data-name");
	let video = document.getElementById("video");
	switch (name){
		case 'sunny':
				video.setAttribute("src", "videos/sunny.mp4");
				 break;
		case "rain":
				video.setAttribute("src", "videos/rain.mp4");
				 break;
		default:
			alert("Ничего нет");
	}
	userSettings.playBtn.setAttribute("data-checkedPlay", false); 
	setRadioVideo();
	video.pause()
	// setTimes(document.getElementsByClassName("timers__btn active")[0].getAttribute("data-time") * 1000 * 60);
}