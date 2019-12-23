// This function sets variables that grab the sibling textarea of the save button, grab it's value and ID name and puts them as the key and value to local storage
$(".save").on('click', function(){
    console.log($(this).siblings('textarea').attr('id'));
    let userInput = $(this).siblings('textarea').val();
    let userHour = $(this).siblings('textarea').attr('id');
    localStorage.setItem(userHour, userInput);
});

// This function looks crazy, but it concatenates the id to call it, and grabs the value of the corresponding area from localStorage. Woo!
$('textarea').each(function(){
    $('#'+ $(this).attr('id')).val(localStorage.getItem($(this).attr('id')));
})



// Setting variable for current time trying to figure out the color corridinating of the past, present and future time slots.

let presentTime = moment().format('HH:mm');
console.log(presentTime);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// let pastTime = i < presentTime;
// let futureTime = i > presentTime;