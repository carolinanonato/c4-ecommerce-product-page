import React from 'react'
import imagemain from '../images/image-product-1.jpg'
import thumb1 from '../images/image-product-1-thumbnail.jpg'
import thumb2 from '../images/image-product-2-thumbnail.jpg'
import thumb3 from '../images/image-product-3-thumbnail.jpg'
import thumb4 from '../images/image-product-4-thumbnail.jpg'

function ProductPictures() {
    return (
        <div className='product-images'>
            <div className="main">
                <img className="main-img" src={imagemain} alt="" />
            </div>
            <div className="thumbs">
                <img className="thumbs-img" src={thumb1} alt="" />
                <img className="thumbs-img" src={thumb2} alt="" />
                <img className="thumbs-img" src={thumb3} alt="" />
                <img className="thumbs-img" src={thumb4} alt="" />
            </div>


        </div>
    )
}

export default ProductPictures