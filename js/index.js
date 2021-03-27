var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("dropdown-active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



function fvar1(){
document.getElementById('canvas').innerHTML = var1;
document.getElementById('code-html').innerHTML = var1_html;
document.getElementById('code-css').innerHTML = var1_css;
}
function fvar2(){
  document.getElementById('canvas').innerHTML = var2;
  document.getElementById('code-html').innerHTML = var2_html;
  document.getElementById('code-css').innerHTML = var2_css;

}
function fvar3(){
  document.getElementById('canvas').innerHTML = var3;

}
