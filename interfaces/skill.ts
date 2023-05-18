export type Skill = {
    name: string,
    values: string[]
}

export const Skills: Skill[] = [
    {
        name: 'programming_languages',
        values: ['TypeScript', 'JavaScript', 'Go']
    },
    {
        name: 'web_technologies',
        values: ['Node.js', 'Nest.js', 'React', 'Next.js', 'Angular', 'HTML', 'CSS']
    },
    {
        name: 'operative_systems',
        values: ['Linux']
    },
    {
        name: 'databases',
        values: ['SQL Server', 'MongoDB', 'Postgres', 'MySQL']
    },
    {
        name: 'cloud_infrastructure',
        values: ['Azure', 'DigitalOcean', 'Heroku']
    },
    {
        name: 'others',
        values: ['Git', 'Docker', 'Kubernetes', 'Kafka', 'REST', 'WebExtensions', 'Jest']
    }
]
