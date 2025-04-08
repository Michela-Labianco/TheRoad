document.querySelectorAll('.nav-link, .item, .form-btn')
.forEach(control => { //forEach takes one argument
    control.addEventListener('click', (e) => { //e = event object
        e.preventDefault()
    })
})

//variable where we store the container
const container = document.querySelector('.container');

document.querySelector('.open-navbar-icon').addEventListener('click', () =>{
    container.classList.add('change');
});
document.querySelector('.close-navbar-icon').addEventListener('click', () =>{
    container.classList.remove('change');
});

// array of colors
const colors = ["#f08080","#7fffd4","#64aced","#ffa07a","#47a8a8"];

let i = 0;

Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
    // define background color, for that we use style.CSSText properties
    item.style.cssText = `background-color: ${colors[i++]}`; //ES6 template strings
})

// to tranform it into an array we use array.from method
// which it creates a new, shallow-copied Array instance 
// from an iterable or array-like object

Array.from(document.querySelectorAll('.navigation-btn')).forEach((item) => {
    //forEach is used to loop through the items and to attach to them.
    item.onclick =() => {
        //to assign to the card 
        //and in order to select the card we use DOM navigation
        //item refers to the navigation button
        //Then we have to move one level up using the parentElement property.
        // Then we need to move again and we will finally reach the card
        item.parentElement.parentElement.classList.toggle('change');
        //toggle add and remove 
    }
})