import Carousel from 'react-bootstrap/Carousel'

const images = [
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226888/photo_2023-01-20_10-00-57_vkddcg.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226887/photo_2023-01-20_10-00-48_mjxiig.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226888/photo_2023-01-20_10-00-54_saok9j.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226888/photo_2023-01-20_10-00-53_fx849n.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226887/photo_2023-01-20_10-00-42_imy5ld.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226887/photo_2023-01-20_10-00-46_ybzxis.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674339073/photo_2023-01-21_09-37-45_ptmrri.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674339073/photo_2023-01-21_09-37-15_2_br7ydx.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674338067/photo_2023-01-21_09-37-15_tk6ihx.jpg',
]

export default function Header() {
	return (
		<div className='container-fluid' style={{ padding: 0 }}>
			<Carousel className='d-flex' variant='dark'>
				{images.map((url, idx) => (
					<Carousel.Item interval={1000} key={idx} style={{ height: '20%' }}>
						<img className='d-block w-100' src={url} alt='image' />
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	)
}
