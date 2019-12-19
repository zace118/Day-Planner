let userInput = $('#input').val();


$("#Save").click(function(){
    localStorage.setItem('userInputKey', userInput.val());
});

