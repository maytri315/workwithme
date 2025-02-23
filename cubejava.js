document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    // Setup the Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                type();
                observer.unobserve(entry.target); // Stop observing once typing starts
            }
        });
    });

    observer.observe(document.getElementById('about'));
});

const typingText = document.getElementById('typing-text');
const text = "I'm Maytri Shah,<br>a web developer with a flair for creating dynamic and <br> interactive web pages.<br> My portfolio showcases a collection of projects that <br>demonstrate my proficiency in HTML, CSS, JavaScript,<br> and UX design principles. <br><br>Dive in to explore my work and get to know me better!";
let index = 0;

function type() {
    console.log('Typing function called');
    if (index < text.length) {
        if (text.charAt(index) === '<') {
            typingText.innerHTML += "<br>";
            index += 4; // Skip the '<br>' tag
        } else {
            typingText.innerHTML += text.charAt(index);
            index++;
        }
        setTimeout(type, 100); // Adjust the speed by changing the timeout duration
    } else {
        console.log('Finished typing text');
    }
}

function scrollToNextSection() {
    const currentSection = document.querySelector('.page:not(.hidden)');
    let nextSection = currentSection.nextElementSibling;
    while (nextSection && !nextSection.classList.contains('page')) {
        nextSection = nextSection.nextElementSibling;
    }
    if (nextSection) {
        currentSection.classList.add('hidden');
        nextSection.classList.remove('hidden');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}
