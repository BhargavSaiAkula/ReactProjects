document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: 'Redux Ecom',
            view: 'https://reduxecom.netlify.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project1.PNG'
        },
        {
            name: 'Hulu',
            view: 'https://hulu-clone-jigar-sable.vercel.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project2.PNG'
        },
        {
            name: 'Recipe Finder',
            view: 'https://recipe-app-react-project.netlify.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project3.PNG'
        },
        {
            name: 'Contact Manager',
            view: 'https://contact-app-react-project.netlify.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project4.PNG'
        },
        {
            name: 'Crypto Tracker',
            view: 'https://crypto-tracker-react-project.netlify.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project5.PNG'
        },
        {
            name: 'Basic Todo App',
            view: 'https://basic-todo-react-project.netlify.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project6.PNG'
        },
        {
            name: 'Weather App',
            view: 'https://weatherapp-react-project.netlify.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project7.PNG'
        },
        {
            name: 'GitHub Users',
            view: 'https://gh-users-react-project.netlify.app/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project8.PNG'
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <img src="${project.preview}" alt="${project.name}">
            <div class="content">
                <h3 class="title">${project.name}</h3>
                <div class="button-group">
                    <a href="${project.view}" target="_blank" class="button preview">Preview</a>
                    <a href="${project.code}" target="_blank" class="button code">Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectElement);
    });

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
