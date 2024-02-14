document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.contingut #memory-board div');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('show');

        if (!hasFlippedCard) {
            // Primera carta volteada
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        // Segunda carta volteada
        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.className === secondCard.className;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
        if (document.querySelectorAll('.show').length === cards.length) {
            alert('¡Felicidades! Has encontrado todas las parejas.');
        }
    }

    function unflipCards() {
        lockBoard = true;

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

    cards.forEach(card => card.addEventListener('click', flipCard));
});
