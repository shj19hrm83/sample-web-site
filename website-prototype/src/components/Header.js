import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">ロゴ</div>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 underline-animation"
          >
            ホーム
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 underline-animation"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
