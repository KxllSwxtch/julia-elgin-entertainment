import styled from 'styled-components'

const headerImage =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674336412/ec4841185ae8e32d044644c12084c648_utjjdp.png'

const logoImage =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674495149/Yellow_Kids_Star_Celebration_Hall_Logo_ocgy7g.png'

export default function Header({ changeLanguage, currentLanguage }) {
	return (
		<header className='container mt-4 mb-4'>
			<div
				className='overflow-hidden position-absolute d-sm-none d-md-block'
				style={{ top: -320, width: '100%', zIndex: '-1', right: 50 }}
			>
				<img
					src={headerImage}
					alt='header image'
					className='img-fluid overflow-hidden d-sm-none d-md-block'
				/>
			</div>
			<div className='text-center pt-lg-5'>
				<StyledLogo src={logoImage} alt='logo' width='40%' />
				<div>
					<StyledBtn className='btn btn-success' onClick={changeLanguage}>
						{currentLanguage}
					</StyledBtn>
				</div>
			</div>
		</header>
	)
}

const StyledBtn = styled.button`
	float: left;
	@media screen and (max-width: 576px) {
		float: left !important;
	}
`

const StyledLogo = styled.img`
	margin-bottom: -40px !important;

	@media screen and (max-width: 576px) {
		margin-top: -50px;
		width: 70%;
	}
`
