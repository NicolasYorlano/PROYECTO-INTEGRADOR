
// Closure 
const createCounter = () => {
    let counter = 0;

    return {
        add: () => {
            if (counter < 99) counter++;
            return counter;
        },
        remove: () => {
            if (counter > 0) counter--;
            return counter;
        }
    };
};

export const initializeCounters = () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const counterElement = card.querySelector('.card__counter');
        const addBtn = card.querySelector('.button--add');
        const removeBtn = card.querySelector('.button--remove');

        const counter = createCounter();

        addBtn.addEventListener('click', () => {
            const value = counter.add();
            counterElement.textContent = value;
        });

        removeBtn.addEventListener('click', () => {
            const value = counter.remove();
            counterElement.textContent = value;
        });
    });
}


