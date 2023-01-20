import Carousel from 'react-bootstrap/Carousel'

export default function Header() {
	return (
		<div className='container-fluid' style={{ padding: 0 }}>
			<Carousel className='d-flex '>
				<Carousel.Item style={{ height: 500 }} interval={1500}>
					<img
						className='d-block w-100'
						src='https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226888/photo_2023-01-20_10-00-57_vkddcg.jpg'
						alt='image one'
					/>
				</Carousel.Item>
				<Carousel.Item style={{ height: 500 }} interval={1500}>
					<img
						className='d-block w-100'
						src='https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226887/photo_2023-01-20_10-00-48_mjxiig.jpg'
						alt='image two'
					/>
				</Carousel.Item>
				<Carousel.Item style={{ height: 500 }} interval={1500}>
					<img
						className='d-block w-100'
						src='https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226888/photo_2023-01-20_10-00-54_saok9j.jpg'
						alt='image three'
					/>
				</Carousel.Item>
				<Carousel.Item style={{ height: 500 }} interval={1500}>
					<img
						className='d-block w-100'
						src='https://res.cloudinary.com/dsdwopq7c/image/upload/v1674226888/photo_2023-01-20_10-00-53_fx849n.jpg'
						alt='image four'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}
