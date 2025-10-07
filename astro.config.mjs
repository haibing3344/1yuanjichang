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
				{
					label: '⭐️科学上网梯子加速器机场推荐',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '🚀优信云', badge: { text: 'IEPL/IPLC 高速专线', variant: 'success' },link: 'https://a.suola.link/youxinyun' },
						{ label: '🚀扬帆云', badge: { text: '老牌机场分站', variant: 'note' },link: 'https://a.suola.link/yfy' },
						{ label: '🚀疾风云', badge: { text: '可做备用机场', variant: 'tip' },link: 'https://a.suola.link/jifeng' },
						{ label: '🚀尔湾云', badge: { text: '性价比高', variant: 'danger' },link: 'https://a.suola.link/erwan' },
						{ label: '🚀网际快车', badge: { text: '性价比高', variant: 'caution' },link: 'https://a.suola.link/wjkc' },
					],
				},
				{
					label: '其它代理客户端',
					items: [
						{ label: ' Shadowrocket(小火箭)', badge: { text: 'iOS专业网络工具', variant: 'success' }, link: 'https://shadowrocket.uk' },
						{ label: ' ClashMetaForAndroid', badge: { text: 'Android专业网络工具', variant: 'note' }, link: 'https://clashmeta.bid' },
						{ label: ' ClashForWindows', badge: { text: 'Windows平台代理工具', variant: 'tip' }, link: 'https://clashverge.uk' },
					],
				},
			],
		}),
	],
});
