var myAudio = document.getElementById("player");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
}

myAudio.onplaying = function () {
  isPlaying = true;
  $(".main-music").addClass("active");
};
myAudio.onpause = function () {
  isPlaying = false;
  $(".main-music").removeClass("active");
};

const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

function wantedView(en, platform) {
  $(".switch-view span").removeClass("active");
  $(en).addClass("active");
  $(".wanted__wrapper__list").addClass("d-none");

  if (platform === "stream") {
    $(".wanted__wrapper__list.stream").removeClass("d-none");
  }
  if (platform === "opensea") {
    $(".wanted__wrapper__list.opensea").removeClass("d-none");
  }
}

function popupTrigger(en, message) {
  $(".popup-wrapper").fadeOut();
  $(".popup-wrapper > .desc").html(message);
  $(".popup-wrapper").fadeIn();
}
function popupTrigger2(en, message) {
  $(".popup-wrapper-mobile").fadeOut();
  $(".popup-wrapper-mobile > .desc").html(message);
  $(".popup-wrapper-mobile").fadeIn();
}

$(".popup-wrapper > span.close").click(function () {
  $(this).parent().fadeOut();
});

$(".popup-wrapper-mobile > span.close").click(function () {
  $(this).parent().fadeOut();
});

const element = document.querySelector("body .web-view main");

element.addEventListener("wheel", (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});

function toggleMenu() {
  $(".mobile-view header .nav-list").toggle();
  $(".mobile-view header").toggleClass("active");
  
}

function mobPageChange(el, page) {
    $(".mobile-view header").removeClass("active");
    $(".mobile-view header .nav-list").hide();
    $('body .mobile-view main section').hide();
  switch (page) {
    case 1:
      $('#gallery-mob').fadeIn().css('display','flex');
      break;
    case 2:
        $('#story-mob').fadeIn().css('display','flex');
      break;
    case 3:
        $('#roadmap-mob').fadeIn().css('display','flex');
      break;
    case 4:
        $('#team-mob').fadeIn().css('display','flex');
      break;
    default:
        $('#home-mob').fadeIn().css('display','flex');
  }
}




for(i=1;i<=50; i++){
  // myImg.src = images[i];

  // TODO: adjust this to whatever you want
  // in this example, use `<a>` that link to another page
  // you can use javascript to show modal/alert too
  var picture = document.createElement('picture');

  var img = document.createElement('img');
  img.src = './assets/image/gallery/stream-nft/'+[i]+'.png';
  picture.appendChild(img);

  document.getElementById('slide-myname-cont-1').appendChild(picture); 

} 

for(i=1;i<=50; i++){
    // myImg.src = images[i];
  
    // TODO: adjust this to whatever you want
    // in this example, use `<a>` that link to another page
    // you can use javascript to show modal/alert too
    var picture = document.createElement('picture');
  
    var img = document.createElement('img');
    img.src = './assets/image/gallery/opensea-nft/'+[i]+'.png';
    picture.appendChild(img);
  
    document.getElementById('slide-myname-cont-2').appendChild(picture); 
  
  } 