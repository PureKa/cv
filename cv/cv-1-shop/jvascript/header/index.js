let index = 0;
showSld();

function showSld(){
    let i;
    var show = document.getElementsByClassName('auto-show-header-1');
    var showlength = show.length;
    for(i=0;i<showlength;i++){
        show[i].style.display = "none";
    }
    index++;
    if(index>showlength){
        index=1;
    }
    show[index-1].style.display = 'block'
    setTimeout(showSld,2500)
}

// slider show

let slideIndex = 4;
showSlides(slideIndex);

function cong(n) {
  showSlides(slideIndex += n);
}
function tru(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-show");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// contact


function submit(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var coment = document.getElementById('comment').value;

  var rgemail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
  var bttq = /^[^\d+]*[\d+]{0}[^\d+]*$/;


  if(name==''){
    alert('bạn chưa nhập tên')
  }else if(name===bttq){
    alert('tên không hợp lệ')
  }else if(email==rgemail){
    alert('email khoonng hợp lệ')
  }else if(subject==''){
    alert('subject không được để trống');
  }else if(coment==''){
    alert('hãy nhập comnet massege')
  }
  
}


