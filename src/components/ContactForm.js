import { useState } from 'react'
import emailjs from '@emailjs/browser'

const backgroundImage =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674338067/photo_2023-01-21_09-37-15_tk6ihx.jpg'

export default function ContactForm() {
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

		// TODO: FINISH

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
			<form
				className='container'
				style={{ width: '60%' }}
				onSubmit={handleSubmit}
			>
				<h1 className='mb-3'>Contact Me for Quotes</h1>
				<div className='form-group mb-4'>
					<label htmlFor='emailInput'>Email address</label>
					<input
						type='email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						className='form-control'
						aria-describedby='emailHelp'
						placeholder='Enter email'
						required
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='phoneInput'>Phone Number</label>
					<input
						type='tel'
						pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
						value={phone}
						onChange={(event) => setPhone(event.target.value)}
						className='form-control'
						aria-describedby='phoneHelp'
						placeholder='Enter phone (e.g. 111-444-5555)'
						required
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='nameInput'>Your Name</label>
					<input
						type='text'
						value={name}
						onChange={(event) => setName(event.target.value)}
						className='form-control'
						placeholder='Enter name'
						required
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='ageInput'>How old is the birthday person?</label>
					<input
						type='number'
						value={age}
						onChange={(event) => setAge(event.target.value)}
						className='form-control'
						placeholder='Enter age'
						min={1}
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='guestsInput'>
						How many guests will be at the party?
					</label>
					<input
						type='number'
						value={nGuests}
						onChange={(event) => setNGuests(event.target.value)}
						className='form-control'
						placeholder='Enter number of guests'
						min={1}
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='partyLocationInput'>Where is the party?</label>
					<input
						type='text'
						value={location}
						onChange={(event) => setLocation(event.target.value)}
						className='form-control'
						placeholder='Enter the address'
					/>
				</div>
				<div className='form-group mb-4'>
					<label htmlFor='themeInput'>What is the theme of the party?</label>
					<input
						type='text'
						value={theme}
						onChange={(event) => setTheme(event.target.value)}
						className='form-control'
						placeholder='Enter the theme'
					/>
				</div>
				<h2 className='mt-3 d-block'>Any additional services?</h2>
				<div className='form-check mb-4'>
					<label htmlFor='facePaint'>Face Painting</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setFacePainting(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='cakeBake'>Cake Baking</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setCakeBake(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='balloonTwist'>Balloon Twist</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setBalloonTwist(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='photosOnMagnet'>Photos on magnet</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setPhotosOnMagnet(event.target.checked)}
					/>
				</div>
				<div className='form-check mb-4'>
					<label htmlFor='photographer'>Photographer</label>
					<input
						type='checkbox'
						className='form-check-input'
						onChange={(event) => setPhotographer(event.target.checked)}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	)
}
