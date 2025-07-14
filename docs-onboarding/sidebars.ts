import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: '시작하기 🚀',
      items: [
        'intro',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: '마케팅 📈',
      items: [
        'tutorial-basics/create-a-blog-post',
      ],
    },
    {
      type: 'category',
      label: '웹 폼 📝',
      items: [
        'tutorial-basics/markdown-features',
        'tutorial-extras/translate-your-site',
        'tutorial-extras/manage-docs-versions',
      ],
    },
    // {
    //   type: 'category',
    //   label: '세일즈 🏠',
    //   items: [
    //     // 예시: 추후 세일즈 관련 문서 추가 가능
    //   ],
    // },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
