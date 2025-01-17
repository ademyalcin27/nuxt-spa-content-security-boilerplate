// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  modules: [
		"@nuxtjs/i18n",
		"@pinia/nuxt",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"@nuxtjs/google-fonts",
		"nuxt-svgo",
		"@nuxt/image",
    "nuxt-security"
	],
  experimental: {
		appManifest: false,
	},
	sourcemap: false,
	typescript: {
		strict: true,
	},
  svgo: {
		defaultImport: "component",
	},
	googleFonts: {
		families: {
			Inter: [300, 400, 500, 600, 700],
			Sora: [300, 400, 500, 600, 700],
		},
		display: "swap",
	},
	i18n: {
		locales: [
			{
				code: "de",
				file: "de.json",
			},
			{
				code: "en",
				file: "en.json",
			},
			{
				code: "es",
				file: "es.json",
			},
			{
				code: "fr",
				file: "fr.json",
			},
			{
				code: "it",
				file: "it.json",
			},
			{
				code: "nl",
				file: "nl.json",
			},
		],
		lazy: true,
		langDir: "lang",
		defaultLocale: "en",
		strategy: "no_prefix",
		detectBrowserLanguage: false,
	},
	runtimeConfig: {
		public: {},
	},
	vite: {
		build: {
			target: "esnext",
		},
		optimizeDeps: {
			include: ["pdfjs-dist"], // optionally specify dependency name
			esbuildOptions: {
				supported: {
					"top-level-await": true,
				},
			},
		},
	},
  security: {
    ssg: {
      meta: true, // Enables CSP as a meta tag in SSG mode
      hashScripts: true, // Enables CSP hash support for scripts in SSG mode
      hashStyles: false, // Disables CSP hash support for styles in SSG mode (recommended)
      exportToPresets: true // Export security headers to Nitro presets
    },
    sri: true,
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'nonce-{{nonce}}'",
          "'strict-dynamic'", // Modify with your custom CSP sources
          // The nonce-{{nonce}} placeholder is not required and will be ignored in SSG mode
        ]
      }
    },
  },
})