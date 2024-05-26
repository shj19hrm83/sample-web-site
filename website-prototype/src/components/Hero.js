import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src="https://source.unsplash.com/random/1920x600"
        alt="Hero Image"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">私たちのウェブサイトへようこそ</h1>
          <p className="mt-4">最高のサービスを提供します</p>
          <div className="mt-6">
            <a href="#" className="bg-red-500 text-white px-4 py-2 rounded">
              詳しくはこちら
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 px-4 py-2 rounded ml-4"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
