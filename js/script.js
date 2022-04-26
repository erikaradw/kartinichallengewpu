/* javascript document */
const navbar = document.querySelector('nav');
window.addEventListener('scroll', function() {
  navbar.classList.toggle('active', this.scrollY > 0);
});

function toggleNavbar() {
  const toggle = navbar.querySelector('.toggle');
  toggle.addEventListener('click', function() {
    this.previousElementSibling.classList.toggle('active');
  });
}

toggleNavbar();

function hoverAnimation(target) {
  if (!target) console.log('tidak ada parameter atau argument saat memakai function "hoverAnimation".');
  const results = document.querySelectorAll(target);
  results.forEach(result => {
    result.addEventListener('click', function() {
      results.forEach(result => result.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

hoverAnimation('nav ul li');
hoverAnimation('.features .box');
