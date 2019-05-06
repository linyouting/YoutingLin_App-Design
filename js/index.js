//create an array to hold all random image urls
var photos = [
  'pic/app-01.jpg',
  'pic/app-02.jpg',
  'pic/app-03.jpg',
  'pic/app-04.jpg',
  'pic/app-05.jpg',
  'pic/app-06.jpg',
  'pic/app-07.jpg',
  'pic/app-08.jpg',
];

//when the random is clicked, generate a random number from 1 to 3
//then get the corresponding link from photos
//then set the image src to the corresponding link
$('.btn-random').click(function(){
  var photo_url = photos[Math.floor(Math.random() * photos.length)];
  $('#random-photo').attr('src',photo_url);
});