import React from 'react';

const Welcome = (props) => {
  setTimeout(() => {
    props.onChangeMode(Boolean(false));
  }, 2000);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-slate-900">
      <h1 className="inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden text-5xl leading-normal font-light text-slate-900 dark:text-gray-100 text-center">
        <span className="animate-word col-span-full row-span-full">안녕하세요</span>
        <span className="animate-word-delay-2 col-span-full row-span-full">반갑습니다</span>
        <span className="animate-word-delay-1 col-span-full row-span-full">로딩중입니다</span>
      </h1>
    </div>
  )
}

export default Welcome;