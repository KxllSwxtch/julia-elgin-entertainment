import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

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
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1675091418/photo_2_2023-01-30_10-09-35_cbwqud.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1675091418/photo_1_2023-01-30_10-09-35_qutakw.jpg',
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1675091418/photo_5_2023-01-30_10-09-35_pdrv7t.jpg',
]

export default function Header() {
	return (
		<div className='container-fluid mb-5' style={{ padding: 0 }}>
			<StyledCarousel className='d-flex' variant='dark' indicators={false}>
				{images.map((url, idx) => (
					<StyledCarousel.Item interval={1000} key={idx}>
						<img className='d-block w-100' src={url} alt='image' />
					</StyledCarousel.Item>
				))}
			</StyledCarousel>
		</div>
	)
}

const StyledCarousel = styled(Carousel)`
	width: 60%;
	margin: 0 auto;
	border-radius: 3px !important;

	.carousel-inner {
		img {
			width: 100%;
			object-fit: cover;
		}

		@media screen and (min-width: 992px) {
			height: 500px;
		}
	}

	@media screen and (max-width: 576px) {
		width: 100%;
	}
`
