const totalPriceElement = document.getElementById('total-price');

function showOptionsDetails(box) {
    document.querySelectorAll('.options-details').forEach(details => details.style.display = 'none');
    const details = box.querySelector('.options-details');
    if (details) details.style.display = 'block';
}

function hideOptionsDetails() {
    document.querySelectorAll('.options-details').forEach(details => details.style.display = 'none');
}

document.querySelectorAll('input[name="offer"]').forEach(radio =>
    radio.addEventListener('change', () => {
        const price = radio.getAttribute('data-price');
        totalPriceElement.textContent = `$${price} USD`;
        showOptionsDetails(radio.closest('.offer-box'));
    })
);

document.querySelectorAll('.offer-box').forEach(box =>
    box.addEventListener('click', (event) => {
        if (box.querySelector('.options-details')) {
            showOptionsDetails(box);
            event.stopPropagation();
        }
    })
);

document.addEventListener('click', (event) => {
    if (!event.target.closest('.offer-box')) hideOptionsDetails();
});