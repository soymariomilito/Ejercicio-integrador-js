(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });




})();

const guardar = () =>{
    let inputValue1 = document.querySelector(".footer__input").value; 
  localStorage.setItem( inputValue1,JSON.stringify(inputValue1));
};