console.log('JS');
$(document).ready(onReady);

function displayHistory(){
    console.log('in displayHistory');
    $.ajax({
        type: 'GET'
        url: '/calculate'
    }).then(function(response){
        console.log('back from GET:', response);
    }).catch(function(err){
        alert('error:', err)
    })//end AJAX
}// end displayHistory

function onReady(){
    console.log('jQuery');
    displayHistory();
}// end onReady
