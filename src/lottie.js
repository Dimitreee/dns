;(function () {
	let sunLottie = document.getElementById('sunLottie')
	let moonLottie = document.getElementById('moonLottie')

	let themeButton = document.getElementById('lottie-button')

	if (themeController.getTheme() === 'light') {
		sunLottie.seek(31)
	} else {
		moonLottie.seek(31)
	}

	if (themeButton) {
		themeButton.addEventListener('click', function () {
			if (themeController.getTheme() === 'light') {
				sunLottie.setDirection(1)
				sunLottie.play()
				moonLottie.stop()
				return
			}

			moonLottie.setDirection(1)
			moonLottie.play()
			sunLottie.stop()
		})
	}
})()
