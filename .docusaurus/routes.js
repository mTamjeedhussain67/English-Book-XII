import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '221'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c7e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c76'),
            routes: [
              {
                path: '/docs/section-b',
                component: ComponentCreator('/docs/section-b', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/section-c',
                component: ComponentCreator('/docs/section-c', 'ca8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unit-1-1',
                component: ComponentCreator('/docs/unit-1-1', 'dca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unit-2-1',
                component: ComponentCreator('/docs/unit-2-1', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unit-3-1',
                component: ComponentCreator('/docs/unit-3-1', 'f03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unit-4-1',
                component: ComponentCreator('/docs/unit-4-1', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unit-5-1',
                component: ComponentCreator('/docs/unit-5-1', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unit-6-1',
                component: ComponentCreator('/docs/unit-6-1', 'f68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/unit-7-1',
                component: ComponentCreator('/docs/unit-7-1', '620'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
