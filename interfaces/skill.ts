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
        values: ['Node.js', 'React', 'Angular', 'Next.js', 'NestJS', 'HTML', 'CSS']
    },
    {
        name: 'operative_systems',
        values: ['Ubuntu 18.04']
    },
    {
        name: 'databases',
        values: ['SQL Server', 'MongoDB', 'Postgres', 'MySQL', 'SQL']
    },
    {
        name: 'cloud_infrastructure',
        values: ['Azure', 'GCP', 'DigitalOcean', 'Heroku']
    },
    {
        name: 'others',
        values: ['Git', 'Docker', 'Kubernetes', 'Kafka', 'REST', 'GraphQL', 'Redux', 'WebExtensions']
    }
]
