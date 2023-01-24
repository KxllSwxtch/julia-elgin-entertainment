import {
	Gallery,
	About,
	Header,
	Services,
	ContactForm,
	Footer,
	Description,
} from './components'
import i18n from 'i18next'
import './App.css'
import { useState } from 'react'

export default function App() {
	const [currentLanguage, setLanguage] = useState('EN')

	const changeLanguage = () => {
		if (currentLanguage === 'EN') {
			setLanguage('RU')
			i18n.changeLanguage('ru')
		} else {
			setLanguage('EN')
			i18n.changeLanguage('en')
		}
	}

	return (
		<>
			<Header
				changeLanguage={changeLanguage}
				currentLanguage={currentLanguage}
			/>
			<Description currentLanguage={currentLanguage} />
			<Gallery />
			<Services />
			<About currentLanguage={currentLanguage} />
			<ContactForm currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	)
}
