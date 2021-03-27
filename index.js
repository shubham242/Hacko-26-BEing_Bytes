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
var var1_html=`<span>&lt;span class="searchbtn"&gt;&lt;form action="" class="search-bar"&gt;</span><span> &lt;input type="search" class="input" name="search" pattern=".*\S.*" required&gt;</span><span> &lt;button class="search-btn" type="submit"&gt;</span><span>   &lt;span&gt;Search&lt;/span&gt;</span><span> &lt;/button&gt;</span><span>&lt;/form&gt;&lt;/span&gt;</span>`;

var var2=`
  <div class="carousel">
    <ul class="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg">
        </div>
        <div class="carousel-controls">
          <label for="img-3" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true">
        </div>
        <div class="carousel-controls">
          <label for="img-1" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-3" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li class="slide-container">
        <div class="slide-image">
          <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg">
        </div>
        <div class="carousel-controls">
          <label for="img-2" class="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-1" class="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div class="carousel-dots">
        <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
`;
var var2_html=`<span>&lt;div class="carousel"&gt;</span><span>  &lt;ul class="slides"&gt;</span><span>    &lt;input type="radio" name="radio-buttons" id="img-1" checked /&gt;</span><span>    &lt;li class="slide-container"&gt;</span><span>      &lt;div class="slide-image"&gt;</span><span>        &lt;img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg"&gt;</span><span>      &lt;/div&gt;</span><span>      &lt;div class="carousel-controls"&gt;</span><span>        &lt;label for="img-3" class="prev-slide"&gt;</span><span>          &lt;span&gt;&amplsaquo;&lt;/span&gt;</span><span>        &lt;/label&gt;</span><span>        &lt;label for="img-2" class="next-slide"&gt;</span><span>          &lt;span&gt;&amprsaquo;&lt;/span&gt;</span><span>        &lt;/label&gt;</span><span>      &lt;/div&gt;</span><span>    &lt;/li&gt;</span><span>    &lt;input type="radio" name="radio-buttons" id="img-2" /&gt;</span><span>    &lt;li class="slide-container"&gt;</span><span>      &lt;div class="slide-image"&gt;</span><span>        &lt;img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true"&gt;</span><span>      &lt;/div&gt;</span><span>      &lt;div class="carousel-controls"&gt;</span><span>        &lt;label for="img-1" class="prev-slide"&gt;</span><span>          &lt;span&gt;&amplsaquo;&lt;/span&gt;</span><span>        &lt;/label&gt;</span><span>        &lt;label for="img-3" class="next-slide"&gt;</span><span>          &lt;span&gt;&amprsaquo;&lt;/span&gt;</span><span>        &lt;/label&gt;</span><span>      &lt;/div&gt;</span><span>    &lt;/li&gt;</span><span>    &lt;input type="radio" name="radio-buttons" id="img-3" /&gt;</span><span>    &lt;li class="slide-container"&gt;</span><span>      &lt;div class="slide-image"&gt;</span><span>        &lt;img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"&gt;</span><span>      &lt;/div&gt;</span><span>      &lt;div class="carousel-controls"&gt;</span><span>        &lt;label for="img-2" class="prev-slide"&gt;</span><span>          &lt;span&gt;&amplsaquo;&lt;/span&gt;</span><span>        &lt;/label&gt;</span><span>        &lt;label for="img-1" class="next-slide"&gt;</span><span>          &lt;span&gt;&amprsaquo;&lt;/span&gt;</span><span>        &lt;/label&gt;</span><span>      &lt;/div&gt;</span><span>    &lt;/li&gt;</span><span>    &lt;div class="carousel-dots"&gt;</span><span>      &lt;label for="img-1" class="carousel-dot" id="img-dot-1"&gt;&lt;/label&gt;</span><span>      &lt;label for="img-2" class="carousel-dot" id="img-dot-2"&gt;&lt;/label&gt;</span><span>      &lt;label for="img-3" class="carousel-dot" id="img-dot-3"&gt;&lt;/label&gt;</span><span>    &lt;/div&gt;</span><span>  &lt;/ul&gt;</span><span>&lt;/div&gt;</span>`

function fvar1(){
document.getElementById('canvas').innerHTML = var1;
document.getElementById('code-html').innerHTML = var1_html;
}
function fvar2(){
  document.getElementById('canvas').innerHTML = var2;
  document.getElementById('code-html').innerHTML = var2_html;
}

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
