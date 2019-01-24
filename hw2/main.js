// setTimeout(function() {
// document.getElementById('primary-heading')
// .innerText = "BAZ";

// }, 5000);
function incrementNumber() {
  var el =  document.getElementById('counter');
var currentNumber = parseInt(el.innerText);
var incrementedNumber = currentNumber + 1;
el.innerText = incrementedNumber;

}
incrementNumber();



// document.querySelector('#changeText').addEventListener('click', function() {
//     var els = document.querySelectorAll('.text');
//     for (var index = 0; index < els.length; index++) {
//         var el = els[index];
//            el.innerHTML = '<del>Bar<del>';
//            el.style.background = 'blue';
//            el.style.color = 'red';
//            if(index == els.length -1){
//                el.style.display = 'none';
//            }
//     }
 
// });

$('#changeText').click(function() {
var els = $('.text');
els.html('<del>Bar<del>');
els.css({
    background: 'blue',
    color: 'red'

})
$('.text').last().hide(3000, function(){
    console.log('yopcik');
});
});