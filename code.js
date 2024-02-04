const project_data = [
    {
        name: 'Pacman',
        text:'Pacman game using only Vanilla JavaScript and uses Firebase for data-management.',
        code: 'https://github.com/SuchiBankoti/pac-man',
        site:'https://pac-man-eight.vercel.app/'
   
    },
    {
        name: 'Shopping-Cart',
        text:'Shopping cart app made using Reactjs library and uses Context Api for data-management.',
        code: 'https://github.com/SuchiBankoti/shopping-cart',
        site:'https://shopping-cart-eight-teal.vercel.app/'
   
    },
    {
        name: 'Ecomm-App',
        text:'Dynamic React app utilizing Context API, React Router,and Firebase for data-management. offers smooth user authentication for an engaging user experience.',
        code: 'https://github.com/SuchiBankoti/3hrreactproject',
        site:'https://suchibankoti.github.io/3hrreactproject/'
   
    }

]
const skills_data = [
    '<i class="fab fa-react"></i>',
    '<i class="fas fa-cube"></i>',
    '<i class="fab fa-js"></i>',
    '<i class="fab fa-node"></i>',
    '<i class="fas fa-code-branch"></i>',
    '<i class="fab fa-git"></i>'
]
const projects = document.getElementById('projects')
const skills = document.getElementById('skills')


project_data.forEach((p,i) => {
    const glass_background = document.createElement('div')
    const project_bar = document.createElement('div')
    const header = document.createElement('div')
    const project_name = document.createElement('div')
    const project_3d = document.createElement('div')
    const project_text = document.createElement('div')
    const links = document.createElement('div')
    const code = document.createElement('a')
    const site = document.createElement('a')

    glass_background.className = 'glass-background'
    project_bar.className = 'project-bar'
    header.className = 'header'
    project_3d.id = `project${i + 1}`
    project_text.className = 'project-text'
    links.className = 'links'
    code.className = 'btn'
    site.className='btn'

    project_name.textContent = p.name
    project_text.textContent = p.text

    code.href = p.code; 
    code.target = '_blank'; 
    code.title = 'code'; 
    code.textContent='code'
    site.href = p.code; 
    site.target = '_blank'; 
    site.title = 'code'; 
    site.textContent='site'   
    header.appendChild(project_name)
    header.appendChild(project_3d)
    links.appendChild(code)
    links.appendChild(site)
    project_bar.appendChild(header)
    project_bar.appendChild(project_text)
    project_bar.appendChild(links)
    glass_background.appendChild(project_bar)
    projects.appendChild(glass_background)
})



skills_data.forEach((s, i) => {
    const skill = document.createElement('div')
    const skill_name = document.createElement('p')
    skill.className = 'skill'
    skill.id = `skill${i + 1}`
    skill_name.innerHTML = s
    skill.appendChild(skill_name)
    skills.appendChild(skill)
    
})


