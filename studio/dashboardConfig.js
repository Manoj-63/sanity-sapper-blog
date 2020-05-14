export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ebd90ea0530a0e19abb289f',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-bhnw1f88',
                  apiId: '109d921b-5f6b-4168-80f1-1f6226367a41'
                },
                {
                  buildHookId: '5ebd90eaed34be4e7ae300d4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-e5ofg7ho',
                  apiId: '4912e994-0526-4039-bd62-9e719c68491d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Manoj-63/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-e5ofg7ho.netlify.app', category: 'apps'}
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
