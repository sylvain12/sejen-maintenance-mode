
// Target date
const target = new Date('Wed Mar 02 2022 00:00:00')
console.log(target)

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = target - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  document.querySelector('[data-days]').textContent = days
  document.querySelector('[data-hour]').textContent = hours
  document.querySelector('[data-minute]').textContent = minutes
  document.querySelector('[data-second]').textContent = seconds


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);
