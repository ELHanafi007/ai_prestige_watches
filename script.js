document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Scroll to Section
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Dynamic Greeting based on Time
    const greeting = document.querySelector('.welcome-message p');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = 'Good Morning! Welcome to';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon! Welcome to';
    } else {
        greeting.textContent = 'Good Evening! Welcome to';
    }

    // 3. Automatic Carousel for Favourites Section
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel .slide');
    const totalSlides = slides.length;
    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        currentIndex = (currentIndex + 1) % totalSlides;
    }
    showSlides();
    let slideInterval = setInterval(showSlides, 3000);

    // 4. Dark/Light Mode Toggle
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Dark Mode';
    toggleBtn.classList.add('dark-mode-toggle');
    document.body.appendChild(toggleBtn);
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 5. Scroll to Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollBtn';
    scrollBtn.textContent = 'Top';
    scrollBtn.title = 'Go to top';
    document.body.appendChild(scrollBtn);
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    };
    scrollBtn.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // 6. Animate Scroll to Top Button
    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.animation = 'bounce 1s infinite';
    });
    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.animation = 'none';
    });

    // 7. Sticky Navbar
    const navbar = document.querySelector('nav');
    const sticky = navbar.offsetTop;
    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

 


    // 10. Toggle Brand Section Visibility
    const toggleBrandsBtn = document.createElement('button');
    toggleBrandsBtn.textContent = 'Toggle Brands';
    toggleBrandsBtn.classList.add('toggle-brands-btn');
    document.body.appendChild(toggleBrandsBtn);
    toggleBrandsBtn.addEventListener('click', () => {
        const brandsSection = document.querySelector('.brands-section');
        brandsSection.style.display = brandsSection.style.display === 'none' ? 'block' : 'none';
    });

    // 11. Animations for hover effect on slider items
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // 12. Pause carousel on hover
    document.querySelector('.carousel').addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });
    document.querySelector('.carousel').addEventListener('mouseout', () => {
        slideInterval = setInterval(showSlides, 3000);
    });
});

// Additional styles for the new features
const style = document.createElement('style');
style.textContent = `
    /* Dark Mode */
    .dark-mode {
        background-color: #1e1e1e;
        color: #f1f1f1;
    }

    /* Sticky Navbar */
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
    }

    /* Scroll to Top Button */
    #scrollBtn {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 99;
        border: none;
        outline: none;
        background-color: var(--primary-color);
        color: var(--text-color);
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        font-size: 18px;
        transition: background-color 0.3s;
    }

    #scrollBtn:hover {
        background-color: var(--secondary-color);
    }

    /* Button Animations */
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }

    /* Dark Mode Toggle Button */
    .dark-mode-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }

    .dark-mode-toggle:hover {
        background-color: var(--secondary-color);
    }

    /* Toggle Brands Button */
    .toggle-brands-btn {
        position: fixed;
        top: 60px;
        right: 20px;
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }

    .toggle-brands-btn:hover {
        background-color: var(--secondary-color);
    }

    /* Footer */
    footer {
        text-align: center;
        padding: 20px;
        background-color: var(--primary-color);
        color: var(--text-color);
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 999;
    }
`;
document.head.append(style);
