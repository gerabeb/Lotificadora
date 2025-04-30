

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ham-button').addEventListener('click', function() {
        let toggleButton = document.getElementById('menu-toggle');
        var ul = document.getElementById('dropdown-menu');

        console.log(ul.style.display)

        if (ul.style.display === 'hidden' || ul.style.display === '' || ul.style.display === 'none') {
            ShowElement(ul, toggleButton);
        } else {
            HideElement(ul, toggleButton);
        }
    });
});

function HideElement(element, toggle){
    element.style.display = 'none';
    toggle.innerHTML = "☰";
    
}

function ShowElement(element, toggle){
    element.style.display = 'block';
    toggle.innerHTML = "✗";
}