function showProject(projectUrl) {
    const iframe = document.getElementById('project-iframe');
    iframe.src = projectUrl;
    iframe.style.display = 'block';
}