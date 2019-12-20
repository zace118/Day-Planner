$("#Save").on('click', function(){
    let userInput = $('#inputInfo').val();
    localStorage.setItem('9AM', userInput);
    console.log(localStorage);
});
