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

var var1=`<span class="searchbtn"><form action="" class="search-bar">
	<input type="search" class="input" name="search" pattern=".*\S.*" required>
	<button class="search-btn" type="submit">
		<span>Search</span>
	</button>
</form></span>`;

var var2=`<!-- Swiper -->
<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<div class="swiper-content">
      <img src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80">
			</div>
		</div>
    <div class="swiper-slide">
			<div class="swiper-content">
      <img src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80">
			</div>
		</div>
    <div class="swiper-slide">
			<div class="swiper-content">
      <img src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80">
			</div>
		</div>

			</div>
		</div>
	<!-- Add Pagination -->
	<div class="swiper-pagination"><span></span> </div>`;

function append(){
$('div.canvas').append("<div>"+var1+"</div>");
}
document.getElementById('canvas').innerHTML = var1;
document.getElementById('canvas').innerHTML = var2;
var swiper = new Swiper('.swiper-container', {
     effect: 'coverflow',
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 'auto',
     coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows : true,
     },
     pagination: {
       el: '.swiper-pagination',
     },
   });
