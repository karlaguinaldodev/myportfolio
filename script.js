// from AI pa to lahat, trying to understand the code even moree hehehe
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-show');
        }
    });
}, observerOptions);


document.querySelectorAll('section, .project-card, .hobby-card').forEach(element => {
    element.classList.add('fade-up');
    fadeUpObserver.observe(element);
});


function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const heroTitle = document.querySelector('.intro-text h1');
if (heroTitle) {
    window.addEventListener('load', () => {
        typeWriter(heroTitle, heroTitle.textContent);
    });
}


const skillElements = document.querySelectorAll('.skills li');
skillElements.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'scale(1.1) rotate(0deg)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'scale(1) rotate(0deg)';
    });
});

const styles = document.createElement('style');
styles.textContent = `
    .fade-up {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }

    .fade-up-show {
        opacity: 1;
        transform: translateY(0);
    }

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }

    .profile-pic {
        animation: float 3s ease-in-out infinite;
    }

    .nav-links a:hover {
        animation: pulse 1s infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(styles);


document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const img = card.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05) rotate(0deg)';
        }
    });
    
    card.addEventListener('mouseleave', (e) => {
        const img = card.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});


const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('input-focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('input-focused');
        }
    });
}); 