$(document).ready(onReady);

let calculation = {
    input1: '',
    input2: '',
    operation: ''
}

function calculationToServer(){
    console.log('in calculationToServer');
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: calculation
    }).then(function(response){
        console.log('back from POST:', response);
        displayHistory();
    }).catch(function(err){
        alert('error:', err)
    })//end AJAX
}// end calculationToServer

function clearCalculation(){
    console.log('placeholder');
}// end clearCalculation

function displayHistory(){
    console.log('in displayHistory');
    $.ajax({
        type: 'GET',
        url: '/calculate'
    }).then(function(response){
        console.log('back from GET:', response);
        // clear previous history from DOM
        // append response from server
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
    $('#equalButton').on('click', submitCalculation);
    $('#clearButton').on('click', clearCalculation);
    // dynamically created click handlers
}// end onReady

function updateOperation(){
    // update operation in calculation object
    calculation.operation = $(this).text();
}// end updateOperation

function submitCalculation(){
    // add input information to calculation object
    calculation.input1 = $('#input1').val();
    calculation.input2 = $('#input2').val();
    // if any fields are empty, disallow calculation
    if (calculation.input1 === '' || calculation.input2 === '' || calculation.operation === ''){
        alert('Please complete both input fields and select an operation.')
    }// end if
    else {
        calculationToServer();
        $('#input1').val('');
        $('#input2').val('');
    }
}// end submitCalculation