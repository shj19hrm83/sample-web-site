import React from "react";

const Services = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">サービス内容</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-bold mb-4">サービス1</h3>
          <p>私たちは最高のITコンサルティングを提供します。</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-bold mb-4">サービス2</h3>
          <p>システム開発の全ての段階をサポートします。</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-bold mb-4">サービス3</h3>
          <p>美しいウェブデザインを提供します。</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
