import React from "react";

const Projects = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">プロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow rounded">
            <img
              src="https://source.unsplash.com/random/400x300"
              alt="Project Image"
              className="w-full h-48 object-cover mb-4 enlarge-image"
            />
            <h3 className="text-xl font-bold mb-4">プロジェクト1</h3>
            <p>最新のテクノロジーを駆使したシステム開発。</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <img
              src="https://source.unsplash.com/random/400x300"
              alt="Project Image"
              className="w-full h-48 object-cover mb-4 enlarge-image"
            />
            <h3 className="text-xl font-bold mb-4">プロジェクト2</h3>
            <p>ユーザーフレンドリーなウェブデザイン。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
