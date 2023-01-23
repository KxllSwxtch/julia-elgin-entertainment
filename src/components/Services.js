import styled from 'styled-components'

export default function Services() {
	return (
		<div className='container-fluid' style={{ padding: 0 }}>
			<MainContainer>
				<Img
					src='https://res.cloudinary.com/dsdwopq7c/image/upload/v1674323795/photo_2023-01-21_12-32-02_fxszge.jpg'
					alt='service 1'
					className='firstImage w-50 rounded'
				/>
				<Img
					src='https://res.cloudinary.com/dsdwopq7c/image/upload/v1674323795/photo_2023-01-21_12-31-40_fxezja.jpg'
					alt='service 2'
					className='w-50 rounded secondImage'
				/>
			</MainContainer>
		</div>
	)
}

const MainContainer = styled.div`
	padding: 0 10px;

	.firstImage {
		margin-bottom: 40px;
	}
`

const Img = styled.img`
	@media screen and (max-width: 576px) {
		width: 100% !important;
	}
`
