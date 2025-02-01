import React from "react";

const About = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 text-justify">
            We are a team of passionate developers and finance enthusiasts dedicated 
            to providing an intuitive and reliable platform for stock market analysis.
            Our goal is to simplify the process of tracking market trends by presenting
            real-time stock market data, particularly through dynamic candlestick pattern
            visualizations. By integrating advanced technologies and financial insights,
            we aim to support traders, investors, and market analysts in making informed decisions.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Mission
          </h2>
          <p className="mt-2 text-gray-500 text-justify">
            Our mission is to empower investors and traders with real-time, actionable 
            insights by offering accurate candlestick pattern visualizations. We strive 
            to make complex financial data more accessible and understandable, helping users
            stay ahead of market movements and make better investment choices. Through continuous
            innovation and user-centric design, we aim to be the go-to platform for stock market 
            analysis.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Vision
          </h3>
          <p className="mt-2 text-gray-500">
            Our vision is to create a leading platform for stock market analysis that transforms
            how individuals and businesses approach financial decision-making. By combining cutting-edge
            technology with expert market knowledge, we aim to foster smarter trading and investing globally.
            Our vision extends to building a community of informed traders who are equipped with the tools
            they need to succeed in an ever-evolving financial landscape.


          </p>
        </div>
        <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl transform translate-x-4 translate-y-6 rotate-6 lg:translate-x-16 lg:-translate-y-24 lg:rotate-12">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1499343628900-3521f6be8e8e" 
            alt="About image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
