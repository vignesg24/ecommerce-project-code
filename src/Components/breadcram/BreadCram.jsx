import React from 'react'
import './breadcram.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
export default function Breadcram(props){
    const {product}= props

    return(
        <div className="breadcram"> 
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}

        </div>
    )
}