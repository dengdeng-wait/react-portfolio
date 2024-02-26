import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //링크 파라미터 받기
import { useLocation } from "react-router-dom"; //url location 값 출력
import { useSearchParams } from "react-router-dom"; //쿼리스트링 키, 값 사용
import data2 from "../data/data2.json";

const Contents = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  //set para(지우고 새로)
  const setSortParams = () => {
    searchParams.set("sort", "clear");
    setSearchParams(searchParams);
  };
  //set append para
  const appendSortParams = () => {
    searchParams.append("sort", "hello-world");
    setSearchParams(searchParams);
  };

  //pagination 쿼리스트링 예//?offset=10&limit=10
  const offset = searchParams.get("category");
  console.log(offset);
  //초기 url: 'product?offset=10&limit=10'

  //state이용 10개씩 보이기 기능 셋팅
  // const [posts, setPosts] = useState([]); //1

  // { console.log(data.findIndex(obj => obj.id == pathId)) }
  const params = useParams();
  const yearsParams2 = useParams().years;
  console.log(yearsParams2);
  // const params = useParams();

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const [data, setData] = useState([]);
  const [category, setCategory] = useState(Number(0));

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터를 가져오는 API 호출 또는 기타 비동기 작업 수행
        const response = await fetch(
          `https://dengdeng-wait.github.io/portfolio/data/data2.json`
        );
        const result = await response.json();
        setData(result.portfolio);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };
    fetchData();
  }, []); //useEffect를 빈 배열로 전달하여 컴포넌트가 마운트될 때 한 번만 실행 //category가 변경될 때마다 호출

  // offset, limit 변경시 offset과 limit을 적절히 변경하는 이벤트
  const movePage = (pageNumber) => {
    // 1
    searchParams.set("offset", (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

  const yearsIndex = data.findIndex((obj) => obj.id === Number(pathId));
  const profile = data[yearsIndex];
  const profileEvery = data;
  console.log(profile);
  // console.log(`${yearsIndex}`, data2);

  // const params = useParams();
  // const profile = data[params.username];
  // console.log(params);

  return (
    <div>
      {profile ? (
        <section key={profile.id}>
          <h2 className="mt-10 text-2xl text-gray-700 font-semibold dark:text-gray-300 font-mono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
            {profile.years}
          </h2>
          <ul className="grid grid-cols-1 auto-rows-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {profile.titles.map((item, i) => (
              <li
                key={i}
                className="mt-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <article className="w-full mx-auto">
                  <div>
                    <div className="flex-wrap items-center justify-center text-center sm:flex">
                      <div className="w-full px-4 py-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 mx-auto mt-4 text-white bg-indigo-500 rounded-md">
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="w-6 h-6"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                            </svg>
                          </div>
                        </div>
                        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                          {item.name}
                        </h3>
                        <p className="pb-4 text-gray-500 text-md dark:text-gray-300">
                          <span>{item.position}</span>
                          <span className="mx-2 text-xs font-bold">/</span>
                          <span>{item.skill}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section>
          {data.map(({ years, id, titles }) => (
            <article key={id}>
              <h2 className="mt-10 text-2xl text-gray-700 font-semibold dark:text-gray-300 font-mono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
                {years}
              </h2>
              <ul className="grid grid-cols-1 auto-rows-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {titles.map((item, i) => (
                  <li
                    key={i}
                    className="mt-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
                  >
                    <article className="w-full mx-auto">
                      <div>
                        <div className="flex-wrap items-center justify-center text-center sm:flex">
                          <div className="w-full px-4 py-4">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-12 h-12 mx-auto mt-4 text-white bg-indigo-500 rounded-md">
                                <svg
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="w-6 h-6"
                                  viewBox="0 0 1792 1792"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                </svg>
                              </div>
                            </div>
                            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                              {item.name}
                            </h3>
                            <p className="pb-4 text-gray-500 text-md dark:text-gray-300">
                              <span>{item.position}</span>
                              <span className="mx-2 text-xs font-bold">/</span>
                              <span>{item.skill}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                  // <li key={i}>
                  //   <p>{item.name}</p>
                  //   <p>{item.position}</p>
                  //   <p>{item.skill}</p>
                  // </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      )}
      {/* {console.log(data.map((a) => (a.id)), data[yearsIndex].years)}
      <h2>year: {data[yearsIndex].years} </h2> */}
      {/* <ul>
        {data[yearsIndex].titles.map((item, i) => (
          <li key={i}>
            <p>{item.name}</p>
            <p>{item.position}</p>
            <p>{item.skill}</p>
          </li>
        ))}
      </ul> */}
      {/* {data.map(
        ({ years, id, titles }) => (
          <article key={id}>
            <div>
              <h2>year:{years}</h2>
              <ul>
                {titles.map((item, i) => (
                  <li key={i}>
                    <p>{item.name}</p>
                    <p>{item.position}</p>
                    <p>{item.skill}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        )
      )} */}
    </div>
  );
};

export default Contents;
