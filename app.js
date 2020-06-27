'use strict'



let today = new Date();
let formatDate = today.toLocaleDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden messahe' );

// This is a single-line comment.

/* Here's a
multi-line
comment. */

// console.log('This code is no longer active')

