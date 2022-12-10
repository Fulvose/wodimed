let navbar = $(".navbar");

$(window).scroll(function () {
  let navtop = $(".s1 p").offset().top - window.innerHeight;
  if ($(window).scrollTop() > navtop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

function headerBtn() {
  window.location.href = "products.html";
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.slice(1, -2));
