class ThemeController {
	constructor(props) {
		this.store = props.store
		this.store.subscribe(this, 'changeTheme', this.setTheme)

		this.init()
	}

	init() {
		this.setTheme(this.getTheme())
	}

	setTheme(theme) {
		document.documentElement.setAttribute('data-theme', theme)
	}

	getTheme() {
		try {
			console.log(window.Telegram.WebApp)

			return window.Telegram.WebApp.colorScheme
		} catch (e) {
			console.log('error')
		}
	}

	toggle() {
		const currentTheme = this.getTheme()

		if (currentTheme === THEME_LIGHT) {
			this.setTheme(THEME_DARK)
			this.themeEffect()
			return
		}

		this.setTheme(THEME_LIGHT)
		this.themeEffect()
	}

	themeEffect() {
		const currentTHeme = this.getTheme()
		walletController.updateTheme(UPPER_CASE_THEME[currentTHeme])
	}

}

const THEME_LIGHT = 'light'

const THEME_DARK = 'dark'


const UPPER_CASE_THEME = {
	[THEME_LIGHT]: 'LIGHT',
	[THEME_DARK]: 'DARK',
}
