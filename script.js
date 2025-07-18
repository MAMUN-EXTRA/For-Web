document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6c5ce7"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6c5ce7",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Theme switcher
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme', this.checked);
    });

    // Calculate interest
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculateInterest);

    // Also calculate when pressing Enter
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateInterest();
        }
    });

    // Animate inputs on focus
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.input-underline').style.width = '100%';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('.input-underline').style.width = '0';
        });
    });

    // Initialize with light theme
    document.body.classList.remove('dark-theme');
    themeSwitch.checked = false;
});

function calculateInterest() {
    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseInt(document.getElementById('time').value);
    const compoundFreq = parseInt(document.getElementById('compound').value);
    
    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || time <= 0) {
        showError("Please enter valid values for all fields");
        return;
    }
    
    // Calculate compound interest
    const n = 365 / compoundFreq; // number of compounding periods per year
    const totalAmount = principal * Math.pow(1 + rate / n, n * time / 365);
    const interest = totalAmount - principal;
    
    // Display results
    document.getElementById('principal-result').textContent = formatCurrency(principal);
    document.getElementById('interest').textContent = formatCurrency(interest);
    document.getElementById('total').textContent = formatCurrency(totalAmount);
    
    // Show results section with animation
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'block';
    
    // Animate plant growth
    animateGrowth(interest / principal);
    
    // Show confetti if significant growth
    if (interest / principal > 0.1) {
        showConfetti();
    }
}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function animateGrowth(growthRatio) {
    const maxGrowth = 0.8; // 80% of container height
    const growthPercentage = Math.min(growthRatio, 1) * maxGrowth;
    
    // Animate stem
    const stem = document.querySelector('.stem');
    const plantHeight = document.querySelector('.plant-growth').offsetHeight;
    stem.style.height = `${plantHeight * growthPercentage}px`;
    
    // Animate leaves
    const leaves = document.querySelectorAll('.leaf');
    leaves.forEach((leaf, index) => {
        setTimeout(() => {
            leaf.style.opacity = '1';
        }, index * 300);
    });
    
    // Animate dollar fruit
    if (growthRatio > 0.3) {
        setTimeout(() => {
            const dollarFruit = document.querySelector('.dollar-fruit');
            dollarFruit.style.transform = 'translateX(-50%) scale(1)';
        }, 1000);
    }
    
    // Animate growth progress bar
    const growthProgress = document.getElementById('growth-progress');
    growthProgress.style.width = `${growthRatio * 100}%`;
}

function showError(message) {
    // Create error element
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    errorEl.style.position = 'fixed';
    errorEl.style.bottom = '20px';
    errorEl.style.left = '50%';
    errorEl.style.transform = 'translateX(-50%)';
    errorEl.style.backgroundColor = '#ff6b6b';
    errorEl.style.color = 'white';
    errorEl.style.padding = '10px 20px';
    errorEl.style.borderRadius = '5px';
    errorEl.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    errorEl.style.zIndex = '1000';
    errorEl.style.animation = 'fadeIn 0.3s ease';
    
    // Add to body
    document.body.appendChild(errorEl);
    
    // Remove after 3 seconds
    setTimeout(() => {
        errorEl.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            errorEl.remove();
        }, 300);
    }, 3000);
}

function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.setProperty('--random-x', Math.random() * 200 - 100 + 'px');
        confettiContainer.appendChild(confetti);
    }
    
    // Add CSS for confetti
    const style = document.createElement('style');
    style.textContent = `
        .confetti {
            position: fixed;
            top: -10px;
            width: 10px;
            height: 10px;
            opacity: 0;
            z-index: 999;
            animation: fadeIn 0.5s ease forwards;
        }
        
        @keyframes fall {
            to {
                transform: translateY(100vh) translateX(var(--random-x));
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
        style.remove();
    }, 5000);
}

function getRandomColor() {
    const colors = ['#6c5ce7', '#00cec9', '#00b894', '#fdcb6e', '#e17055', '#d63031'];
    return colors[Math.floor(Math.random() * colors.length)];
        }
