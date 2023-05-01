import React from 'react'

const ImageFrame1 = ({image}) => {
  return (
    <div>
        {image?
        <img style={{width:"240px",}} src={URL.createObjectURL(image)} alt="" />    :
        <p>Upload Image</p>
    }
    
    </div>
  )
}

export default ImageFrame1