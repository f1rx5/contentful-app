import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id rerum a saepe vero hic ducimus, recusandae totam placeat magni eveniet facilis exercitationem consectetur, ipsum ratione inventore! Odio, nesciunt id. Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam dolor repudiandae atque id voluptas quod eaque sint pariatur voluptatibus!</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="women and the browser"  className='img'/>
            </div>
        </div>
    </section>
  )
}
export default Hero