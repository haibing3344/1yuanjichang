// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://1yuanjingchang.org',
	integrations: [
		starlight({
			title: '一元机场官网，一元机场登录地址，一元机场ink',
			locales: {
                root: {
                  label: '简体中文',
                  lang: 'zh-CN',
                },
			},
			logo: {
				src: './src/assets/logo192.png',
				alt: '一元机场logo',
			},
			social: [{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/jichang360' }],
			components: {
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: '🎉机场推荐',
					badge: '推荐',
					slug: 'feed',
				},
				{
					label: '介绍',
					slug: 'about',
				},
				{
					label: '客户端下载',
					slug: 'download',
				},
				{
					label: '教程',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '基础教程', slug: 'tutorial' },
					],
				},
				{
					label: '客户端教程',
					autogenerate: { directory: 'wiki' },
				},

			],
		}),
	],
});
