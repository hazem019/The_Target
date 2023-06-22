// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty(`--main-color`, mainColors);

// Remove Active Class From All Color's List Item
document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove('.active');

// Add Active Class On Element With Data Color === Local Storage Item
if (element.dataset.color === mainColors) {

    // Add Active Class
    element.classList.add('active') ;
}

});


};



// Random Background Option
let backgroundOption = true;

//    Variable To Control The Background Interval
let backgroundInterval;

// Check There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");  

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

    if (backgroundLocalItem == "true") {

        backgroundOption = true;

} else {

    backgroundOption = false;

}

// Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {
   
    element.classList.remove("active");

});

if (backgroundLocalItem === `true`) {

    document.querySelector(".random-backgrounds .yes").classList.add("active");

} else {

    document.querySelector(".random-backgrounds .no").classList.add("active");

}

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
// Toggle Class Fa-spin For Rotation-on Self
this.classList.toggle("fa-spin");
// Toggle Class Open On Main Settings Box
document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

// Click On Every List Items
li.addEventListener("click", (e) => {

// Set Color On Root
document.documentElement.style.setProperty(`--main-color`, e.target.dataset.color);

//  Set Color On Local Storage
localStorage.setItem("color_option", e.target.dataset.color);

handleActive(e);

});  

});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

// Click On Every Span
span.addEventListener("click", (e) => {
  
    handleActive(e);

if (e.target.dataset.background === `yes`) {

    backgroundOption = true;

    randomizeImgs();

    localStorage.setItem("background_option", true);

} else {

    backgroundOption = false;

clearInterval(backgroundInterval);


localStorage.setItem("background_option", false);

}

});  

});


// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Image 
let imgsArray = ["img7.jpg", "img2.jpg", "img8.jpg", "img4.jpg", "img5.jpg"];

// Function To Randomize Imgs
function randomizeImgs () {

    if (backgroundOption === true) {

       backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
        
        }, 5000);
        
        
        
    }

};

randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

// Skills Offset Top
let skillsOffsetTop = ourSkills.offsetTop;

// Skills Outer Height
let skillsOuterHeight = ourSkills.offsetHeight;

// Window Height
let windowHeight = this.innerHeight;

// Window ScrollTop
let windowScrollTop = this.pageYOffset;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;
    });
} 

};


//  Create popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener(`click`, (e) => {

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = `popup-overlay`;

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = `popup-box`;

        if (img.alt !== null) {

            // Create Heading 
            let imgHeading = document.createElement("h3");

            // Create Text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The Heading ToThe Popup Box
            popupBox.appendChild(imgHeading);

        }

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span 
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text ToClose Button
        closeButton.appendChild(closeButtonText);

        // Add Class ToClose Button 
        closeButton.className = `close-button`;

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    });

});

// Close Popup
document.addEventListener("click", function (e) {

    if (e.target.className == `close-button`) {

    // Remove The Current Popup 
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

}

});


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

    bullet.addEventListener("click", (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: `smooth`
        });
    });
});


// Select All Links
const allLinks = document.querySelectorAll(".links a");

allLinks.forEach(link => {

    link.addEventListener("click", (e) => {

      e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: `smooth`
        });
    });
});


// Handel Active State
function handleActive(ev) {

    // Remove Active Class From All Children's
ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

});

// Add Active Class On Self
ev.target.classList.add("active");

}



// Show Bullets Options
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocalItem === `block`) {

        bulletsContainer.style.display = `block`;

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = `none`;

        document.querySelector(".bullets-option .no").classList.add("active");

    }

};

bulletsSpan.forEach(span => {

span.addEventListener("click", (e) => {

if (span.dataset.display === `show`) {

    bulletsContainer.style.display = `block`;

    localStorage.setItem("bullets-option", `block`);
    
}  else {

    bulletsContainer.style.display = `none`;

    localStorage.setItem("bullets-option", `none`);

}

handleActive(e);

});

});



// Reset Option
document.querySelector(".reset-option").onclick = function () {
    
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    window.location.reload();

};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

// // Stop Propagation
// e.stopPropagation();

toggleBtn.onclick = function () {

    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");

    // Toggle Class "Open" On Links
    tLinks.classList.toggle("open");

};


// Click Anywhere Outside Menu Add Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check If Menu Is Open
        if (tLinks.classList.contains("open")) {

                // Toggle Class "menu-active" On Button
                 toggleBtn.classList.toggle("menu-active");

               // Toggle Class "Open" On Links
               tLinks.classList.toggle("open");


        }
        
    }

});

tLinks.onclick = function (e) {
    e.stopPropagation();
};