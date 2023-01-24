import styled from 'styled-components'

const imageUrl =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674572722/photo_2023-01-24_10-05-00_y2fuxy.jpg'

export default function Description({ currentLanguage }) {
	const currentText =
		currentLanguage === 'EN'
			? "FunLife Entertainment Children's Party Agency - makes your birthday, New Year or any other celebration truly bright and unforgettable! We exist to professionally give positive emotions. We use bright fabulous images and always introduce something new into the organization of a children's holiday. Our scenarios and show programs are always interesting, intense, filled with exciting games and thematic workshops. We make holidays the way they should be - your holiday will be truly unique: we will write an original script, invent props, and make every child happy. Vivid impressions guaranteed"
			: 'Агентство детских праздников FunLife Entertainment – делает ваш день рождения, Новый год или любое другое торжество по-настоящему ярким и незабываемым! Мы существуем, чтобы профессионально дарить позитивные эмоции.  Мы используем яркие сказочные образы и всегда внедряем что-то новое в организацию детского праздника. Наши сценарии и шоу-программы – всегда интересные, насыщенные, наполненные увлекательными играми и тематическими мастер-классами. Мы делаем праздники такими, какими они должны быть – Ваш праздник будет по-настоящему уникальным: мы напишем оригинальный сценарий, изобретём реквизит, порадуем каждого ребёнка. Яркие впечатления гарантированы.'

	return (
		<Container className='container mb-5'>
			<div className='row'>
				<div className='col'>
					<DescriptionText className='lead rounded'>
						{currentText}
					</DescriptionText>
				</div>
				<div className='col-sm text-center'>
					<img
						className='img-fluid rounded-circle w-75'
						src={imageUrl}
						alt='image'
					/>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	margin-top: 5%;
	background-image: url('https://res.cloudinary.com/dsdwopq7c/image/upload/v1674578819/724-7247106_confetti-party-celebrate-parties-celebrations_chp0yd.png');
	background-size: contain;
	background-position: top left;

	@media screen and (max-width: 576px) {
		margin-top: 50px !important;
	}
`
const DescriptionText = styled.p`
	background: #dcd9d4;
	padding: 2rem;
	-webkit-box-shadow: 0px 10px 11px -10px #000000;
	box-shadow: 0px 10px 11px -10px #000000;
`
