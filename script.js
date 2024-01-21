document.addEventListener('DOMContentLoaded', () => {
    // Initialize stock for each box
    let stocks = {
        item1: 5,
        item2: 5,
        item3: 5,
        item4: 5,
        item5: 5,
        item6: 5,
        item7: 5,
        item8: 5,
        item9: 5,
        item10: 5,
        item11: 5,
        item12: 5,
        item13: 5,
        item14: 5,
        item15: 5,
        item16: 5,
        item17: 5,
        item18: 5,
        item19: 5,
        item20: 5,
        item21: 5,
        item22: 5,
        item23: 5,
        item24: 5,

    };

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = button.getAttribute('data-id'); // Get the associated item ID
            if (stocks[itemId] > 0) {
                stocks[itemId]--;
                const stockCounterElement = button.parentElement.querySelector('.stockCounter');
                stockCounterElement.textContent = stocks[itemId];

                if (stocks[itemId] === 0) {
                    button.disabled = true;
                    button.textContent = 'Out of Stock';
                }
            }
        });
    });
});