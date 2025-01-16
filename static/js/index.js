// document.addEventListener('DOMContentLoaded', function() {
//     const navbarLinks = document.querySelectorAll('.navbar a');
//     const sections = document.querySelectorAll('section');

//     // Function to activate a section and corresponding navbar link
//     function activateSection(sectionId) {
//         sections.forEach(section => {
//             section.classList.remove('active');
//         });
//         navbarLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         const targetSection = document.getElementById(sectionId);
//         const targetLink = Array.from(navbarLinks).find(link => link.getAttribute('data-section') === sectionId);

//         if (targetSection) {
//             targetSection.classList.add('active');
//             targetSection.scrollIntoView(); // Scroll to the section
//         }
//         if (targetLink) {
//             targetLink.classList.add('active');
//         }
//     }

//     // Handle navbar clicks
//     navbarLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const targetSection = link.getAttribute('data-section');
//             activateSection(targetSection);
//             window.history.pushState(null, '', `#${targetSection}`); // Update URL fragment
//         });
//     });

//     // Handle page load with URL fragment
//     const initialFragment = window.location.hash.substring(1); // Get fragment without #
//     if (initialFragment) {
//         activateSection(initialFragment);
//     }
// });

// function typeText(element, text, callback) {
//     let index = 0;

//     element.style.display = 'block';
//     element.style.visibility = 'hidden';

//     element.textContent = '';

//     function type() {
//         if (index === 0) {
//             // Show element when typing starts
//             element.style.visibility = 'visible';
//         }
//         if (index < text.length) {
//             element.textContent += text.charAt(index);
//             index++;
//             setTimeout(type, 25);
//         } else if (callback) {
//             callback();
//         }
//     }

//     type();
// }

// function startTypingEffect(elements, delay = 200, initialDelay = 500) {
//     function processElement(index) {
//         if (index < elements.length) {
//             const elementInfo = elements[index];
//             const element = document.getElementById(elementInfo.id);
//             typeText(element, elementInfo.text, function() {
//                 setTimeout(() => {
//                     processElement(index + 1);
//                 }, delay);
//             });
//         }
//     }

//     setTimeout(() => {
//         processElement(0);
//     }, initialDelay);
// }

// const elementsToType = [
//     { id: 'streaming-text0', text: "Welcome to Noah Jones' Portfolio" },
//     { id: 'streaming-text1', text: "I am continuously updating this page with new projects" },
//     { id: 'streaming-text2', text: "I hope you enjoy tinkering with them." }
// ];

// startTypingEffect(elementsToType);







document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    // Function to activate a section and corresponding navbar link
    function activateSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        navbarLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        const targetLink = Array.from(navbarLinks).find(link => link.getAttribute('data-section') === sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start"      // Align to the top
            });
            targetSection.classList.add('active');
        }
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    // Handle navbar clicks
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = link.getAttribute('data-section');
            activateSection(targetSection);
            window.history.pushState(null, '', `#${targetSection}`); // Update URL fragment
        });
    });

    // Handle page load with URL fragment
    const initialFragment = window.location.hash.substring(1); // Get fragment without #
    if (initialFragment) {
        activateSection(initialFragment);
    }
});

// Typing effect logic remains unchanged
function typeText(element, text, callback) {
    let index = 0;

    element.style.display = 'block';
    element.style.visibility = 'hidden';

    element.textContent = '';

    function type() {
        if (index === 0) {
            // Show element when typing starts
            element.style.visibility = 'visible';
        }
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 25);
        } else if (callback) {
            callback();
        }
    }

    type();
}

function startTypingEffect(elements, delay = 200, initialDelay = 500) {
    function processElement(index) {
        if (index < elements.length) {
            const elementInfo = elements[index];
            const element = document.getElementById(elementInfo.id);
            typeText(element, elementInfo.text, function () {
                setTimeout(() => {
                    processElement(index + 1);
                }, delay);
            });
        }
    }

    setTimeout(() => {
        processElement(0);
    }, initialDelay);
}

const elementsToType = [
    { id: 'streaming-text0', text: "Welcome to Noah Jones' Portfolio" },
    { id: 'streaming-text1', text: "I am continuously updating this page with new projects" },
    { id: 'streaming-text2', text: "I hope you enjoy tinkering with them." }
];

startTypingEffect(elementsToType);





