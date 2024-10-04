// Filtering projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.project-filters .btn');
    
    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    event.target.classList.add('active');

    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
