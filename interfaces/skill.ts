export type Skill = {
    name: string,
    values: any[]
}

export const Skills: Skill[] = [
    {
        name: 'programming_languages',
        values: ['JavaScript', 'Go',' PHP', 'Java', 'Ruby', 'Swift']
    },
    {
        name: 'operative_systems',
        values: ['WinServer 2012', 'Ubuntu 18.04', 'CentOS']
    },
    {
        name: 'web_technologies',
        values: ['React.js', 'Angular', 'CSS', 'HTML 5', 'Rails', 'jQuery', 'ES9']
    },
    {
        name: 'databases',
        values: ['MongoDB', 'Postgres', 'MariaDB', 'CosmosDB', 'SQL', 'MySQL']
    },
    {
        name: 'cloud_infrastructure',
        values: ['Azure', 'Google Cloud', 'DigitalOcean', 'Heroku']
    },
    {
        name: 'others',
        values: ['Git', 'Docker', 'Kubernetes', 'Kafka', 'REST', 'GraphQL', 'Redux', 'WebExtensions']
    }
]
