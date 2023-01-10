export type Project = {
    name: string,
    icon: string,
    description: string,
    technologies: string[],
    repoUrl: string
}

export const ProjectsData: Project[] = [
    {
        name: 'Basic e-commerce/shop',
        icon: 'fa-shop',
        description: 'shop_desc',
        technologies: ['NestJS', 'Node.js'],
        repoUrl: 'https://github.com/7-7-7-7-7-7/shop'
    },
    {
        name: 'Car dealership',
        icon: 'fa-car',
        description: 'car_desc',
        technologies: ['NestJS', 'Node.js'],
        repoUrl: 'https://github.com/7-7-7-7-7-7/nest-car-dealership'
    },
    {
        name: 'Blog',
        icon: 'fa-book',
        description: 'blog_desc',
        technologies: ['Ruby', 'Rails 5', 'Postgres'],
        repoUrl: 'https://github.com/7-7-7-7-7-7/blog'
    },
    {
        name: 'Pokédex',
        icon: 'fa-mobile-retro',
        description: 'pokedex_desc',
        technologies: ['Angular', 'REST'],
        repoUrl: 'https://github.com/7-7-7-7-7-7/pokemon'
    },
    {
        name: 'Calculator.js',
        icon: 'fa-calculator',
        description: 'calculator_desc',
        technologies: ['JavaScript', 'CSS', 'HTML'],
        repoUrl: 'https://github.com/7-7-7-7-7-7/calculator'
    },
    {
        name: 'Cookie importer',
        icon: 'fa-cookie',
        description: 'cookie_desc',
        technologies: ['WebExtensions', 'JavaScript'],
        repoUrl: 'https://github.com/7-7-7-7-7-7/cookie-importer'
    }
]
