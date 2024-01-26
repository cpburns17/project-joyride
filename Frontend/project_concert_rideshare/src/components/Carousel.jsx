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
                      src="https://silverbirchesresortpa.com/wp-content/uploads/2018/04/GettyImages-699803744-e1522763547696-1492x609.jpg"
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
                      src="https://www.okayplayer.com/media-library/the-best-nyc-summer-food-festivals-and-book-fairs.png?id=34156783&width=1245&height=700&quality=90&coordinates=0%2C146%2C0%2C0"
                      alt="Third slide"
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
                      src="https://i.pinimg.com/originals/f4/af/52/f4af520b9e228fae33185cbad2654983.jpg"
                      alt="Fourth slide"
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