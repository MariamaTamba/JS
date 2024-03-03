document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('#memory-board > div > div');
    let firstCard = null;
    let secondCard = null;
    let isFlipped = false;

    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (!isFlipped) {
                this.classList.add('show');
                firstCard = this;
                isFlipped = true;
            } else {
                this.classList.add('show');
                secondCard = this;
                isFlipped = false;
                
                if (firstCard.className === secondCard.className) {
                    firstCard.removeEventListener('click', flipCard);
                    secondCard.removeEventListener('click', flipCard);
                } else {
                    setTimeout(() => {
                        firstCard.classList.remove('show');
                        secondCard.classList.remove('show');
                    }, 1000);
                }
            }
        });
    });
});
