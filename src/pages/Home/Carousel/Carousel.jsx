import img1 from "../../../assets/img/carosel/img1.jpg";
import img2 from "../../../assets/img/carosel/img2.jpg";
import img3 from "../../../assets/img/carosel/img3.jpg";
import img4 from "../../../assets/img/carosel/img4.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full " />

        <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ml-32">
          <div className=" text-white">
            <p className="text-4xl mb-3">
              To have another <br />
              language is to possess <br />a second soul.
            </p>
            <button className="btn btn-xs">SignUp Now</button>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ml-32">
          <div className=" text-white">
            <p className="text-4xl mb-3">
              Putting Children First.
              <br />
              Preparing Children For <br />
              Success In Life
            </p>
            <button className="btn btn-xs">SignUp Now</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ml-32">
          <div className=" text-white">
            <p className="text-4xl mb-3">
              To have another <br />
              language is to possess <br />a second soul.
            </p>
            <button className="btn btn-xs">SignUp Now</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ml-32">
          <div className=" text-white">
            <p className="text-4xl mb-3">
              Every student matters,
              <br />
              every moment counts.
            </p>
            <button className="btn btn-xs">SignUp Now</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
