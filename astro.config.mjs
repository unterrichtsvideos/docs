// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightFullViewMode from 'starlight-fullview-mode'
import starlightAutoSidebar from 'starlight-auto-sidebar'

export default defineConfig({
	site: 'https://unterrichtsvideos.github.io',
  	base: '/docs',
	integrations: [
		starlight({
			plugins: [
				starlightAutoSidebar(),
				starlightFullViewMode({}),
			],
			title: {
				de: "Videoportalverbund",
				en: "Video portal network",
			},
			//defaultLocale: 'de',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			sidebar: [
				{
					label: 'Einbettung von Videos',
					translations: { 'en': 'Embedding videos' },
					autogenerate: { directory: 'de/video-embedding' },
				}
			],
		}),
	],
});
