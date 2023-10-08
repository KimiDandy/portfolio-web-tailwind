//Navbar Fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop

  if(window.pageYOffset > fixedNav){
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}


//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

//Smooth Scrolling
document.querySelectorAll('a[href^="#"], .footer-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
