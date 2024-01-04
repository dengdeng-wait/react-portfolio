import React, { useEffect, useRef } from 'react';

const MoveToUp = () => {
  const moveTopRef = useRef(null); // DOM요소 접근위한 훅(리액트는 쿼리셀렉터 작동오류남)
  const scrollMoveToUp = () => {
    const bodyHeight = document.body.clientHeight;
    let scrollY = window.scrollY;
    (scrollY > bodyHeight / 3) ? moveTopRef.current.classList.add('active') : moveTopRef.current.classList.remove('active');
    // console.log(bodyHeight, scrollY, moveTopRef.current);
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollMoveToUp);
    return () => {
      window.removeEventListener('scroll', scrollMoveToUp); //clean up
    };
  }, []);

  const moveScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // if (props.active === null) { moveTop.style.opacity = 0 }
  // else if (props.active === null){ moveTop.style.opacity = 0 }
  return (
    <figure ref={moveTopRef} className='moveTop fixed bottom-3 right-4'>
      <button onClick={moveScroll} className='flex flex-col space-y-1 items-center text-center dark:text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clipRule="evenodd" />
        </svg> <span className='block text-xs text-center'>TOP</span>
      </button>
    </figure>
  )
}

export default MoveToUp;