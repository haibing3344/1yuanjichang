import { defineConfig } from 'vitepress'
//import { SitemapStream } from 'sitemap'
//import { createWriteStream } from 'node:fs'
//import { resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '一元机场，一元机场官网，一元机场梯子，一元机场登录地址'}]
  ],
  title: "一元机场",
  description: "一元机场，一元机场官网，一元机场梯子，一元机场登录地址",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '介绍', link: '/about.md' },
      { text: '客户端下载', link: '/download.md' },
      { text: '使用教程', link: '/tutorial.md' },
      { text: '🎉购买订阅', link: '/feed.md' },
      { text: '登录/注册', link: 'https://suola.link/w' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/about.md' },
          { text: '下载', link: '/download.md' },
          { text: '教程', link: '/tutorial.md' }
        ]
      },
      {
        text: '使用说明',
        items: [
          { text: 'Clash(小猫咪) For Windows', link: '/wiki/Windows.md' },
          { text: 'Clash(小猫咪) For Android', link: '/wiki/Android.md' },
          { text: 'Clash(小猫咪) For MacOS', link: '/wiki/macOS.md' },
          { text: 'Clash(小猫咪) For OpenWrt', link: '/wiki/openWrt.md' },
          { text: 'Shadowrocket For iPhoneOS', link: '/wiki/iPhoneOS.md' },
        ]
      }
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
     },
 
       // 移动端 - 外观
     darkModeSwitchLabel: '外观',
 
       // 移动端 - 返回顶部
     returnToTopLabel: '返回顶部',
 
       // 移动端 - menu
     sidebarMenuLabel: '菜单',
 
     outlineTitle: '本页导航',
     footer: {
      message: "欢迎使用一元机场【一元机场官网，一元机场注册地址】，一杯咖啡的钱，畅游全球网络",
      copyright: 'Copyright © 2025  <a href="/"> 一元机场 </a>'
    },

    search: {
      provider: 'local'
    },
  },
  transformPageData(pageData, { siteConfig }) {
    // 从站点配置中获取基本信息
    const { site } = siteConfig;
    const { lang = 'zh-CN', title, description } = site;

    // 判断是否为首页
    const isHome = pageData.frontmatter.layout === 'home';

    // 获取最后更新时间
    const lastUpdated = pageData.lastUpdated;
    const isoDate = lastUpdated ? new Date(lastUpdated).toISOString() : null;
    
    //siteUrl
    const siteUrl = 'https://www.1yuanjingchang.org';
    
    // canonical
    const canonicalUrl =
      siteUrl +
      "/" +
      pageData.relativePath.replace(/index\.md$/, "").replace(/\.md$/, ".html");

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      // canonical
      ["link", { rel: "canonical", href: canonicalUrl }],
      // Open Graph
      [
        "meta",
        {
          property: "og:local",
          content: lang,
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: title,
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: description,
        },
      ],
      [
        "meta",
        {
          property: "og:type",
          content: isHome ? "website" : "article",
        },
      ],
      [
        "meta",
        {
          property: "og:url",
          content: canonicalUrl,
        },
      ],
      [
        "meta",
        {
          property: "og:image",
          content: siteUrl + "/android-chrome-192x192.png",
        },
      ],
      [
        "meta",
        {
          property: "og:image:width",
          content: "192",
        },
      ],
      [
        "meta",
        {
          property: "og:image:height",
          content: "192",
        },
      ],
      [
        "meta",
        {
          property: "og:image:type",
          content: "image/png",
        },
      ],

      // Twitter
      [
        "meta",
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]
    );
    // 如果isoDate存在，则添加article:modified_time元数据
    if (isoDate) {
      pageData.frontmatter.head.push([
        "meta",
        {
          property: "article:modified_time",
          content: isoDate,
        },
      ]);
    }

    // 添加其他article相关的meta标签
    pageData.frontmatter.head.push(
      [
        "meta",
        {
          name: "author",
          content: title,
        },
      ],
      [
        "meta",
        {
          name: "twitter:label1",
          content: "作者",
        },
      ],
      [
        "meta",
        {
          name: "twitter:data1",
          content: title,
        },
      ]
    );
    
  },
  cleanUrls: false, // 禁用干净URL，保留.html后缀
})