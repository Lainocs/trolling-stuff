import { useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import profilePic from './assets/IMG_8977.jpg'
import phoenix from './assets/phoenix.png'
import akali from './assets/akali.webp'
import maman from './assets/sandrine.jpeg'

function App() {
	useEffect(() => {
		AOS.init()
	})  

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        const element = document.createElement('div')
        const trolling = document.getElementById('trolling')
        element.style.height = '100vh'
        element.style.marginTop = '50px'
        element.style.color = 'white'
        element.style.textAlign = 'center'
        element.innerHTML = 'ALLEZ !!!!!!'
        element.style.fontSize = '100px'
        trolling.appendChild(element)

        if (scrollTop > 100000) {
          const message = document.createElement('p')
          message.innerHTML = 'Je suis également un grand fan de jeux vidéo, de musique et de cinéma.'
          trolling.appendChild(message)
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



	return (
		<>
			<div className='container min-h-screen flex flex-col justify-center items-center'>
				{/* fade out after scrolling */}
				<img
					src={profilePic}
					alt='profile'
					className='rounded-full mx-auto my-8 w-1/2'
					data-aos='fade-down'
					data-aos-duration='1000'
				/>
				<h1
					className='text-4xl text-center'
					data-aos='fade-right'
					data-aos-duration='1000'
				>
					Nicolas de Garrigues
				</h1>
				<h2
					className='text-2xl text-center'
					data-aos='fade-left'
					data-aos-duration='1000'
				>
					Étudiant (je crois)
				</h2>
			</div>

			<div className='container w-screen min-h-screen flex flex-col justify-center items-center'>
				<h3
					className='text-2xl my-4'
					data-aos='fade-right'
					data-aos-duration='1000'
				>
					À propos de moi
				</h3>
				<p
					className='text-xl my-4'
					data-aos='fade-left'
					data-aos-duration='1000'
				>
					Je m'appelle Nicolas de Garrigues, j'ai 20 ans et je suis étudiant en
					informatique à l'Université de Montréal. Je suis passionné par
					l'informatique et les nouvelles technologies en général. Je suis
					également un grand fan de jeux vidéo, de musique et de cinéma.
				</p>

				<p
					className='sm:text-xl my-4' 
					data-aos='fade-right'
					data-aos-duration='1000'
				>
					Ce texte a été généré par Copilot. Bien que je sois méga cool, je n'ai
					pas 20 ans et je ne suis pas étudiant en informatique à l'Université
					de Montréal. Je ne suis pas non plus passionné par l'informatique et
					les nouvelles technologies en général. Je ne suis pas non plus un
					grand fan de jeux vidéo, de musique et de cinéma.
				</p>

				<p
					className='text-xl my-4'
					data-aos='fade-left'
					data-aos-duration='1000'
				>
					La ligne au-dessus a aussi été génénée. En vrai je suis un grand fan
					de jeux vidéo, de musique et de cinéma.
				</p>
				<p
					className='text-xl my-4'
					data-aos='fade-right'
					data-aos-duration='1000'
				>
					Je suis également un grand fan de jeux vidéo, de musique et de cinéma.
				</p>
				<p
					className='text-xl my-24'
					data-aos='fade-left'
					data-aos-duration='1000'
				>
					Voici des photos contractuelles de ce que j'aime :
				</p>
				<div className='flex justify-center items-end flex-wrap w-full' data-aos='fade-down' data-aos-duration='1000'>
					<div data-aos='fade-down' data-aos-duration='1000' className='flex flex-col justify-center items-center sm:w-1/3 w-full'>
						<img
							src={phoenix}
							alt='phoenix'
							className='mx-auto my-8 w-1/2'
							data-aos='fade-down'
							data-aos-duration='1000'
						/>
						<p className='text-center'>Le Gouda</p>
					</div>
					<div data-aos='fade-down' data-aos-duration='1000' className='flex flex-col justify-center items-center sm:w-1/3 w-full'>
						<img
							src={akali}
							alt='akali'
							className='mx-auto my-8 w-1/2'
							data-aos='fade-down'
							data-aos-duration='1000'
						/>
						<p className='text-center'>
							L'odeur de l'herbe coupée
						</p>
					</div>
					<div data-aos='fade-down' data-aos-duration='1000' className='flex flex-col justify-center items-center sm:w-1/3 w-full'>
						<img
							src={maman}
							alt='maman'
							className='mx-auto my-8 w-1/2'
							data-aos='fade-down'
							data-aos-duration='1000'
						/>
            <p>Ma maman (à gauche)</p>
					</div>
				</div>
			</div>

			<div className='container w-screen min-h-screen flex flex-col justify-center items-center'>
				<p
					className='text-xl my-4'
					data-aos='fade-left'
					data-aos-duration='1000'
				>
					Je vous propose maintenant de scroller en bas de cette page pour
					retrouver mon nindo.
				</p>
			</div>
      <div id='trolling'></div>
		</>
	)
}

export default App
