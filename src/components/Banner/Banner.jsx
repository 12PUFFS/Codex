import "./Banner.css"
import home from '../../assets/image/image.png'; 

function Banner() {
  return (
    <div className="intro">
        <div className="container">
        <div className="banner-hero">
           <div className="banner-text">
           <h1>
            Buy, rent, or sell <br />
            your property <br />
                  easily
                 </h1>
           </div>
           <img className="home" src={home} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Banner
