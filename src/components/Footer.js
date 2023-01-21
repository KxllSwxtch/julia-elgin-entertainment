const instagramLink = 'https://instagram.com/yuliatheclown?igshid=ZDdkNTZiNTM='

export default function Footer() {
	return (
		<footer className='container mb-5'>
			<h1 className='pb-3'>My contacts</h1>
			<div>
				<h3>
					<i class='bi bi-phone'></i> 902-471-1601
				</h3>
				<h3>
					<i class='bi bi-envelope'></i> Yulia.clown@gmail.com
				</h3>
				<h3>
					<i class='bi bi-instagram'></i>{' '}
					<a href='https://www.instagram.com/yuliatheclown/?igshid=ZDdkNTZiNTM%3D'>
						YuliaTheClown
					</a>
				</h3>
			</div>
		</footer>
	)
}
