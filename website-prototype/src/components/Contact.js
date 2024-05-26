import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
      <div className="bg-white p-6 shadow rounded">
        <h3 className="text-xl font-bold mb-4">会社概要</h3>
        <p>
          <strong>社名:</strong> XYZ株式会社
        </p>
        <p>
          <strong>設立:</strong> 2000年1月1日
        </p>
        <p>
          <strong>資本金:</strong> 1億円
        </p>
        <p>
          <strong>業務概要:</strong>{" "}
          ITコンサルティング、システム開発、ウェブデザイン
        </p>
        <p>
          <strong>メールアドレス:</strong> example@xyz.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
