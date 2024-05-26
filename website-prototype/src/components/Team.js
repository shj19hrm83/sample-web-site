import React from "react";

const Team = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">チーム</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <img
            src="https://source.unsplash.com/random/400x400"
            alt="Team Member"
            className="w-full h-48 object-cover mb-4 rounded-full enlarge-image"
          />
          <h3 className="text-xl font-bold mb-4">メンバー1</h3>
          <p>システムエンジニア</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <img
            src="https://source.unsplash.com/random/400x400"
            alt="Team Member"
            className="w-full h-48 object-cover mb-4 rounded-full enlarge-image"
          />
          <h3 className="text-xl font-bold mb-4">メンバー2</h3>
          <p>デザイナー</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <img
            src="https://source.unsplash.com/random/400x400"
            alt="Team Member"
            className="w-full h-48 object-cover mb-4 rounded-full enlarge-image"
          />
          <h3 className="text-xl font-bold mb-4">メンバー3</h3>
          <p>プロジェクトマネージャー</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
