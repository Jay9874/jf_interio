import { useNavigate } from 'react-router-dom'
import './catalogcard.css'

export default function CatalogCard ({ name, img, btnText, url }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  }
  return (
    <div className='bedroom-catalogue-card' onClick={handleClick}>
      <div className='bedroom-catalogue-name'>
        <h3>{name}</h3>
      </div>
      <div className='bedroom-catalogue-img-container'>
        <div className='bedroom-catalogue-img'>
          <img src={img} alt='wardrobe' />
        </div>
      </div>
      <div className='catalogue-card-goto-cont'>
        <div className='catalogue-card-goto'>
          <p>{btnText}</p>
          <a href={url}>
            <div className='bedroom-catalogue-btn'>
              <ion-icon name='arrow-forward-outline'></ion-icon>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
