import React from "react";

function Carousel({ title, text }) {

    
return (
    <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
    >
        <ol class="carousel-indicators">
            <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    class="d-block w-100"
                    src="https://www.securitymagazine.com/ext/resources/rideshare.jpg?1567958057"
                    alt="First slide"
                    style={{ height: "500px", objectFit: "cover" }}
                ></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2023/06/25072701/revel2-1024x752.jpg"
                    alt="Second slide"
                    style={{ height: "500px", objectFit: "cover" }}
                ></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="https://www.bankrate.com/2022/09/08105058/rideshare-safety-statistics.jpg?auto=webp&optimize=high"
                    alt="Third slide"
                    style={{ height: "500px", objectFit: "cover" }}
                ></img>
                <div class="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
        <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
        >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
        >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
    </div>
);
}

export default Carousel;