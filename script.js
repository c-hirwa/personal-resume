// Typewriter effect for the homepage title
function typeWriter(element, text, speed = 100) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    element.textContent = ''; // Clear existing text
    type();
}

// Apply the typewriter effect to an element
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
    const text = typewriterElement.getAttribute('data-text') || 'Welcome to My Website!';
    typeWriter(typewriterElement, text);
}
