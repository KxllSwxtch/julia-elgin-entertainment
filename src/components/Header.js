const headerImage =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674336412/ec4841185ae8e32d044644c12084c648_utjjdp.png'

const logoImage =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674339653/Beige_Glasses_Clowns_and_Party_Needs_Logo-2_jdynvl.png'

export default function Header() {
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
				<img src={logoImage} alt='logo' width='40%' />
			</div>
		</header>
	)
}
