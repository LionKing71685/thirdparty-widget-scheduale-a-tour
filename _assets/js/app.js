// Footer Arrows Navigation for questions
var questionIndex = 1;
showQuestion(questionIndex);
// Next/previous controls
function nextQuestion(n) {
  showQuestion(questionIndex += n);
}
// Slider function
function showQuestion(n) {
  var i;
  var slides = document.getElementsByClassName("question");
  if (n > slides.length) {questionIndex = 1}
  if (n < 1) {questionIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[questionIndex-1].style.display = "block";
}

// Onclick for option to add .option-selected to .option
// Needs to work for all 'options', right now only works for #studio
document.getElementById("studio").addEventListener("click", function () {
  if (this.classList.contains('option')) {
    this.classList.add('selected');
    // console.log('whaddup homie');
  }
});

// Jquery to add check mark, needs to be vanilla JS
// Adds check-mark on option selected
$("form .option").click(function () {
  var fieldset = $(this).parent().parent();
  $.each(fieldset.find('.option'), function (index, option) {
    $(option).attr('data-checked', 'false');
    $(option).find('.check, .check-visible').hide();
  });
  $(this).attr('data-checked', 'true');
  $(this).find('.check, .check-visible').show();
});

// Dates
// Need to iterate through dates and counting up. Needs to be configuable
var d = new Date();
var day = d.getDate();
var m = d.getMonth() + 1;
var y = d.getFullYear();
var dateSpan = document.getElementsByClassName("date-span");

for (var i = 0; i < dateSpan.length; i++) {
  var curdate = m +'/'+ day + '/' + y;
  dateSpan[i].innerHTML = curdate;
}


// Modal script
var modal = document.getElementById("calModal");
var popup = document.getElementById("calendar");
var span = document.getElementsByClassName("close")[0];

popup.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Form comment box toggle
var comments = document.getElementById("comments");
var commentDiv = document.getElementById("comment-block");

comments.onclick = function showComments() {
  commentDiv.style.display = "block";
  comments.style.display = "none";
}
