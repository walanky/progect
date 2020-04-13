// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
img.onclick = function(){
    modal.style.display = "block";
     $('.popup-video__video')[0].play();
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
  $('.popup-video__video')[0].pause();
}