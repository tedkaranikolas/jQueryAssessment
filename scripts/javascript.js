// X --- When the page loads, have a button on the DOM that says 'generate'.

// X --- Upon clicking on that button, append a new container onto the DOM.

// X --- That container should have two buttons, one that reads 'delete', the other that reads 'change'.
//
// X --- Additionally, there should be text that provides a number.
//
// X --- The number should be the number of times the 'generate row' button has been clicked.
//
// The delete button should delete JUST the container that the button is in.
//
// The change button should change the background-color of the container to red. The default or 'normal' state of the background-color should be yellow.
//
//   Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.
var count = 0;

$(document).ready(function() {

//console.log("Hello from Jquery....");

  $('#generate').on('click', function(){
    count ++;
    console.log(count);

    var newDiv = document.createElement('div');
    newDiv.className = 'container';

    var button1 = document.createElement('button');
    button1.textContent = "Delete";
    button1.className = "delete";
    // $(this).attr('id', 'remove')
    // $('.delete').on('click', function(){
    //   this.remove();
    // });

    var button2 = document.createElement('button');
    button2.textContent = "Change";
    button2.className = "change";
    // $(this).on('click', function() {
    // $('button').toggleClass("background-color", "red");
    // });

    newDiv.appendChild(button1);
    newDiv.appendChild(button2);
    $('body').append(newDiv);
    $('#clickCounter').append(count);

    $('change').on('click', function(){
      $('div').toggleClass("background-color", "red");
    });

    //document.getElementById("clicks").innerHTML = clicks;

    });

});


//console.log("Hello");
