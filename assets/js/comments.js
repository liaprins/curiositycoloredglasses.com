// Static comments
// from: https://github.com/eduardoboucas/popcorn/blob/gh-pages/js/main.js
(function ($) {
  var $comments = $('.js-comments');

  $('.js-form').submit(function () {
    var form = this;

    $("#submit").html('Sending...');
    $("#commentloader").removeClass('commentloaderhidden');
    $("#commentloader").addClass('commentloadershown');

    $.ajax({
      type: $(this).attr('method'),
      url:  $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        showModal('Thanks for your comment! It is pending and will appear when approved.');

        $("#submit").html("Post a comment");
        $("#commentloader").removeClass('commentloadershown');
        $("#commentloader").addClass('commentloaderhidden');
        $("#successmessage").removeClass('successmessagehidden');
        $("#successmessage").addClass('successmessageshown');

        $(form)[0].reset();
        grecaptcha.reset();
      },
      error: function (err) {
        console.log(err);
        var ecode = (err.responseJSON || {}).errorCode || "unknown";
        // showModal('Error', 'An error occured.<br>[' + ecode + ']');    // LIA: IF SOMETHING WITH COMMENTS NOT WORKING, UNCOMMENT THIS LINE + COMMENT OUT NEXT LINE TO GET ERROR CODE UPON COMMENT SUBMISSION
        showModal('You must check the box above claiming to be anything but a robot before submitting your comment. Thanks!');
        $("#submit").html("Post a comment");
        $("#commentloader").removeClass('commentloadershown');
        $("#commentloader").addClass('commentloaderhidden');
        $("#successmessage").removeClass('successmessagehidden');
        $("#successmessage").addClass('successmessageshown');
        grecaptcha.reset();
      }
    });
    return false;
  });

  function showModal(message) {
    $('.js-modal-text').html(message);
  }
})(jQuery);
