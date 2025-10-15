// --- Existing Functions (Keep these as they are) ---

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav");


const dropdown = document.createElement("div");
dropdown.classList.add("dropdown");
dropdown.innerHTML = `
  <ul>
    <li><a onclick="closeMenu()" href="#">Home</a></li>
    <li><a onclick="closeMenu() "href="#about">About / Our Story</a></li>
    <li><a onclick="closeMenu()" href="#pic">Gallery</a></li>
    <li><a onclick="closeMenu()" href="#travel">Travel</a></li>
    <li><a onclick="closeMenu()" href="#gifts">Gift Registry</a></li>
  </ul>
`;
nav.appendChild(dropdown);

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.classList.toggle("active");

  const icon = menuBtn.querySelector("img");
  if (menuBtn.classList.contains("active")) {
    icon.src = "./assests/images/icon-close.svg";
  } else {
    icon.src = "./assests/images/icon-hamburger.svg";
  }
});


function closeMenu() {
const nav = document.getElementById('nav');
const menuBtn = document.querySelector('.menu');
nav.classList.remove('open');
menuBtn.classList.remove('active');
const img = menuBtn.querySelector('img');
if (img) img.src = './assests/images/icon-hamburger.svg';
}



document.querySelectorAll("img").forEach(img => {

  img.addEventListener("contextmenu", e => e.preventDefault());


  img.addEventListener("touchstart", e => {
    img.touchTimeout = setTimeout(() => e.preventDefault(), 500);
  });
  img.addEventListener("touchend", e => clearTimeout(img.touchTimeout));
});

// The old .slider logic is commented out/removed as we're replacing it with the new logic below.
/*
document.querySelectorAll('.slider').forEach((slider) => {
  // ... old logic removed
});
*/

// --- New Slider Data ---

const hotels = [
  {
    name: "Sleep Inn Carlisle South",
    img: "https://lh3.googleusercontent.com/p/AF1QipOV7usy6zDduMJMauZwkBeMMA8xSc6qmmpWG1WV=w408-h272-k-no",
    features: [
      { icon: "fa-parking", text: "Free parking" },
      { icon: "fa-wifi", text: "Free WiFi" },
      { icon: "fa-utensils", text: "Free breakfast" },
      { icon: "fa-snowflake", text: "Air-conditioned" },
    ],
    distance: "3 mins drive to venue (0.6 miles)",
    link: "https://www.choicehotels.com/pennsylvania/carlisle/sleep-inn-hotels/pa055?mc=llgoxxpx"
  },
  {
    name: "Microtel Inn & Suites by Wyndham Carlisle",
    img: "https://lh3.googleusercontent.com/p/AF1QipN3GHbSDENy5iqrd4LmFtPU4mD6982OEwBuWNq-=w426-h240-k-no",
    features: [
      { icon: "fa-wifi", text: "Free WiFi" },
      { icon: "fa-mug-hot", text: "Free Breakfast" },
      { icon: "fa-parking", text: "Free parking" },
      { icon: "fa-fan", text: "Air-conditioned" },
    ],
    distance: "9 mins drive to venue (3 miles)",
    link: "https://www.wyndhamhotels.com/microtel/carlisle-pennsylvania/microtel-inn-and-suites-by-wyndham-carlisle/overview?CID=LC:5b3ss9kd80xe5ox:49010&iata=00093796"
  },
  {
    name: "MainStay Suites Carlisle - Harrisburg",
    img: "https://lh3.googleusercontent.com/p/AF1QipM_jjd80_59g2saTTWznWkvGJqyA-Mc84tNPK5P=w262-h104-p-k-no",
    features: [
      { icon: "fa-wifi", text: "Free WiFi" },
      { icon: "fa-mug-hot", text: "Free Breakfast" },
      { icon: "fa-parking", text: "Free parking" },
      { icon: "fa-fan", text: "Air-conditioned" },
    ],
    distance: "8 mins drive to venue (3.6 miles)",
    link: "https://www.choicehotels.com/pennsylvania/carlisle/mainstay-hotels/pa887?mc=llgoxxpx"
  },
  {
    name: "Best Western Carlisle South",
    img: "https://lh3.googleusercontent.com/p/AF1QipPa7t02MRH4HfK6uS8a0fgUAfEk42bYnuBQVcL7=w408-h260-k-no",
    features: [
      { icon: "fa-wifi", text: "Free WiFi" },
      { icon: "fa-mug-hot", text: "Free Breakfast" },
      { icon: "fa-parking", text: "Free parking" },
      { icon: "fa-fan", text: "Air-conditioned" },
    ],
    distance: "7 mins drive to venue (1.8 miles)",
    link: "https://www.bestwestern.com/en_US/book/hotel-rooms.39154.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:39154"
  },
  {
    name: "Thornwald Mansion",
    img: "https://lh3.googleusercontent.com/p/AF1QipNrVczhvQ2QEUmVpJT5XulKGNFZjQW6cX49pKIv=w408-h306-k-no",
    features: [
      { icon: "fa-wifi", text: "Free WiFi" },
      { icon: "fa-parking", text: "Free parking" },
      { icon: "fa-fan", text: "Air-conditioned" },
    ],
    distance: "5 mins drive to venue (1.3 miles)",
    link: "http://www.thornwaldmansion.com/"
  }
];

const restaurants = [
  {
    name: "Chick-fil-A",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqWDBeBPgt91_KRAXnu5a51bvoh-yD8Aqz62gu61iZxrJwCCr_aFUtimA0znNlZrHEsebIYFhx0TNomZoayWflTFmq_8qJwjJK475DS-StUt5K7VyjXsa42A3qnTUanya7ZK-0uRg=w408-h306-k-no",
    features: [
      { icon: "fa-utensils", text: "Dine-in" },
      { icon: "fa-car", text: "Drive-through" },
      { icon: "fa-wifi", text: "Free WiFi" },
      { icon: "fa-bolt", text: "Fast Service" },
    ],
    distance: "4 mins drive to venue (0.8 miles)",
    link: "https://www.chick-fil-a.com/locations/pa/carlisle/menu?utm_source=yext&utm_medium=link"
  },
  {
    name: "Cracker Barrel Old Country Store",
    img: "https://lh3.googleusercontent.com/p/AF1QipNs81D7glVv7OwyPuCkGTiRYa-S26QZ6x5I5has=w426-h240-k-no",
    features: [
      { icon: "fa-utensils", text: "Dine-in" },
      { icon: "fa-bag-shopping", text: "Takeout" },
      { icon: "fa-car", text: "Drive-through" },
      { icon: "fa-martini-glass", text: "Drinks available" },
    ],
    distance: "2 mins drive to venue (0.5 miles)",
    link: "https://www.crackerbarrel.com/menu/?utm_source=google&utm_medium=maps&utm_campaign=menu"
  },
  {
    name: "Fay's Country Kitchen",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrUx8lJfavqP8tXuoP-_157Y4uaq42p2fHqXqhkN7Nk-BUVzkG-qlKE-GsYiLIA52TbnaGAaFIvTKDyaDXMuj3y-IxrPtrxznISaUUKi9eAq-TCjSXsVslalOP3W5ufI_30eLc=w408-h306-k-no",
    features: [
      { icon: "fa-utensils", text: "Dine-in" },
      { icon: "fa-bag-shopping", text: "Takeout" },
      { icon: "fa-wifi", text: "Free WiFi" },
      { icon: "fa-bolt", text: "Fast Service" },
    ],
    distance: "4 mins drive to venue (1.2 miles)",
    link: "tel:+17172435510"
  },
  {
    name: "Momma Spriggs Restaurant",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr1SQ7dK3kDBppapB-o9wJJtj2ergWkmlGQiIzPLMoccR9Tm-XFgDRT_zRHLGABOL_OC_KK43p4UszBfdpou76-HDQ5-4ycBVUkvN08PS_JFaFpOHlnqtrwL0ARCQ4u0WCEfSuT=w408-h306-k-no",
    features: [
      { icon: "fa-utensils", text: "Dine-in" },
      { icon: "fa-bag-shopping", text: "Takeout" },
      { icon: "fa-car", text: "Free Parking" },
      { icon: "fa-chair", text: "Free Wifi" },
    ],
    distance: "6 mins drive to venue (2.7 miles)",
    link: "https://www.mommaspriggs.com/"
  }
];


// --- New/Updated Functions for Sliding Listings ---

/**
 * Renders the listing items into a slider structure.
 * @param {Array} data - The array of hotel or restaurant objects.
 * @param {string} containerId - The ID of the container element.
 */
function renderListings(data, containerId) {
  const container = document.getElementById(containerId);

  if (!data || data.length === 0) {
    container.innerHTML = '<p>No listings available.</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="slider-wrapper">
      <div class="slides-container">
        ${data.map((item, index) => `
          <div class="listing slide ${index === 0 ? 'active' : ''}">
            <img src="${item.img}" alt="${item.name}">
            <div class="listing-info">
              <h4>${item.name}</h4>
              <div class="features">
                ${item.features.map(f => `
                  <div><i class="fa-solid ${f.icon}"></i> ${f.text}</div>
                `).join('')}
              </div>
              <p class="distance"><i class="fa-solid fa-car"></i> ${item.distance}</p>
            </div>
            <button class="book-btn"><a href="${item.link}" target="_blank">Dine / Book</a></button>
          </div>
        `).join('')}
      </div>
      
      ${data.length > 1 ? `
        <div class="controls">
          <button class="prev"><i class="fa-solid fa-chevron-left"></i></button> 
          <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      ` : ''}
    </div>
  `;
  
  // After rendering, set up the slider functionality
  if (data.length > 1) {
    setupSlider(containerId);
  }
}

/**
 * Initializes the slider logic for a given container.
 * @param {string} containerId - The ID of the container element.
 */
function setupSlider(containerId) {
  const container = document.getElementById(containerId);
  const slides = container.querySelectorAll('.slide');
  const nextBtn = container.querySelector('.next');
  const prevBtn = container.querySelector('.prev');
  let currentIndex = 0;
  const totalSlides = slides.length;

  /** Shows the slide at the given index */
  function showSlide(index) {
    // Wrap around logic
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    // Update the active class
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
  }

  // Event Listeners for controls
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }
  
  // Initialize to show the first slide
  showSlide(currentIndex);
}



renderListings(hotels, "hotel-list");
renderListings(restaurants, "restaurant-list");

const countDownDate = new Date("Dec 14, 2025 14:00:00").getTime();

const countdownContainer = document.getElementById('countdown');


function updateCountdown() {
 
  const now = new Date().getTime();
    
  const distance = countDownDate - now;
    
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const createTimerBox = (value, label) => `
    <div class="timer-box">
      <div class="number">${value}</div>
      <div class="label">${label}</div>
    </div>
  `;


  countdownContainer.innerHTML = `
    ${createTimerBox(days, 'DAYS')}
    ${createTimerBox(hours, 'HOURS')}
    ${createTimerBox(minutes, 'MINUTES')}
    ${createTimerBox(seconds, 'SECONDS')}
  `;
    
  if (distance < 0) {
    clearInterval(timerInterval);
    countdownContainer.innerHTML = "<h4>The celebration is happening now! 🎉</h4>";
  }
}


const timerInterval = setInterval(updateCountdown, 1000);


updateCountdown();