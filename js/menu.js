document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });

  function showAlert() {
    alert("Esto es una alerta Javascript");
  }
