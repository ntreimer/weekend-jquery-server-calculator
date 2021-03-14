$(document).ready(onReady);

let calculation = {
    input1: '',
    input2: '',
    operation: ''
}

function displayHistory(){
    console.log('in displayHistory');
    $.ajax({
        type: 'GET',
        url: '/calculate'
    }).then(function(response){
        console.log('back from GET:', response);
        // clear previous history from DOM
        // append response
    }).catch(function(err){
        alert('error:', err)
    })//end AJAX
}// end displayHistory

function onReady(){
    // on page load
    displayHistory();
    // click handlers
    $('#addButton').on('click', updateOperation);
    $('#subtractButton').on('click', updateOperation);
    $('#multiplyButton').on('click', updateOperation);
    $('#divideButton').on('click', updateOperation);
}// end onReady

function updateOperation(){
    // update operation in calculation object
    calculation.operation = $(this).text();
}