import { useState } from 'react'
import ImageFrame1 from './Components/ImageFrame1'
import ImageFrame2 from './Components/ImageFrame2'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { OpenCvProvider, useOpenCv } from 'opencv-react'

function App() {
  const data = useOpenCv()
  const [image, SetImage] = useState(false)

  return (
    <>
    <Header/>
      <div style={{width:"90vw",height:"90vh"}} className='d-flex justify-content-around align-items-center '>
        <div className='d-flex flex-column justify-content-center gap-2'>
        <ImageFrame1 image={image} />
        <input style={{display:"none"}} type="file" id='file' onChange={(e)=>SetImage(e.target.files[0])} />
        <button className='btn btn-outline-primary'>
        <label  htmlFor="file">Upload</label>
        </button>
        </div>
        <OpenCvProvider openCvPath='/opencv/opencv.js'>
        <ImageFrame2 image={image} />
        </OpenCvProvider>
      </div>
      <Footer/>
    </>
  )
}

export default App
