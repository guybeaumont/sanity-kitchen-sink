export default {
  widgets: [
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
                  buildHookId: '5ed00d487861aa021f09fec7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tbx46hrh',
                  apiId: '700a695c-02f0-48e4-9764-11e8a3c5f240'
                },
                {
                  buildHookId: '5ed00d49dbfa9b4f3f03713b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bs75dgf9',
                  apiId: 'cae6b08a-b835-4f54-967d-f3fab034bb6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guybeaumont/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bs75dgf9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
