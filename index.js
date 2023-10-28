
// button used to change background
let theme_button = document.getElementById("changetheme_btn");
let nav_link = document.getElementsByClassName('nav-menu-link')

theme_button.addEventListener("click", () => {
  if (theme_button.classList.item(1) == "bi-moon-stars") {
    theme_button.classList.replace("bi-moon-stars", "bi-brightness-high");

    // page theme changes
    document.body.classList.add("dark-theme");
    for(var i =0; i < nav_link.length; i++ ){
      nav_link[i].classList.add('text-white')
    }
    
  } else {
    theme_button.classList.replace("bi-brightness-high", "bi-moon-stars");
    document.body.classList.remove("dark-theme");
    for(var i =0; i < nav_link.length; i++ ){
      nav_link[i].classList.remove('text-white')
    }
  }
});
