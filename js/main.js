$(function() {
// navigation for the elevator function with links
  var homeNav = document.getElementById("nav-home");
  var aboutNav = document.getElementById("nav-about");
  var getInfoNav = document.getElementById("nav-getInfo");
  var contactNav = document.getElementById("nav-contact");

  new Elevator({
    element: homeNav,
    targetElement: document.querySelector('#home'),
  });

  new Elevator({
    element: aboutNav,
    targetElement: document.querySelector('#about'),
  });

  new Elevator({
    element: getInfoNav,
    targetElement: document.querySelector('#getInfo'),
  });

  new Elevator({
    element: contactNav,
    targetElement: document.querySelector('#contact'),
  });
});



