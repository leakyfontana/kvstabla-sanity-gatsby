export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62e5954ec9d3744fd9ac8d2a',
                  title: 'Sanity Studio',
                  name: 'kvstabla-sanity-gatsby-studio',
                  apiId: '87d96283-8314-48a4-a5ac-ad2293ae0024'
                },
                {
                  buildHookId: '62e5954ef9d4024f7f025f38',
                  title: 'Portfolio Website',
                  name: 'kvstabla-sanity-gatsby',
                  apiId: '71b49505-e268-4a6b-9930-2eff80bec68c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leakyfontana/kvstabla-sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://kvstabla-sanity-gatsby.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
