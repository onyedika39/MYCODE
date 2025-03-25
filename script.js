// Futuristic JavaScript for KCEE Electronics

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkMode = document.createElement('button');
    toggleDarkMode.innerText = 'Dark Mode';
    toggleDarkMode.classList.add('dark-mode-btn');
    document.body.appendChild(toggleDarkMode);

    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Voice Command Search
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    document.addEventListener('DOMContentLoaded', function () {
        const voiceSearchBtn = document.createElement('button');
        voiceSearchBtn.innerText = '🎤 Voice Search';
        voiceSearchBtn.classList.add('voice-search-btn');
        document.body.appendChild(voiceSearchBtn);

        voiceSearchBtn.addEventListener('click', () => {
            recognition.start();
        });

        recognition.onresult = function (event) {
            const searchQuery = event.results[0][0].transcript;
            alert(`Searching for: ${searchQuery}`);
        };
    });
}

// Parallax Scrolling Effect
document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax').forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
});

// Animated Scroll Effect
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    elements.forEach(element => observer.observe(element));
});

// Live Search and Filtering
const searchInput = document.createElement("input");
searchInput.setAttribute("placeholder", "Search products...");
document.body.prepend(searchInput);

searchInput.addEventListener("input", function () {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll(".product").forEach(product => {
        const productName = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = productName.includes(filter) ? "block" : "none";
    });
});

// Interactive Wishlist & Cart
const wishlist = [];
const cart = [];

document.querySelectorAll(".add-to-wishlist").forEach(button => {
    button.addEventListener("click", function () {
        const productId = this.dataset.id;
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            alert("Added to Wishlist!");
        }
    });
});

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {
        const productId = this.dataset.id;
        cart.push(productId);
        alert("Added to Cart!");
    });
});
// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = '🌙 Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 20px';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.background = '#ffcc00';
darkModeToggle.style.color = '#000';
darkModeToggle.style.fontSize = '1rem';

document.body.appendChild(darkModeToggle);

// Check local storage for mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerText = '☀️ Light Mode';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.innerText = '🌙 Dark Mode';
    }
});

// Apply Dark Mode Styling
const darkModeCSS = document.createElement('style');
darkModeCSS.innerHTML = `
    .dark-mode {
        background: #111 !important;
        color: #fff !important;
    }
    .dark-mode nav {
        background: #222 !important;
    }
    .dark-mode .product {
        background: #333 !important;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    }
`;
document.head.appendChild(darkModeCSS);

// Voice Assistance
function speakText(text) {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support voice synthesis.');
    }
}

// Add voice button to each product
document.querySelectorAll('.product').forEach((product, index) => {
    let voiceButton = document.createElement('button');
    voiceButton.innerText = '🔊 Hear Product';
    voiceButton.style.display = 'block';
    voiceButton.style.margin = '10px auto';
    voiceButton.style.padding = '10px';
    voiceButton.style.cursor = 'pointer';
    voiceButton.style.border = 'none';
    voiceButton.style.background = '#ffcc00';
    voiceButton.style.color = '#000';
    voiceButton.style.borderRadius = '5px';
    voiceButton.style.fontSize = '1rem';
    
    voiceButton.addEventListener('click', () => {
        let productName = product.querySelector('h3') ? product.querySelector('h3').innerText : 'Unknown Product';
        speakText(`This product is called ${productName}.`);
    });

    product.appendChild(voiceButton);
});
