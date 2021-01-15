$(document).ready(function() {
  for (var i = 2; i <= 5; i++) {
    $(`#step${i}`).hide();
  }
});

$(document).on('click', '.js-step', function(e) {
  var nextStep = $(this).attr('data-show');
  var currentStep = $(this).parents('.signup-box__step');

  $(`#${currentStep.attr('id')}-label`).removeClass('step--current');
  currentStep.hide();
  $(`${nextStep}-label`).addClass('step--current');
  $(nextStep).show();
  e.preventDefault();
});
