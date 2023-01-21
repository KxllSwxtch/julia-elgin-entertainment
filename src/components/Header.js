const headerImage = '../images/balloons.png'

export default function Header() {
	return (
		<header className='container mt-4 mb-4'>
			<img src={headerImage} alt='header image' />
			<h1>YuliaTheClown</h1>
		</header>
	)
}
