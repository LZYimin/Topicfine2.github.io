





var layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer1.style.width = (100 + scroll/6) + '%';
});

var layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer2.style.width = (100 + scroll/6) + '%';
  layer2.style.left = scroll/90 + '%';
});

var text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer2.style.width = (100 + scroll/6) + '%';
  text.style.top =  - scroll/6 + '%';
});







var layer3 = document.getElementById('layer3')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer3.style.width = (100 + scroll/6) + '%';
});

var layer4 = document.getElementById('layer4')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer4.style.width = (100 + scroll/6) + '%';
  layer4.style.left = scroll/90 + '%';
});

var text2 = document.getElementById('text2')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer4.style.width = (100 + scroll/6) + '%';
  text2.style.top =  - scroll/5 + '%';
});






var layer5 = document.getElementById('layer5')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer5.style.width = (100 + scroll/6) + '%';
});

var layer6 = document.getElementById('layer6')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer6.style.width = (100 + scroll/6) + '%';
  layer6.style.left = scroll/90 + '%';
});

var text3 = document.getElementById('text3')
scroll = window.pageYOffset;
document.addEventListener('scroll',function 
(e){
  var offset = window.pageYOffset;
  scroll = offset;
  layer6.style.width = (100 + scroll/6) + '%';
  text3.style.top =  - scroll/4 + '%';
});