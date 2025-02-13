import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Gon Page</h1>
      <p className="mt-4 text-lg">이 페이지는 서버 액션을 테스트하는 페이지입니다.</p>
    </div>
  );
};

export default Page;
