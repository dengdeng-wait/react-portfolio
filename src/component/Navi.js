import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navi = (props) => {
  const list = [];
  const [isActive, setIsActive] = useState(false)
  const handleClick = (e) => {
    setIsActive(e.currentTarget.href.split('/').at(-1));
  }
  for (let i = 0; i < props.years.length; i++) {
    let target = props.years[i];
    list.push(<li key={i} className=''>
      <Link to={`/Contents/${target.slice(0, 4)}`} className={`text-sm transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 border-2 border-gray-900 focus:outline-none dark:bg-gray-800 px-4 py-2  hover:text-white font-semibold text-center block dark:text-gray-300 ${isActive === target.slice(0, 4) ? 'active' : ''}`} onClick={handleClick}>{target}</Link>
    </li>)
  }
  return (
    <>
      <header className='mb-4'>
        <Link to="/" className='flex js-btn-home' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" className="cursor-pointer hover:fill-blue-500 transition-colors duration-300" fill="#4b5563"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg><span className="mx-2 text-xs font-bold dark:text-gray-300">: Home</span>
        </Link>
      </header>
      {/* <h3>Navigation</h3>
      <ul>
        <li><Link to="/product/1/1?offset=0&limit=10">1번</Link></li>
        <li><Link to="/product/2/2?offset=10&limit=10">2번</Link></li>
      </ul> */}
      <nav className="nav container mx-auto">
        <ul className="grid grid-cols-3 gap-2 grid-flow-row">
          {list}
        </ul>
      </nav>
    </>
  );
}

export default Navi;