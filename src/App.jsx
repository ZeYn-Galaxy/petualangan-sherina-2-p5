import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Sinopsis from './assets/components/Sinopsis'
import Thumbnail from './assets/images/Thumbnail.jpeg'
import Sherina_Munaf from './assets/images/Sherina_Munaf.png'
import Derby_Romero from './assets/images/Derby-Romero.webp'
import Ardit_Ermandha from './assets/images/Ardit-Erwandha.jpg'
import Quinn_Salman from './assets/images/Quinn-Salman.jpeg'
import Isyana_Sarasvati from './assets/images/Isyana_Sarasvati.jpeg'
import Kelly_Tandiono from './assets/images/Kelly-Tandiono.jpg'
import Tokoh from './assets/components/Tokoh'
import Dimensi from './assets/components/Dimensi'
import Posnev from './assets/components/Posnev'
function App() {
  const [pemeran, setPemeran] = useState([
    {
      "Pemeran": "Sherina Munaf",
      "Nama": "Sherina",
      "Image": Sherina_Munaf,
      "Deskripsi": "Test"
    },
    {
      "Pemeran": "Derby Romero",
      "Nama": "Sadam",
      "Image": Derby_Romero,
      "Deskripsi": "Test"
    },
    {
      "Pemeran": "Ardit Erwandha",
      "Nama": "Aryo",
      "Image": Ardit_Ermandha,
      "Deskripsi": "Test"
    },
    {
      "Pemeran": "Quinn Salman",
      "Nama": "Sindai",
      "Image": Quinn_Salman,
      "Deskripsi": "Test"
    },
    {
      "Pemeran": "Isyana Sarasvati",
      "Nama": "Ratih Syailendra",
      "Image": Isyana_Sarasvati,
      "Deskripsi": "Test"
    },
    {
      "Pemeran": "Kelly Tandiono",
      "Nama": "Pingkan",
      "Image": Kelly_Tandiono,
      "Deskripsi": "Test"
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="container overflow-x-hidden">
        <Sinopsis Thumbnail={Thumbnail} />
        <Tokoh data={pemeran} />
        <Dimensi />
        <Posnev />
        <div className='row'>
          <div className="my-3 col-12 d-flex justify-content-center">
            <span>Copyright &copy; 2023 ZeYn-Galaxy</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
