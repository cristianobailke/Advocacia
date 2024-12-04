document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    const showSlide = (n) => {
        carouselItems[currentSlide].style.opacity = '0';
        currentSlide = (n + carouselItems.length) % carouselItems.length;
        carouselItems[currentSlide].style.opacity = '1';
    };

    setInterval(() => showSlide(currentSlide + 1), 5000);

    // Contact form submission
    const contactForm = document.querySelector('#contato form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado pelo seu contato. Retornaremos em breve!');
        contactForm.reset();
    });

    // Admin functionality
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminDashboard = document.getElementById('adminDashboard');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('adminLogout');

    // Hardcoded admin credentials (NOT SECURE - only for demonstration purposes)
    const adminCredentials = {
        email: 'admin@example.com',
        password: 'admin123'
    };

    const checkAdminLogin = () => {
        const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
        if (adminDashboard && loginForm) {
            adminDashboard.style.display = isLoggedIn ? 'block' : 'none';
            loginForm.style.display = isLoggedIn ? 'none' : 'block';
        }
    };

    adminLoginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;

        if (email === adminCredentials.email && password === adminCredentials.password) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            checkAdminLogin();
            alert('Login bem-sucedido!');
        } else {
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    });

    logoutButton?.addEventListener('click', () => {
        sessionStorage.removeItem('adminLoggedIn');
        checkAdminLogin();
        alert('Você foi desconectado.');
    });

    checkAdminLogin();
});