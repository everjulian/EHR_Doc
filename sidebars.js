// @ts-check

/** 
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} 
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introducción',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Backend (Node.js)',
      items: ['backend', 'base-datos'],
    },
    {
      type: 'category',
      label: 'Frontend (Angular)',
      items: ['frontend'],
    },
    {
      type: 'category',
      label: 'Diagramas',
      items: ['flujo-autenticacion', 'erdiagram', 'diccionario-datos', 'diagrama-procesos'],
    },
  ],
};

export default sidebars;
