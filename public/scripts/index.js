function darkModeAction() {
   var bodyMode = document.body;
   bodyMode.classList.toggle("bodyDarkMode");

   var headerMode = document.getElementsByTagName("header")[0];
   headerMode.classList.toggle("headerDarkMode");

   var footerMode = document.getElementsByTagName("footer")[0];
   footerMode.classList.toggle("footerDarkMode");

   var cardMode = document.getElementsByClassName("card");
   for (let index = 0; index < cardMode.length; index++) {
      cardMode[index].classList.toggle("cardDarkMode");
   }
}
