import React from "react";
import Hero from "../Components/Hero/Hero";
import Propular from "../Components/propular/Propular";
import Offer from "../Components/Offer/Offer";
import NewCollections from "../Components/new-collections/New-Collections";
import NewsLetter from "../Components/newlatter/News-Latter";
export default function Shop(){
    return(
        <div>
            <Hero />
            <Propular />
            <Offer />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}