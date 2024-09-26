document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = 'flex'; 
            } else {
                section.style.display = 'none'; 
            }
        });
    }

    // Initial setup: hide all sections except the first one
    showSection('home');

    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });
});

//project section
const clickableDivs = document.querySelectorAll(".box");
const infodivs = document.querySelectorAll(".info");
const projects = document.querySelector(".projects");


clickableDivs.forEach((div) => {
    div.addEventListener('click', () => {
        projects.style.display = 'none';

        const infoToShow = document.getElementById(div.getAttribute('data-target'));

        if (infoToShow) {
            infoToShow.style.display = 'block';
        }
    });
});

function backHandler() {
    projects.style.display = 'flex';  
    infodivs.forEach((info) => {
        info.style.display = 'none';   
    });
}

