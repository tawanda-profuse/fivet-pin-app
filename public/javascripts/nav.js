const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav');
var openForm = document.querySelector('#open-form');
var form = document.querySelector('#new-form');
var closeForm = document.querySelector('#close-form');
var pushToDb = document.querySelector('#pushDb');

openForm.addEventListener('click', function(){
    form.classList.remove('hide');
    closeForm.classList.remove('hide');
    openForm.classList.add('hide');
  });
  
  closeForm.addEventListener('click', function(){
    form.classList.add('hide');
    closeForm.classList.add('hide');
    openForm.classList.remove('hide');
});

pushToDb.addEventListener('click', function(){
    form.classList.add('hide');
    closeForm.classList.add('hide');
    openForm.classList.remove('hide');
});

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


