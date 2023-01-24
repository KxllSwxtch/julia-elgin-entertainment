import styled from 'styled-components'

const birthdayPackageURL =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674577096/photo_2023-01-24_11-18-03_pu1oui.jpg'

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
			<PackagesContainer className='container mb-4'>
				<div className='row mt-4'>
					<div className='col'></div>
					<h1>
						Packages <span className='text-muted text-inline'>we offer</span>
					</h1>
					<div className='col mt-2'>
						<img
							className='img-fluid w-25 rounded bPackageImage pb-4'
							src={birthdayPackageURL}
							alt='birthday package'
						/>
					</div>
				</div>
			</PackagesContainer>
		</div>
	)
}

const MainContainer = styled.div`
	padding: 0 10px;

	.firstImage {
		margin-bottom: 40px;
	}
`

const PackagesContainer = styled.div`
	.bPackageImage {
		@media screen and (max-width: 576px) {
			width: 70% !important;
			margin: 0 auto !important;
			display: block;
		}
	}
`

const Img = styled.img`
	@media screen and (max-width: 576px) {
		width: 100% !important;
	}
`
