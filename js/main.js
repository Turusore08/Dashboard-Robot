document.addEventListener('DOMContentLoaded', () => {
    // Mock robot data updates
    const robotStatusElements = document.querySelectorAll('.robot-status-val');
    const batteryElements = document.querySelectorAll('.battery-val');

    if (robotStatusElements.length > 0) {
        setInterval(() => {
            batteryElements.forEach(el => {
                let current = parseInt(el.textContent);
                if (current > 0) {
                    // Randomly decrease battery
                    if (Math.random() > 0.7) {
                        el.textContent = (current - 1) + '%';
                    }
                }
            });
        }, 5000);
    }

    // Form Handling (Mock)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate login success
            window.location.href = 'dashboard.html';
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate registration success
            alert('Registration Successful! Please login.');
            window.location.href = 'login.html';
        });
    }

    // Sidebar Toggle for Mobile
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    // Mouse Spotlight Effect
    const authCard = document.querySelector('.auth-card');
    const mouseSpotlight = document.querySelector('.mouse-spotlight');
    
    if (authCard && mouseSpotlight) {
        authCard.addEventListener('mousemove', (e) => {
            const rect = authCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            mouseSpotlight.style.opacity = '1';
            mouseSpotlight.style.left = `${x - 200}px`;
            mouseSpotlight.style.top = `${y - 200}px`;
        });
        
        authCard.addEventListener('mouseleave', () => {
            mouseSpotlight.style.opacity = '0';
        });
    }
});
