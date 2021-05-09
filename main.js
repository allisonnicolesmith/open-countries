window.onload = function () {

	const tabs = document.querySelectorAll('.tab')
	const panels = document.querySelectorAll('.tabpanel')

	const onTabClick = function () {
		if (this.classList.contains('active')) {
			return false
		}

		// Switch tab
		tabs.forEach(tab => tab.classList.remove('active'))
		this.classList.add('active')

		// Switch panel
		panels.forEach(panel => panel.classList.remove('active'))
		const panelId = this.getAttribute('data-panel')
		document.getElementById(panelId).classList.add('active')
	}

	tabs.forEach(tab => {
		tab.addEventListener('click', onTabClick)
	})

}