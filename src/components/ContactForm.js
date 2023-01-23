import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm({ currentLanguage }) {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [name, setName] = useState('')
	const [age, setAge] = useState(1)
	const [nGuests, setNGuests] = useState(1)
	const [location, setLocation] = useState('')
	const [theme, setTheme] = useState('')
	const [facePaint, setFacePainting] = useState(false)
	const [cakeBake, setCakeBake] = useState(false)
	const [balloonTwist, setBalloonTwist] = useState(false)
	const [photosOnMagnet, setPhotosOnMagnet] = useState(false)
	const [photographer, setPhotographer] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()

		console.log({
			email,
			name,
			age,
			nGuests,
			location,
			theme,
			facePaint,
			cakeBake,
			balloonTwist,
			photosOnMagnet,
			photographer,
			phone,
		})
	}

	return (
		<div className='container-fluid pt-5 pb-5 mb-5 formContainer'>
			<form className='container' onSubmit={handleSubmit}>
				<h1 className='mb-3'>
					{currentLanguage === 'EN' ? 'Contact Me' : 'Напишите мне напрямую'}
				</h1>
				<div className='form-group mb-4'>
					<label htmlFor='emailInput'>
						{currentLanguage === 'EN' ? 'Email' : 'Почта'}
					</label>
					<input
						type='email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						className='form-control'
						aria-describedby='emailHelp'
						placeholder={
							currentLanguage === 'EN' ? 'Enter Email' : 'Введите Почту'
						}
						required
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='phoneInput'>
						{currentLanguage === 'EN' ? 'Phone Number' : 'Номер Телефона'}
					</label>
					<input
						type='tel'
						pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
						className='form-control'
						aria-describedby='phoneHelp'
						placeholder={
							currentLanguage === 'EN'
								? 'Enter phone (e.g. 111-444-5555)'
								: 'Введите номер телефона (111-444-5555)'
						}
						required
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='nameInput'>
						{currentLanguage === 'EN' ? 'Your Name' : 'Ваше Имя'}
					</label>
					<input
						type='text'
						value={name}
						onChange={(event) => setName(event.target.value)}
						className='form-control'
						placeholder={
							currentLanguage === 'EN' ? 'Enter name' : 'Введите Имя'
						}
						required
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='ageInput'>
						{currentLanguage === 'EN'
							? 'How old is the birthday person?'
							: 'Сколько лет имениннику?'}
					</label>
					<input
						type='number'
						value={age}
						onChange={(event) => setAge(event.target.value)}
						className='form-control'
						placeholder={
							currentLanguage === 'EN' ? 'Enter age' : 'Введите возраст'
						}
						min={1}
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='guestsInput'>
						{currentLanguage === 'EN'
							? 'How many guests will be at the party?'
							: 'Сколько человек будет на вечеринке?'}
					</label>
					<input
						type='number'
						value={nGuests}
						onChange={(event) => setNGuests(event.target.value)}
						className='form-control'
						placeholder={
							currentLanguage === 'EN'
								? 'Enter number of guests'
								: 'Введите количество гостей'
						}
						min={1}
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='partyLocationInput'>
						{currentLanguage === 'EN'
							? 'Where is the party?'
							: 'Адрес мероприятия'}
					</label>
					<input
						type='text'
						value={location}
						onChange={(event) => setLocation(event.target.value)}
						className='form-control'
						placeholder={
							currentLanguage === 'EN' ? 'Enter the address' : 'Введите адрес'
						}
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='themeInput'>
						{currentLanguage === 'EN'
							? 'What is the theme of the party?'
							: 'Тема Мероприятия?'}
					</label>
					<input
						type='text'
						value={theme}
						onChange={(event) => setTheme(event.target.value)}
						className='form-control'
						placeholder={
							currentLanguage === 'EN' ? 'Enter the theme' : 'Введите тематику'
						}
					/>
				</div>
				<h2 className='mt-3 d-block'>
					{currentLanguage === 'EN'
						? 'Any additional services?'
						: 'Дополнительные Услуги?'}
				</h2>
				<div className='form-check mb-4'>
					<label htmlFor='facePaint'>
						{currentLanguage === 'EN' ? 'Face Painting' : 'Аквагрим'}
					</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setFacePainting(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='cakeBake'>
						{currentLanguage === 'EN' ? 'Cake Baking' : 'Торт'}
					</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setCakeBake(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='balloonTwist'>
						{currentLanguage === 'EN' ? 'Balloon Twist' : 'Шары'}
					</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setBalloonTwist(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='photosOnMagnet'>
						{currentLanguage === 'EN' ? 'Photos on magnet' : 'Фото на магните'}
					</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setPhotosOnMagnet(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='photographer'>
						{currentLanguage === 'EN' ? 'Photographer' : 'Фотограф'}
					</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setPhotographer(event.target.checked)}
					/>
				</div>
				<div>
					<button type='submit' className='btn btn-success w-100'>
						{currentLanguage === 'EN' ? 'Submit' : 'Отправить'}
					</button>
				</div>
			</form>
		</div>
	)
}
