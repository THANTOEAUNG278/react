import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contant from './contect'
import './button.css'
import Button from './button'

const photo ={
  userName:'Cristiano Ronaldo',
  photoUrl:"https://shorturl.at/krIY3",
  imageSize:100
}
function App() {
  const [count, setCount] = useState(0)
  return(
    <div className='color'>
      <div className='image'>
        <img className='photo' src={photo.photoUrl} alt="Cristiano Ronaldo"
        style={{
        width:photo.imageSize,
        height:photo.imageSize
        }}
        />
      </div>
      <div>
        <Contant/>
        <h3>about <Button/> youtube </h3>
      </div>
    </div>

  )

}

export default App
