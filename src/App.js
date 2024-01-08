import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/Common.css';
import styled from 'styled-components';
import Navi from './component/Navi';
import Contents from './component/Contents';
import NotFound from './component/NotFound';
import MoveToUp from './component/MoveToUp';
import Loading from './component/Loading';

const App = () => {
  // const [mode, setMode] = useState(true);

  const years = ['2023-2021', '2020-2019', '2018-2017', '2016-2015', '2014-2013', '2012-2011', '2010이전'];

  return (
    <div className='wrap bg-gray-100 dark:bg-slate-900'>
      {/* browserrouter github배포에러 그래서 hashrouter로 변경/ 일반배포는 browserrouter 사용함 */}
      <HashRouter>
        <div className="p-4 pb-12">
          <Navi years={years} />
          <Routes>
            <Route path="/" element={<Contents />}></Route>
            <Route path="/Contents/:years" element={<Contents />}></Route>
            {/* 상단 위치 라우트 규칙 모두확인 일치 라우트 없는경우 처리 */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <MoveToUp></MoveToUp>
        </div>
      </HashRouter>
      {/* <div>데이터: {JSON.stringify(data)}</div> */}
      
    </div>
  );
}

export default App;