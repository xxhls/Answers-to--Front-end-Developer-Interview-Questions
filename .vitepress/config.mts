import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '由xxhls给出的参考答案',
  description: '前端工作面试问题参考答案',
  base: '/Answers-to--Front-end-Developer-Interview-Questions/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: {
      '/': [
        {
          text: '题目索引',
          items: [
            {
              text: '常见问题',
              collapsed: true,
              items: [
                {
                  text: '1. 你在昨天/本周学到了什么？',
                  link: '/common/q01',
                },
                {
                  text: '2. 编写代码的哪些方面能够使你兴奋或感兴趣？',
                  link: '/common/q02',
                },
                {
                  text: '3. 你最近遇到过什么技术挑战？你是如何解决的？',
                  link: '/common/q03',
                },
                {
                  text: '4. 在制作一个网页应用或网站的过程中，你是如何考虑其 UI、安全性、高性能、SEO、可维护性以及技术因素的？',
                  link: '/common/q04',
                },
                {
                  text: '5. 请谈谈你喜欢的开发环境。',
                  link: '/common/q05',
                },
                {
                  text: '6. 你最熟悉哪一套版本控制系统？',
                  link: '/common/q06',
                },
                {
                  text: '7. 你能描述当你制作一个网页的工作流程吗？',
                  link: '/common/q07',
                },
                {
                  text: '8. 假若你有 5 个不同的样式文件 (stylesheets), 整合进网站的最好方式是？',
                  link: '/common/q08',
                },
                {
                  text: '9. 你能描述渐进增强 (progressive enhancement) 和优雅降级 (graceful degradation) 之间的不同吗？',
                  link: '/common/q09',
                },
                {
                  text: '10. 你如何对网站的文件和资源进行优化？',
                  link: '/common/q10',
                },
                {
                  text: '11. 浏览器同一时间可以从一个域名下载多少资源？',
                  link: '/common/q11',
                },
                {
                  text: '12. 请说出三种减少页面加载时间的方法。(加载时间指感知的时间或者实际加载时间)',
                  link: '/common/q12',
                },
                {
                  text: '13. 如果你参与到一个项目中，发现他们使用 Tab 来缩进代码，但是你喜欢空格，你会怎么做？',
                  link: '/common/q13',
                },
                {
                  text: '14. 请写一个简单的幻灯效果页面。',
                  link: '/common/q14',
                },
                {
                  text: '15. 如果今年你打算熟练掌握一项新技术，那会是什么？',
                  link: '/common/q15',
                },
                {
                  text: '16. 请谈谈你对网页标准和标准制定机构重要性的理解。',
                  link: '/common/q16',
                },
                {
                  text: '17. 什么是 FOUC (无样式内容闪烁)？你如何来避免 FOUC？',
                  link: '/common/q17',
                },
                {
                  text: '18. 请解释什么是 ARIA 和屏幕阅读器 (screenreaders)，以及如何使网站实现无障碍访问 (accessible)。',
                  link: '/common/q18',
                },
                {
                  text: '19. 请解释 CSS 动画和 JavaScript 动画的优缺点。',
                  link: '/common/q19',
                },
                {
                  text: '20. 什么是跨域资源共享 (CORS)？它用于解决什么问题？',
                  link: '/common/q20',
                },
              ],
            },
            {
              text: 'HTML 相关问题',
              collapsed: true,
              items: [
                {
                  text: '1. doctype(文档类型) 的作用是什么？',
                  link: '/html/q01',
                },
                {
                  text: '2. 浏览器标准模式 (standards mode) 、几乎标准模式（almost standards mode）和怪异模式 (quirks mode) 之间的区别是什么？',
                  link: '/html/q02',
                },
                {
                  text: '3. HTML 和 XHTML 有什么区别？',
                  link: '/html/q03',
                },
                {
                  text: '4. 如果页面使用 ‘application/xhtml+xml’ 会有什么问题吗？',
                  link: '/html/q04',
                },
                {
                  text: '5. 如果网页内容需要支持多语言，你会怎么做？',
                  link: '/html/q05',
                },
                {
                  text: '6. 在设计和开发多语言网站时，有哪些问题你必须要考虑？',
                  link: '/html/q06',
                },
                {
                  text: '7. 使用 data- 属性的好处是什么？',
                  link: '/html/q07',
                },
                {
                  text: '8. 如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？',
                  link: '/html/q08',
                },
                {
                  text: '9. 请描述 cookies、sessionStorage 和 localStorage 的区别。',
                  link: '/html/q09',
                },
                {
                  text: '10. 请解释 script、script async 和 script defer 的区别。',
                  link: '/html/q10',
                },
                {
                  text: '11. 为什么通常推荐将 CSS <link> 放置在 <head></head> 之间，而将 JS <script> 放置在 </body> 之前？你知道有哪些例外吗？',
                  link: '/html/q11',
                },
                {
                  text: '12. 什么是渐进式渲染 (progressive rendering)？',
                  link: '/html/q12',
                },
                {
                  text: '13. 你用过哪些不同的 HTML 模板语言？',
                  link: '/html/q13',
                },
              ],
            },
          ],
        },
      ],
      '/en/': [
        {
          text: 'Questions Reference',
          items: [],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xxhls/Answers-to--Front-end-Developer-Interview-Questions' },
      { icon: 'x', link: 'https://twitter.com/xxhls0208' },
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdatedText: '最后更新时间',
  },
  lastUpdated: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en',
    },
  },
});
