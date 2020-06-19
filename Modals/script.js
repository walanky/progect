/* 

 МОДАЛЬНОЕ ОКНО
   1) Вставить модально окно там где вы бы хотели чтобы оно появлялось
   2) Добавить в css 'display: none' модальному окну
   3) дать ему и modalSelector одинаковвый класс и айди (в случае повторения возьмется только самый первый блок)
  
ТАЙМЕР
   1)  Вставить таймер в нужное место
   2) дать ему и timeParentSelector одинаковвый класс и айди (в случае повторения возьмется только самый первый блок)
ЦИФРЫ У ТАЙМЕРА
   1)в блок с таймером добавь еще один блок(span,p,div (Это не играет роли))
   2) дать ему и timeItemSelector одинаковвый класс и айди (в случае повторения возьмется только самый первый блок)

*/

// Настройки
let settings = {
   modalsSelector: '#modal', // Модальное окно 
   timeParentSelector: '#modalTimer', // Блок с таймером
   timeItemSelector: '#modalTimer__time', //  Блок в котором будет показываться время

   MaxTimeExpectations: 10, // Максимальное время через которое покажеться модальное окно
   MinTimeExpectations: 5, // Минимальное время через которое покажеться модальное окно
   BrowserTimeOut: ['Chrome 83', 'IE 11'], // Браузера в котором будет таймер
   HideTimerBlock: true, // Скрывать ли timeParent(блок с таймером), после конца таймера (true/false)
}




// ========= Узнать браузер ==========
navigator.sayswho = (function () {
   var ua = navigator.userAgent, tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
   if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE ' + (tem[1] || '');
   }
   if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');
   }
   M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
   if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
   return M.join(' ');
})();

function browser() {
   var ua = navigator.userAgent;

   if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
   if (ua.search(/Firefox/) > 0) return 'Firefox';
   if (ua.search(/Opera/) > 0) return 'Opera';
   if (ua.search(/Chrome/) > 0) return 'Google Chrome';
   if (ua.search(/Safari/) > 0) return 'Safari';
   if (ua.search(/Konqueror/) > 0) return 'Konqueror';
   if (ua.search(/Iceweasel/) > 0) return 'Debian Iceweasel';
   if (ua.search(/SeaMonkey/) > 0) return 'SeaMonkey';

   // Браузеров очень много, все вписывать смысле нет, Gecko почти везде встречается
   if (ua.search(/Gecko/) > 0) return 'Gecko';

   // а может это вообще поисковый робот
   return 'adsad';
}
alert(browser);
// ======================

// Наше модальное окно 
let modals = document.querySelector(settings.modalsSelector);
// Таймер
let timerParent = document.querySelector(settings.timeParentSelector);
let timerBlock = timerParent.querySelector(settings.timeItemSelector);

// ========Время показана======
let time = 0;
if (settings.BrowserTimeOut.indexOf(navigator.sayswho) != -1) {
   time = Math.floor(Math.random() * (settings.MaxTimeExpectations - settings.MinTimeExpectations)) + settings.MinTimeExpectations;
}

// Счетчик таймера
let timeCount = time - 1;

let tm = setInterval(function () {
   timerBlock.innerHTML = timeCount;
   timeCount--;
}, 1000);

// Функция показа
setTimeout(function () {
   // останавливаем таймер
   clearInterval(tm);
   // Удаления timerParent
   if (settings.HideTimerBlock) {
      timerParent.style.display = 'none';
   }
   // Показ модального окна
   modals.style.display = 'block';
}, time * 1000)
