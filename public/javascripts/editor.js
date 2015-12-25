$(document).ready(function() {
  var prompt = "Think about the things that are important to you. Perhaps you care about creativity, family relationships, your career, or having a sense of humor. Pick two or three of these values and write a few sentences about why they are important to you. You have fifteen minutes. \n \n";
  if(localStorage.writing){
    prompt = localStorage.writing;
  }
  $("#textarea").val(prompt);
  $("#textarea").focus();
  $("#textarea").on('input',function(element){
    var writing = $(this).val();
    localStorage.writing = writing;
  });
});
