import styled from 'styled-components'

const instagramLink = 'https://instagram.com/yuliatheclown?igshid=ZDdkNTZiNTM='

export default function Footer({ currentLanguage }) {
	return (
		<footer className='container mb-5'>
			<div className='row'>
				<div className='col'>
					<h1 className='pb-3'>
						{currentLanguage === 'EN' ? 'My contacts' : 'Мои Контакты'}
					</h1>
				</div>
				<div className='col'>
					<h2 className='mb-3'>
						<i className='bi bi-phone'></i> 902-471-1601
					</h2>
					<h2 className='mb-3'>
						<i className='bi bi-envelope'></i> yulia.clown@gmail.com
					</h2>
					<h2 className='mb-3'>
						<i className='bi bi-instagram'></i>{' '}
						<a className='link-success' href={instagramLink}>
							YuliaTheClown
						</a>
					</h2>
				</div>
			</div>
		</footer>
	)
}
