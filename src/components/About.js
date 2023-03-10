import i18n from 'i18next'
import styled from 'styled-components'
import { useTranslation, initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				aboutMe:
					"Hey! \n\nMy name is Yulia. I am an elementary school teacher by education and I have a lot of experience working with children. Since childhood, I dreamed of becoming an artist. \n\nI love bringing joy to people and seeing smiles on their faces. \nFor more than ten years I have been organizing children's and adult holidays and find an approach to absolutely any child. \nTogether with you, we draw up the plot of your holiday, which includes the invitation of an animator - your favorite character with bright props, incredibly incendiary contests, fun music and funny text. \nYou can also add additional services: \n\n1. Figures from balloons \n2. Face painting elements \n3. Photographing for the memory of the holiday \n4. And a delicious cake in the style of the chosen theme of the holiday. \n\nWith us, your event will be filled with positive emotions and vivid sensations. I can't wait to meet you",
			},
		},
		ru: {
			translation: {
				обоМне:
					'Привет! \n\nМеня зовут Юля. По образованию я -педагог младших классов и у меня есть большой опыт работы с детьми. С детства я мечтала стать артисткой. \n\nЯ обожаю приносить людям радость и видеть на их лицах улыбки. \nУже более десяти лет я занимаюсь организацией детских и взрослых праздников и нахожу подход к абсолютно любому ребёнку. \nС Вами вместе мы составляем сюжет Вашего праздника, в который включается приглашение аниматора - любимого Вашего персонажа с ярким реквизитом, невероятно зажигательными конкурсами, весёлой музыкой и смешным текстом. \nТакже Вы можете добавить дополнительные услуги: \n\n1. Фигуры из шариков \n2. Элементы аквогрима \n3. Фотографирование на память о празднике \n4. И вкуснейший торт в стиле выбранной темы праздника. \n\nС нами Ваш праздник наполнится позитивными эмоциями и яркими ощущениями. Не могу дождаться встречи с Вами.',
			},
		},
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: { escapeValue: false },
})

const profileImage =
	'https://res.cloudinary.com/dsdwopq7c/image/upload/v1674336354/photo_2023-01-21_16-25-02_xkp7kn.jpg'

export default function About({ currentLanguage }) {
	const { t } = useTranslation()

	return (
		<MainContainer className='container mt-lg-5' style={{ zIndex: 100 }}>
			<div className='row'>
				<div className='col-sm mb-5'>
					<div className='text-center d-block pt-4 pt-md-0'>
						<img
							className='img-fluid rounded-circle float-left w-75'
							src={profileImage}
							alt='profile image'
						/>
					</div>
				</div>
				<div className='col-sm'>
					<AboutText className='lead'>
						{currentLanguage === 'EN' ? t('aboutMe') : t('обоМне')}
					</AboutText>
				</div>
			</div>
		</MainContainer>
	)
}

const MainContainer = styled.div`
	background-image: url('https://res.cloudinary.com/dsdwopq7c/image/upload/v1674599852/271-2711777_birthday-celebration-background-png-birthday-balloons-render_wcce0t.png');
	background-size: cover;
	background-position: top;
`

const AboutText = styled.p`
	background: #dcd9d4;
	padding: 2rem;
	-webkit-box-shadow: 0px 10px 11px -10px #000000;
	box-shadow: 0px 10px 11px -10px #000000;
`
