const instagramLink = 'https://instagram.com/yuliatheclown?igshid=ZDdkNTZiNTM='

export default function Footer() {
	return (
		<footer className='container mb-5'>
			<div className='row'>
				<div className='col'>
					<h1 className='pb-3'>My contacts</h1>
				</div>
				<div className='col'>
					<h3 className='mb-3'>
						<i className='bi bi-phone'></i> 902-471-1601
					</h3>
					<h3 className='mb-3'>
						<i className='bi bi-envelope'></i> Yulia.clown@gmail.com
					</h3>
					<h3 className='mb-3'>
						<i className='bi bi-instagram'></i>{' '}
						<a href={instagramLink}>YuliaTheClown</a>
					</h3>
				</div>
			</div>
		</footer>
	)
}
