document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.contingut #memory-board div');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedCards = []; // Almacenar cartas emparejadas

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('show');

        if (!hasFlippedCard) {
            // Primera carta volteada
            hasFlippedCard = true;
            firstCard = this;
        } else {
            // Segunda carta volteada
            secondCard = this;
            checkForMatch();
        }
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;

        if (isMatch) {
            disableCards();
        } else {
            // Bloquear el tablero para evitar clics adicionales
            lockBoard = true;
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        matchedCards.push(firstCard, secondCard); // Agregar cartas a las emparejadas

        if (matchedCards.length === cards.length) {
            // Verificar si todas las cartas están emparejadas
            alert('¡Felicidades! Has encontrado todas las parejas.');
        }

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('show');
            secondCard.classList.remove('show');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 16);
            card.style.order = randomPos;
        });
    })();

    // Agregar evento 'click' a cada carta
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard);
    }
});
