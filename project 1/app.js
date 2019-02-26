const ul = document.querySelector('#list');

// listening click from ul
ul.addEventListener('click', function (e) {
  //save target click elemet to li
  const li = e.target;
  //change li class done or remove it. adding class change color and line-through it
  li.classList.toggle("done");
  // block browser to redirected
  e.preventDefault();
});

// listening click from ul
ul.addEventListener('click', (e) => {
  // terget element parent contains this class, remove it
  if (e.target.parentElement.classList.contains('list-group-item')) {
    e.target.parentElement.remove();
  }
  // block browser to redirected 
  e.preventDefault();
});
//query form and listen for submit it
document.querySelector('form').addEventListener('submit', (e) => {
  // save selected tag to input
  const input = document.querySelector('input');

  // if input value is empty
  if (input.value === '') {
    //so message, first para is message and second is class
    showMessage('Field is empty!', 'error');
  } else {
    //createElement li and save it li
    const li = document.createElement('li');
    //add class to li
    li.className = 'list-group-item';
    // create icon element (fontawesome)
    const i = document.createElement('i');
    //add classname to i fontAwesome class
    i.className += 'far fa-window-close fa-2x pr-3 ';
    // add i to li
    li.appendChild(i);
    //add li and create todo textnode
    li.appendChild(document.createTextNode(input.value));
    // add li to ul
    ul.appendChild(li);
    //set input value empty
    input.value = '';
    //show message that todo is added to the list
    //message, and classname
    showMessage('ToDo added!', 'success');
  }
  // block browser to redirected
  e.preventDefault();

});

// meassage function, paras message and classname
function showMessage(message, className) {
  //call message function
  this.clearMessage();
  //query card and save it card variable
  const card = document.querySelector('.card');
  //select only h1 and save it h1
  const h1 = document.querySelector('h1');
  //create element h3 and save it
  const h3 = document.createElement('h3');
  //when function called save classname to h3
  h3.className = className;
  //when function called save message to h3
  h3.innerHTML = message;
  //card use insertbefore method. h3 is placed before h1
  card.insertBefore(h3, h1);
  // after time run out call clearMessage function
  setTimeout(() => {
    this.clearMessage();
  }, 3000);

}
// this is above function
function clearMessage() {

  // select those classed and save them
  const alert = document.querySelector('.error');
  const success = document.querySelector('.success');

  //if alert is true
  if (alert) {
    //remove element || message
    alert.remove();
    // if success is true
  } else if (success) {
    //remove element || message
    success.remove();

  }
}
// listen for click from selected button and run arrow function
document.querySelector('#button').addEventListener('click', () => {

  //clear ul
  ul.innerHTML = '';

});
