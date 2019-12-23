$(".save").on('click', function(){
    console.log($(this).siblings('textarea').attr('id'));
    let userInput = $(this).siblings('textarea').val();
    let userHour = $(this).siblings('textarea').attr('id');
    localStorage.setItem(userHour, userInput);
});

$('textarea').each(function(){
    $('#'+ $(this).attr('id')).val(localStorage.getItem($(this).attr('id')));
})