import imageOne from '../assets/images/one.jpg'
import imageTwo from '../assets/images/two.jpg'
import imageThree from '../assets/images/three.jpg'

function Product() {
  return (

    <div className='main-container'>
      <div className='product-container'>
        <img src={imageOne} alt="image" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className='product-container'>
        <img src={imageTwo} alt="image" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className='product-container'>
        <img src={imageThree} alt="image" />
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>

    </div>
  )
}

export default Product