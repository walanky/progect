
const placeholder = document.querySelector(".peintball");
const ball = document.querySelector(".ball");
const leftPlayer = document.querySelector(".playerLeft");
const rightPlayer = document.querySelector(".playerRight");

const leftPlayerCount = document.querySelector(".leftPerson");
const rightPlayerCount = document.querySelector(".rightPerson");


const placeholderSettings = {
   width: 700,
   height: 420,
}

const score = {
   leftPlayer: 0,
   rightPlayer: 0,
}
const ballSettings = {
   radius: 15,
   background: "#fff",
   speed: 10,
   cords: {
      y: placeholderSettings.height / 2,
      x: placeholderSettings.width / 2,
   }
}

const DefaultPlayerSetting = {
   color: "#fff",
   width: 5,
   height: 50,
   speed: 10,
}
const leftPlayerSetting = {
   color: DefaultPlayerSetting.color,
   width: DefaultPlayerSetting.width,
   height: DefaultPlayerSetting.height,
   speed: DefaultPlayerSetting.speed,

   position: {
      y: placeholderSettings.height / 2,
      x: 11,
   }
}

const rightPlayerSetting = {
   color: DefaultPlayerSetting.color,
   width: DefaultPlayerSetting.width,
   height: DefaultPlayerSetting.height,
   speed: DefaultPlayerSetting.speed,
   position: {
      y: placeholderSettings.height / 2,
      x: placeholderSettings.width - 12,
   }
}
leftPlayer.style.background = leftPlayerSetting.color;
leftPlayer.style.width = leftPlayerSetting.width + "px";
leftPlayer.style.height = leftPlayerSetting.height + "px";
leftPlayer.style.top = leftPlayerSetting.position.y + "px";
leftPlayer.style.left = leftPlayerSetting.position.x + "px";
rightPlayer.style.background = rightPlayerSetting.color;
rightPlayer.style.width = rightPlayerSetting.width + "px";
rightPlayer.style.height = rightPlayerSetting.height + "px";
rightPlayer.style.top = rightPlayerSetting.position.y + "px";
rightPlayer.style.left = rightPlayerSetting.position.x + "px";
console.log(rightPlayer.style.height);
placeholder.style.width = placeholderSettings.width + "px";
placeholder.style.height = placeholderSettings.height + "px";
ball.style.padding = ballSettings.radius + "px";
ball.style.background = ballSettings.background;
ball.style.top = ballSettings.cords.y + "px";
ball.style.left = ballSettings.cords.x + "px";

const Play = () => {
   setTimeout(Play, 20);
   BallMoving();
}

document.addEventListener('keydown', function (event) {
   event.preventDefault();
   btn = event.code;
   if (btn === "KeyW" && leftPlayerSetting.position.y > 0) {
      leftPlayerSetting.position.y = leftPlayerSetting.position.y - leftPlayerSetting.speed
      leftPlayer.style.top = leftPlayerSetting.position.y + "px";
   }
   else if (btn === "KeyS" && leftPlayerSetting.position.y + leftPlayerSetting.height < placeholderSettings.height) {
      leftPlayerSetting.position.y = leftPlayerSetting.position.y + leftPlayerSetting.speed
      leftPlayer.style.top = leftPlayerSetting.position.y + "px";
      console.log(leftPlayer.style.top);
   }
   else if (btn === "ArrowUp" && rightPlayerSetting.position.y > 0) {
      rightPlayerSetting.position.y = rightPlayerSetting.position.y - rightPlayerSetting.speed
      rightPlayer.style.top = rightPlayerSetting.position.y + "px";

   }
   else if (btn === "ArrowDown" && rightPlayerSetting.position.y + rightPlayerSetting.height < placeholderSettings.height) {
      rightPlayerSetting.position.y = rightPlayerSetting.position.y + rightPlayerSetting.speed
      rightPlayer.style.top = rightPlayerSetting.position.y + "px";
   }
});


function BallRandomVector() {
   let maxSpeed = ballSettings.speed;
   let minSpeed = ballSettings.speed * -1;
   let VectorX = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
   let VectorY = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
   if (VectorX === 0 || VectorY === 0) {
      BallRandomVector()
   }
   return { VectorX, VectorY }
}

function BallMoving() {
   let cordX, cordY;
   if (!ballSettings.vector) {
      ballSettings.vector = BallRandomVector();
   }

   cordX = ballSettings.cords.x + ballSettings.vector.VectorX;
   cordY = ballSettings.cords.y + ballSettings.vector.VectorY;

   ballSettings.cords = {
      x: cordX,
      y: cordY,
   }
   goalBall(cordX)
   reboundBall(cordX, cordY);
   cheakHitBall();

   ball.style.top = cordY + ballSettings.vector.VectorY + "px";
   ball.style.left = cordX + ballSettings.vector.VectorX + "px";
}

function reboundBall(cordX, cordY) {
   while (cordY <= 0 || cordY >= placeholderSettings.height) {
      ballSettings.vector = BallRandomVector();
      cordX = ballSettings.cords.x + ballSettings.vector.VectorX;
      cordY = ballSettings.cords.y + ballSettings.vector.VectorY;
   }
   return { cordX, cordY }
}

function reboundBallForPlayer() {
   ballSettings.vector.VectorX *= -1;
}

function goalBall(cordX) {
   if (cordX < 0) {
      score.rightPlayer += 1
      rightPlayerCount.innerHTML = score.rightPlayer;

      setDefaultBall();
   } else if (cordX >= placeholderSettings.width) {
      score.leftPlayer += 1;
      leftPlayerCount.innerHTML = score.leftPlayer;

      setDefaultBall();

   }
}

function setDefaultBall() {
   ballSettings.vector = BallRandomVector();

   ballSettings.cords = {
      y: placeholderSettings.height / 2,
      x: placeholderSettings.width / 2,
   }
   ball.style.top = ballSettings.cords.y + "px";
   ball.style.left = ballSettings.cords.x + "px";
}
function cheakHitBall() {
   // Левый
   if (ballSettings.cords.x <= leftPlayerSetting.position.x &&

      ballSettings.cords.y >= leftPlayerSetting.position.y &&
      ballSettings.cords.y <= leftPlayerSetting.position.y + leftPlayerSetting.height) {
      reboundBallForPlayer();
      // Задал  право для читаемости
   } else if (ballSettings.cords.x + ballSettings.radius * 2 >= rightPlayerSetting.position.x &&
      ballSettings.cords.y >= rightPlayerSetting.position.y &&
      ballSettings.cords.y <= rightPlayerSetting.position.y + rightPlayerSetting.height) {
      reboundBallForPlayer();
   }
}
// Попап 
function causePopup(btnSelector, popupSelector) {
   const btn = document.querySelector(btnSelector);
   const popup = document.querySelector(popupSelector);

   btn.addEventListener("click", (e) => {
      let target = e.target;
      if (!target) return;

      popup.style.display = "flex";
   })
   popup.addEventListener("click", (e) => {
      let target = e.target;
      if (!target) return;
      if (target.classList.contains("popup")) {
         popup.style.display = "none";
      }
   })
}
causePopup(".settings", ".SettingsPopup");

const tabs = (btnHeaderSelector, btnSelect, tabsBodySelector, tabSelector) => {
   const btnHeader = document.querySelector(btnHeaderSelector);
   const tabsBody = document.querySelector(tabsBodySelector);

   btnHeader.addEventListener("click", (e) => {
      let target = e.target;
      if (!target.classList.contains(btnSelect)) return;
      let btns = btnHeader.querySelectorAll("." + btnSelect);
      btns.forEach((item) => {
         item.classList.remove("active");
      })
      target.classList.add("active");
      let tabIndex = getIndexItem(btns, target);

      tabsBody.querySelectorAll(tabSelector).forEach((item, index) => {
         item.style.display = "none";
         if (index === tabIndex) {
            item.style.display = "block";

         }
      })
   });
   function getIndexItem(array, target) {
      let index;
      array.forEach((item, i) => {
         if (item === target) {
            index = i;
         }
      })
      return index;
   }
}
Play();
tabs(".settings__header", "settings__tab-btn", ".settings__btn-header", ".settings__form");