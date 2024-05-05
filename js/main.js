let token = localStorage.getItem("token");

console.log(token);

token
  ? window.open("/view/catalogo.html", "_self")
  : window.open("/view/loginForm.html", "_self");
