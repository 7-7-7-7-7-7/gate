export type Skill = {
    name: string,
    values: any[]
}

export const Skills: Skill[] = [
    {
        name: 'programming_languages',
        values: ['JavaScript', 'Go', 'PHP', 'Ruby']
    },
    {
        name: 'operative_systems',
        values: ['WinServer 2012', 'Ubuntu 18.04']
    },
    {
        name: 'web_technologies',
        values: ['Node', 'React.js', 'Angular', 'CSS', 'HTML', 'Rails', 'ES9', 'Next.js']
    },
    {
        name: 'databases',
        values: ['MongoDB', 'Postgres', 'MariaDB', 'MySQL', 'SQL']
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
