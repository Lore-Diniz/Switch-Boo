const checboxes = document.querySelectorAll('input[type="checkbox"]');

const detectToggleOnce = (e) => {
            e.target.classList.add('toggled-once');

};

checboxes.forEach(checkbox => {
    checkbox.addEventListener('click', detectToggleOnce, { once: true });

});