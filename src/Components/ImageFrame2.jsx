import React, { useState } from 'react'


const ImageFrame2 = ({image}) => {


  const [reim, setreim]  =useState([])

  const resizeImage = (file, newWidth, newHeight) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
  
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
 
         
   

    const originalWidth = img.width;
    const originalHeight = img.height;
    const aspectRatio = originalWidth / originalHeight;

    let paddedWidth = newWidth;
    let paddedHeight = newHeight;
    let cropWidth = originalWidth;
    let cropHeight = originalHeight;
    let xOffset = 0;
    let yOffset = 0;

    if (aspectRatio < newWidth / newHeight){
      cropWidth = 0.5*originalHeight * (newWidth / newHeight);
      xOffset = (0.87*originalWidth - cropWidth) / 2;
      cropHeight = 1.2*originalWidth * (newWidth / newHeight);
      yOffset = (originalHeight - cropHeight) / 2;
    }
   

    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx.drawImage(img, xOffset, yOffset, cropWidth, cropHeight, 0, 0, newWidth, newHeight);

    canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob); 
          resolve(url);
          }, 'image/jpeg', 0.9);
        };
  
        img.onerror = (error) => {
          reject(error);
        };
      };
    });
  };
  
 
  const handleImageUpload = async (event) => {
    const file = image;
    const resizedImageUrl = await resizeImage(file, 600, 800);
  
    
    setreim(resizedImageUrl)
  };


   

  return (
    <div className='d-flex flex-column gap-2'>
    
    <img style={{width:"240px",}} src={reim} alt="" />
    <button className='btn btn-outline-success' onClick={()=>handleImageUpload()}>Crop & Resize</button>
    </div>
    // 
  )
}

export default ImageFrame2