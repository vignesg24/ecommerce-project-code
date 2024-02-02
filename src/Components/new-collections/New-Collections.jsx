import React, { useState,useRef } from "react";
import './new-collections.css'
import new_collections from '../assets/new_collections'
export default function NewCollections(){
    const [price,setPrice]= useState(56);
     let couponRef =useRef('hello')


    const couponCode = ()=>{
        if(couponRef.current.value=="vignesh"){
            setPrice(Math.floor(Math.random()*50))
        }
    }

    console.log(couponRef.current);
    return (
            <div>
              <div className="new-collections">
                <h1>NEW COLLECTIONS</h1>
                <hr className="hr" />
                <div className="collections">
                  {new_collections.map((item, i) => {
                    return (    
                      <div className="item" key={i}>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <div className="item-prices">
                          <div className="item-price-new">${price}</div>
                          <div className="item-price-old">${item.old_price}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="coupon-code">
                <input type="text"  placeholder="Enter Coupon Code" ref={couponRef}  />
                <button onClick={couponCode}>APPLY</button>
              </div>
            </div>
    );
}