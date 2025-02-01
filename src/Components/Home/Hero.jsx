import reactImag from "/images/react.png"; 
import nextimg from "/images/nextjs.png"; 
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="Hero block overflow-hidden bg-gray-800 pt-10 mt-1 ">
      <div className="banner  lg:flex items-center justify-center">  
        <div className="w-full pl-[5vw] text-green-400 space-y-3">
          <main className="hero-container sm:flex">
            <p>We're 👋 Provide</p>
            <section className="animation">
              <div className="first">
                <div>Sale upto 30%</div>
              </div>
              <div className="second">
                <div>New update</div>
              </div>
              <div className="third">
                <div>Top Courses</div>
              </div>
            </section>
          </main>
          <p>

            <h2>Explore the World of Stock Market Education with InvestoHub</h2>         
            <br></br>
            The stock market is more than just numbers and graphs—it's a gateway to financial freedom, 
            strategic decision-making, and wealth creation. At InvestoHub, we bridge the gap between
            aspiring investors and seasoned professionals by offering expertly curated courses that cover 
            every facet of stock market trading and investing.
          </p>
          <Button text={"More"} />
        </div>
        <div className="w-full relative mt-10 lg:mt-0">
          <div className="blob h-[500px]">
            <img
              className="mx-auto h-full w-full object-cover"
              src="/images/card.webp"  
              alt="Banner" 
            />
          </div>
          <img className="absolute top-0 w-20 left-20"  alt="" /> 
          <img
            className="absolute right-20 top-0 w-20"
            // src={reactImag} 
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
