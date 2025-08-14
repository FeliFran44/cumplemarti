document.addEventListener('DOMContentLoaded', () => {
    // --- Sección del Contador ---
    const countdownDate = new Date("August 29, 2025 00:00:00").getTime();
    const countdownContainer = document.getElementById('countdown-container');
    const timelineSection = document.getElementById('timeline-section');
    const specialMessage = document.getElementById('special-message');
    const surpriseBtn = document.getElementById('surprise-btn');
    const backgroundMusic = document.getElementById('background-music');
    const confettiContainer = document.getElementById('confetti-container');
    const musicInstructions = document.getElementById('music-instructions');
    const particlesContainer = document.getElementById('particles-container');

    let musicActivated = false;

    // --- NUEVOS EFECTOS DE PARTÍCULAS SOFISTICADOS ---
    const createParticles = () => {
        // Crear estrellas brillantes
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 100 + 'vh';
            star.style.animationDelay = Math.random() * 3 + 's';
            particlesContainer.appendChild(star);
        }

        // Crear pétalos de rosa
        for (let i = 0; i < 20; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDelay = Math.random() * 8 + 's';
            particlesContainer.appendChild(petal);
        }

        // Crear burbujas de amor
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = Math.random() * 100 + 'vw';
            bubble.style.animationDelay = Math.random() * 15 + 's';
            particlesContainer.appendChild(bubble);
        }
    };

    // Inicializar partículas
    createParticles();

    // --- EFECTOS DE SONIDO ---
    const playHeartbeat = () => {
        try {
            const heartbeat = document.getElementById('heartbeat-sound');
            if (heartbeat) {
                heartbeat.volume = 0.2;
                heartbeat.play().catch(e => console.log('Sonido no disponible:', e));
            }
        } catch (e) {
            console.log('Sonido no disponible');
        }
    };

    const playBell = () => {
        try {
            const bell = document.getElementById('bell-sound');
            if (bell) {
                bell.volume = 0.3;
                bell.play().catch(e => console.log('Sonido no disponible:', e));
            }
        } catch (e) {
            console.log('Sonido no disponible');
        }
    };

    // --- Función para activar música ---
    const activateMusic = () => {
        if (!musicActivated) {
            try {
                backgroundMusic.volume = 0.3;
                backgroundMusic.play().then(() => {
                    musicActivated = true;
                    musicInstructions.style.display = 'none';
                    playBell(); // Sonido de campanilla al activar música
                }).catch(e => console.log('Música no disponible:', e));
            } catch (e) {
                console.log('Música no disponible');
            }
        }
    };

    // --- Activar música con cualquier clic ---
    document.addEventListener('click', activateMusic);
    document.addEventListener('touchstart', activateMusic);

    // --- Función para crear confeti ---
    const createConfetti = () => {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            // Remover confeti después de la animación
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 5000);
        }
    };

    // --- Función para mostrar mensaje especial ---
    const showSpecialMessage = () => {
        specialMessage.style.display = 'flex';
        playHeartbeat(); // Sonido de corazón al mostrar mensaje
    };

    // --- Event listeners para botones ---
    // surpriseBtn.addEventListener('click', showSpecialMessage); // ELIMINADO - causa conflictos
    
    // --- Event listener para el botón de sorpresa ---
    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'surprise-btn') {
            console.log('Botón de sorpresa clickeado!');
            showSpecialMessage();
        }
    });

    // --- Cerrar mensaje con ESC ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const specialMessage = document.getElementById('special-message');
            if (specialMessage && !specialMessage.classList.contains('hidden')) {
                specialMessage.style.display = 'none';
            }
        }
    });

    // --- Cerrar mensaje haciendo clic fuera del contenedor ---
    document.addEventListener('click', (e) => {
        const specialMessage = document.getElementById('special-message');
        if (specialMessage && e.target === specialMessage) {
            specialMessage.style.display = 'none';
        }
    });

    const showTimeline = () => {
        countdownContainer.style.display = 'none';
        timelineSection.classList.remove('hidden');
        document.body.style.overflow = 'auto'; // Permite hacer scroll
        
        // Crear confeti cuando llegue el cumpleaños
        createConfetti();
        
        // Activar música
        activateMusic();
    };

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            showTimeline();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    };
    
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- Sección de Corazones Voladores ---
    const heartsContainer = document.getElementById('hearts-container');
    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
    };
    setInterval(createHeart, 300);

    // --- Sección del Comando Especial ---
    let specialCommand = '';
    const secretCode = 'amor'; // ¡Tu comando secreto!

    document.addEventListener('keydown', (e) => {
        specialCommand += e.key;
        if (specialCommand.toLowerCase().includes(secretCode)) {
            showTimeline();
            specialCommand = '';
        }
        if(specialCommand.length > 20) specialCommand = '';
    });
    
    // --- ¡NUEVO! ANIMACIÓN AL HACER SCROLL ---
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // El elemento se animará cuando un 10% de él sea visible
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // --- Efecto de escritura para el título ---
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let charIndex = 0;
    const typeWriter = () => {
        if (charIndex < originalText.length) {
            title.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Iniciar efecto de escritura después de un pequeño delay
    setTimeout(typeWriter, 500);

    // --- Efecto de parpadeo para el botón de sorpresa ---
    const blinkButton = () => {
        surpriseBtn.style.animation = 'none';
        setTimeout(() => {
            surpriseBtn.style.animation = 'button-blink 2s infinite';
        }, 100);
    };
    
    // Agregar animación de parpadeo al CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes button-blink {
            0%, 50% { opacity: 1; }
            25%, 75% { opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
    
    // Iniciar parpadeo después de 3 segundos
    setTimeout(blinkButton, 3000);

    // --- MINI-JUEGO DE MEMORIA ---
    let gameCards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let gameTimer = null;
    let gameTime = 0;
    let canFlip = true;

    const symbols = ['❤️', '💕', '💖', '💗', '💘', '💝', '💞', '💟'];
    const gameSymbols = [...symbols, ...symbols]; // Duplicar para hacer pares

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const createGameCard = (symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.addEventListener('click', () => flipCard(card));
        return card;
    };

    const flipCard = (card) => {
        if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) {
            return;
        }

        card.classList.add('flipped');
        card.textContent = card.dataset.symbol;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            canFlip = false;
            moves++;
            document.getElementById('moves').textContent = moves;

            const [card1, card2] = flippedCards;
            
            if (card1.dataset.symbol === card2.dataset.symbol) {
                // ¡Match!
                card1.classList.add('matched');
                card2.classList.add('matched');
                matchedPairs++;
                document.getElementById('pairs').textContent = matchedPairs;
                playBell(); // Sonido de campanilla al hacer match
                
                if (matchedPairs === 8) {
                    // ¡Juego completado!
                    setTimeout(() => {
                        alert('¡Felicitaciones! Has completado el juego de memoria del amor 💕');
                        playHeartbeat(); // Sonido de corazón al completar
                    }, 500);
                }
            } else {
                // No match
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    card1.textContent = '';
                    card2.textContent = '';
                }, 1000);
            }

            flippedCards = [];
            setTimeout(() => {
                canFlip = true;
            }, 1000);
        }
    };

    const updateGameTimer = () => {
        gameTime++;
        const minutes = Math.floor(gameTime / 60);
        const seconds = gameTime % 60;
        document.getElementById('time').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const iniciarJuego = () => {
        const grid = document.getElementById('memory-grid');
        grid.innerHTML = '';
        
        // Resetear variables
        gameCards = [];
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        gameTime = 0;
        canFlip = true;
        
        // Actualizar estadísticas
        document.getElementById('moves').textContent = moves;
        document.getElementById('pairs').textContent = matchedPairs;
        document.getElementById('time').textContent = '00:00';
        
        // Mezclar símbolos
        const shuffledSymbols = shuffleArray([...gameSymbols]);
        
        // Crear tarjetas
        shuffledSymbols.forEach((symbol, index) => {
            const card = createGameCard(symbol, index);
            grid.appendChild(card);
            gameCards.push(card);
        });
        
        // Iniciar timer
        if (gameTimer) clearInterval(gameTimer);
        gameTimer = setInterval(updateGameTimer, 1000);
    };

    const reiniciarJuego = () => {
        iniciarJuego();
    };

    // Hacer funciones globales
    window.iniciarJuego = iniciarJuego;
    window.reiniciarJuego = reiniciarJuego;
    window.cerrarJuego = () => {
        document.getElementById('memory-game').style.display = 'none';
        if (gameTimer) clearInterval(gameTimer);
    };
});