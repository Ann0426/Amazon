import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return ( <
        div className = "home" >
        <
        div className = "home__container" >
        <
        img className = "home__image"
        src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt = "" /
        >

        <
        div className = "home__row" >
        <
        Product id = "12321341"
        title = "Tangled"
        price = { 100 }
        rating = { 5 }
        image = "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_UY1200_CR89,0,630,1200_AL_.jpg" /
        >
        <
        Product id = "49538094"
        title = "Frozen"
        price = { 239.0 }
        rating = { 4 }
        image = "https://allears.net/wp-content/uploads/2020/01/2020-Frozen-2-Preorder-DVD-Blue-Ray-4.jpg" /
        >
        <
        /div>

        <
        div className = "home__row" >
        <
        Product id = "4903850"
        title = "The little Mermaid"
        price = { 199.99 }
        rating = { 3 }
        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" /
        >
        <
        Product id = "23445930"
        title = "Toy Story 4"
        price = { 98.99 }
        rating = { 5 }
        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" /
        >
        <
        Product id = "3254354345"
        title = "The Lion King"
        price = { 598.99 }
        rating = { 4 }
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhvwCg5iTmUnJ5Uft2jtUaKFVjZmr9xHhn4A&usqp=CAU" /
        >
        <
        /div>

        <
        div className = "home__row" >
        <
        Product id = "90829332"
        title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
        price = {-1000 }
        rating = { 4 }
        image = "https://decider.com/wp-content/uploads/2020/08/mulan-2020-2.jpg?quality=80&strip=all" /
        >
        <
        /div> < /
        div > <
        /div>
    );
}

export default Home;