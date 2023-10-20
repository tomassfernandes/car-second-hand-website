import { Swiper, SwiperSlide } from "swiper/react";
import { Element } from "react-scroll";

export default function Testimonials() {
  const testimonailsEl = [
    {
      photo: "/img/testimonial-1.webp",
      name: "James Mitchell",
      review:
        "I recently purchased the Apex X-500, and I must say it's been a thrilling experience. The sleek design caught my eye right away, and the performance did not disappoint. The car handles beautifully, and its powerful engine provides a real adrenaline rush. The interior is luxurious, and the tech features are top-notch. My only quibble is with the fuel efficiency, but the sheer joy of driving this car makes up for it. Overall, a fantastic ride!",
      rating: 4,
    },

    {
      photo: "/img/testimonial-2.webp",
      name: "Sarah Patterson",
      review:
        "The ThunderDrive EV has completely changed my perception of electric cars. Not only is it environmentally friendly, but it's also incredibly fun to drive. The instant torque makes acceleration a breeze, and the silent operation is a game-changer. The range on this car is impressive, and I rarely worry about running out of battery. The modern, minimalist interior is a joy to be in, and the touch-screen controls are intuitive. I can't recommend this car enough!",
      rating: 5,
    },

    {
      photo: "/img/testimonial-3.webp",
      name: "Michael Reynolds",
      review:
        "The UrbanRover 4x4 is a decent vehicle, but it didn't quite live up to my expectations. It's rugged and handles off-road terrain well, but it lacks some of the modern features you'd expect at this price point. The interior feels a bit dated, and the fuel economy is not great. On the plus side, it's reliable and capable for outdoor adventures. If you're looking for a no-nonsense off-road vehicle and can overlook some of the shortcomings, it might be a good choice.",
      rating: 3,
    },

    {
      photo: "/img/testimonial-4.webp",
      name: "Emily Harrison",
      review:
        "The LuxoCraft S6 is the epitome of luxury and sophistication on wheels. From the moment I got behind the wheel, I felt like a VIP. The craftsmanship in the interior is astounding, with premium materials and attention to detail. The ride is silky smooth, and the array of tech features is mind-boggling. It's not just a car; it's an experience. If you're in the market for opulence, this car is an absolute winner!",
      rating: 5,
    },
  ];

  const swiperSettings = {
    slidesPerView: 1,
    pagination: { clickable: true },
  };

  return (
    <Element name="section-testimonials">
      <section className="testimonials-section">
        <p className="p">Our clients opinion</p>
        <h2 className="heading-secondary">Testimonials</h2>

        <div className="swiper-div">
          <Swiper {...swiperSettings}>
            {testimonailsEl.map((el, index) => (
              <SwiperSlide key={el.name + index}>
                <div className="testimonials-grid">
                  <div className="testimonials-div testimonial-border">
                    <img
                      className="testimonial-img"
                      src={el.photo}
                      alt={el.name + " profile image"}
                    />
                    <p>{el.name}</p>
                  </div>
                  <div className="testimonials-div">
                    <p>{el.review}</p>

                    <div className="stars-div">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <img
                          key={index}
                          className="star-img"
                          src={
                            el.rating >= index
                              ? "/svg/yellow star.png"
                              : "/svg/star-outline.png"
                          }
                          alt={
                            el.rating >= index ? "Yellow star" : "Star outline"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="testimonials-draw-div">
          <img
            className="draw-img"
            src="/img/background-draw.webp"
            alt="City in the background draw"
          />
        </div>
      </section>
    </Element>
  );
}
