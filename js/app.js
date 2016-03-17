$(document).ready(function () {

$('.display-container').prepend('<h1><span class="list-title">Weekly Grocery List</span></h1>');
   
function displayVals2() {
  var singleValuesQ = $( "#quantity" ).val();
  $( "b" ).html( "" + singleValuesQ );
}

function displayVals() {
  var singleValuesC = $( "#category" ).val();
  $( "em" ).html( "" + singleValuesC );
}
 
$( "select" ).change( displayVals );
displayVals();

$( "select" ).change( displayVals2 );
displayVals2();

$('#item01').click(function() {
  if ($(this).is(':checked')) {
    $(this).siblings('.item').html('checked');
  } else {
    $(this).siblings('.item').html('not checked');
  }
});

// Function to get input value.
$('#create-list').click(function() {
var text_value = $("#new-list-name").val();
if(text_value=='') {
alert("Enter A New List Name");
}else{
$('.display-container .list-title').replaceWith(text_value );

// alert(text_value);
}
});

$('#btnName').click(function(){
    var text3 = $('#inputName').val();
    var text2 = $('#inputName2').val();
    $('.item09').replaceWith(text3);
    $('.quantity-new').replaceWith(text2);
    
});

// remove item from list
$('.remove').on('click', function(event){
  $('.row4').remove();
});


});

// '<h1><span class="list-title">$("#new-list-name")</span></h1>'