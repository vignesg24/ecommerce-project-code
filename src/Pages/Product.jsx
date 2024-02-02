import  { React,useContext } from "react";
import {ShopContext} from '../Context/ShopContext'
import { useParams } from "react-router-dom";
import Breadcram from "../Components/breadcram/BreadCram";
import Productdisplay from "../Components/productdisplay/ProductDisplay";
import DescriptionBox from "../Components/description box/Description";
import RelatedProducts from "../Components/relaedproducts/RelatedProducts";
export default function Product(){
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));    
    return(
        <div>
            <Breadcram product={product} />
            <Productdisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}