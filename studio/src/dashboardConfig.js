export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eae23f450cfcde1d23455e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5c6ikqat',
                  apiId: '8e21a665-1119-484b-9543-39944c74508d'
                },
                {
                  buildHookId: '5eae23f46d3a2dd415e119d9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6cmxnq12',
                  apiId: '926803a0-e32b-41ad-80c8-315fcff50b97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamthenewking/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6cmxnq12.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
