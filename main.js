
//대기실로 보내지고 queue에 쌓이는 것들 : setTimeout, ajax, eventListner 
//async, await 를 이용해서 데이타가 호출되기를 기다림
// let news = [
//     {0:
//         {
//             author: "leeyb@fnnews.com 이유범",
//             authors: "Leeyb Fnnews.Com 이유범 기자,leeyb@fnnews.com 이유범,이유범",
//             clean_url: "fnnews.com",
//             country: "KR",
//             excerpt: "[파이낸셜뉴스]산업통상자원부는 9일 서울 성수동 로봇카페 봇봇봇에서 '로봇공감 토크콘서트 로그인(로봇 그리고 인간)'을 열고 로봇산업 경쟁력 강화 방안을 논의했다.이번 토크콘서트는 미래 유망산업이자 생산성 혁신, 노동시장 변화 대응, 미래 신(新)성장동력이라는 1석3조 효과를 가진 로봇산업에 대해 스타트업 육..",   
//             is_opinion: false,
//             language: "ko",
//             link: "https://www.fnnews.com/news/202305091232413318",
//             media: "https://image.fnnews.com/resource/media/image/2023/05/09/202305091101151657_l.jpg",
//             published_date: "2023-05-09 12:34:00",
//             published_date_precision: "timezone unknown",
//             rank: 21786,
//             rights: "fnnews.com",
//             summary: "[파이낸셜뉴스]산업통상자원부는 9일 서울 성수동 로봇카페 봇봇봇에서 '로봇공감 토크콘서트 로그인(로봇 그리고 인간)'을 열고 로봇산업 경쟁력 강화 방안을 논의했다.이번 토크콘서트는 미래 유망산업이자 생산성 혁신, 노동시장 변화 대응, 미래 신(新)성장동력이라는 1석3조 효과를 가진 로봇산업에 대해 스타트업 육성 등 젊은 세대가 기대하는 정책을 수립하기 위해 마련됐다.\n토크콘서트는 장영진 산업부 1차관, 송재호 KT 부사장, 손웅희 한국로봇산업진흥원장, 고태봉 하이투자증권 본부장, 이윤행 이이딘로보틱스 대표와 대학 로봇동아리·로봇공학 전공 대학생들 30여명이 참석해 진행됐다.\n참석학생들은 로봇산업 경쟁력 강화 방안, 규제개선 방안, 로봇 분야 취업·창업방안, 창업 유망분야 등을 질의했다. 산업부는 '로봇공감 로그",
//             title: "산업부, 로봇공감 토크콘서트 '로그인' 개최",
//             topic: "news",
//             twitter_account: null,
//             _id: "7e658d87befeb76130f14d9cd415caec",
//             _score: null
//         }
//     },
//     {1:
//         {
//             author: "leeyb@fnnews.com 이유범",
//             authors: "Leeyb Fnnews.Com 이유범 기자,leeyb@fnnews.com 이유범,이유범",
//             clean_url: "fnnews.com",
//             country: "KR",
//             excerpt: "[파이낸셜뉴스]산업통상자원부는 9일 서울 성수동 로봇카페 봇봇봇에서 '로봇공감 토크콘서트 로그인(로봇 그리고 인간)'을 열고 로봇산업 경쟁력 강화 방안을 논의했다.이번 토크콘서트는 미래 유망산업이자 생산성 혁신, 노동시장 변화 대응, 미래 신(新)성장동력이라는 1석3조 효과를 가진 로봇산업에 대해 스타트업 육..",   
//             is_opinion: false,
//             language: "ko",
//             link: "https://www.fnnews.com/news/202305091232413318",
//             media: "https://image.fnnews.com/resource/media/image/2023/05/09/202305091101151657_l.jpg",
//             published_date: "2023-05-09 12:34:00",
//             published_date_precision: "timezone unknown",
//             rank: 21786,
//             rights: "fnnews.com",
//             summary: "[파이낸셜뉴스]산업통상자원부는 9일 서울 성수동 로봇카페 봇봇봇에서 '로봇공감 토크콘서트 로그인(로봇 그리고 인간)'을 열고 로봇산업 경쟁력 강화 방안을 논의했다.이번 토크콘서트는 미래 유망산업이자 생산성 혁신, 노동시장 변화 대응, 미래 신(新)성장동력이라는 1석3조 효과를 가진 로봇산업에 대해 스타트업 육성 등 젊은 세대가 기대하는 정책을 수립하기 위해 마련됐다.\n토크콘서트는 장영진 산업부 1차관, 송재호 KT 부사장, 손웅희 한국로봇산업진흥원장, 고태봉 하이투자증권 본부장, 이윤행 이이딘로보틱스 대표와 대학 로봇동아리·로봇공학 전공 대학생들 30여명이 참석해 진행됐다.\n참석학생들은 로봇산업 경쟁력 강화 방안, 규제개선 방안, 로봇 분야 취업·창업방안, 창업 유망분야 등을 질의했다. 산업부는 '로봇공감 로그",
//             title: "산업부, 로봇공감 토크콘서트 '로그인' 개최",
//             topic: "news",
//             twitter_account: null,
//             _id: "7e658d87befeb76130f14d9cd415caec",
//             _score: null
//         }
//     },
//     {2:
//         {
//             author: "leeyb@fnnews.com 이유범",
//             authors: "Leeyb Fnnews.Com 이유범 기자,leeyb@fnnews.com 이유범,이유범",
//             clean_url: "fnnews.com",
//             country: "KR",
//             excerpt: "[파이낸셜뉴스]산업통상자원부는 9일 서울 성수동 로봇카페 봇봇봇에서 '로봇공감 토크콘서트 로그인(로봇 그리고 인간)'을 열고 로봇산업 경쟁력 강화 방안을 논의했다.이번 토크콘서트는 미래 유망산업이자 생산성 혁신, 노동시장 변화 대응, 미래 신(新)성장동력이라는 1석3조 효과를 가진 로봇산업에 대해 스타트업 육..",   
//             is_opinion: false,
//             language: "ko",
//             link: "https://www.fnnews.com/news/202305091232413318",
//             media: "https://image.fnnews.com/resource/media/image/2023/05/09/202305091101151657_l.jpg",
//             published_date: "2023-05-09 12:34:00",
//             published_date_precision: "timezone unknown",
//             rank: 21786,
//             rights: "fnnews.com",
//             summary: "[파이낸셜뉴스]산업통상자원부는 9일 서울 성수동 로봇카페 봇봇봇에서 '로봇공감 토크콘서트 로그인(로봇 그리고 인간)'을 열고 로봇산업 경쟁력 강화 방안을 논의했다.이번 토크콘서트는 미래 유망산업이자 생산성 혁신, 노동시장 변화 대응, 미래 신(新)성장동력이라는 1석3조 효과를 가진 로봇산업에 대해 스타트업 육성 등 젊은 세대가 기대하는 정책을 수립하기 위해 마련됐다.\n토크콘서트는 장영진 산업부 1차관, 송재호 KT 부사장, 손웅희 한국로봇산업진흥원장, 고태봉 하이투자증권 본부장, 이윤행 이이딘로보틱스 대표와 대학 로봇동아리·로봇공학 전공 대학생들 30여명이 참석해 진행됐다.\n참석학생들은 로봇산업 경쟁력 강화 방안, 규제개선 방안, 로봇 분야 취업·창업방안, 창업 유망분야 등을 질의했다. 산업부는 '로봇공감 로그",
//             title: "산업부, 로봇공감 토크콘서트 '로그인' 개최",
//             topic: "news",
//             twitter_account: null,
//             _id: "7e658d87befeb76130f14d9cd415caec",
//             _score: null
//         }
//     }
// ]

let news = []
let page = 1
let totalPage = 0;
let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10") //URL class로 생성,URL에 관련된 메서드를 사용할 수 있다.

//코드 리펙토링 : 중복요소 제거 
//지역변수로 선언된url을 전역으로 만들고 각 함수에서 필요한URL을 재선언 
//api호출 함수를 부른다.

const errorRender = (message) => {
    let errorHTML = `<div class="alert alert-danger text-center">${message}</div>`
    document.getElementById("news-board").innerHTML = errorHTML
}

const getNews = async () => {
    try {
        let header = new Headers({
            'x-api-key': 'e47fSk0P2GInwNFJugWkk6lgY6NbZe5L_XpPcYGtlJE'
            //MsIe8-h5sdm3n8rdODJLhJvBup-ccfGBR-Yp81OWp9M
            //fjtKuMNaeqAyi9MOQkT6hoLeny6jEJGx9I3rhYOaEkI
        })
    
        url.searchParams.set('page', page) //&page=  => 즉 pageClick에서 받은 page값을 파라미터값으로 붙여서 넘긴다
        //console.log(url)
        let response = await fetch(url, {headers:header}) //ajax, http, fetch //await 는 요청받을 때까지 기다림, async와 함께 써야함 
    
        let data = await response.json() //데이터 뽑기

        if(response.status == 200){
            if(data.total_hits == 0) { //검색어 자체가 존재하지 않을 경우
                throw new Error("검색된 결과값이 없습니다.") 
            }
            news = data.articles
            page = data.page
            totalPage = data.total_pages;
            //console.log(news)
            //console.log(data) 받은 데이터
            
            render()
            pagination()
        } else { //200외의 다른 코드들 에러상태
            //console.log("response는", response) //에러코드를 알수있다.
            //console.log("data는", data)
            throw new Error(data.message) //에러가 발생되는 순간 catch로 넘어가서 해당 문장 이후의 코드는 해석하지 않음
        }
        
    } catch(error){
        errorRender(error.message)
        console.log("잡힌 에러는?", error.message)
    }
}

const getLatestNews = async () => {
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10`);
    getNews()
}

//getLatestNews()

const getNewsByTopic = async (event) => {
    let topic = event.target.textContent.toLowerCase()
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`)
    getNews()
}

//키워드 검색
const searchNews = async () =>  {
    let keywordSch = document.getElementById("search-input").value 
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keywordSch}&countries=KR&page_size=10`)
    getNews()
}

const render = () =>  {
    const newsBoard = document.getElementById("news-board")
    let newsRow = ''

    // for(let i=0; i<news.length; i++) {
    //     newsRow+= `<div class="news row">
    //         <div class="col-lg-4">
    //             <img class="news-img"
    //                 src="${news[i].media}" />
    //         </div>
    //         <div class="col-lg-8">
    //             <h1><a href="${news[i].link}" target="_blank">${news[i].title}</a></h1>
    //             <p>${news[i].summary}</p>
    //             <div>${news[i].rights} * ${news[i].published_date}</div>
    //         </div>
    //     </div>`
    // }

    newsRow = news.map((item) => {
        return `<div class="news row">
        <div class="col-lg-4">
            <img class="news-img"
                src="${item.media}" />
        </div>
        <div class="col-lg-8">
            <h1><a href="${item.link}" target="_blank">${item.title}</a></h1>
            <p>${item.summary}</p>
            <div>${item.rights} * ${item.published_date}</div>
        </div>
    </div>`
    }).join(' ') //map은 배열을 반환하기 때문에 각 배열의 구분자인 ,까지 랜더링한다. 그래서 배열을 string type으로 변환시켜야함
    // .join(' ')으로 컴마를 삭제하자 

    newsBoard.innerHTML = newsRow
}

//한페이지에 5개씩 보여주는 기준. 현재페이지가 12라고 가정하면, 12/5를 Math.ceil(page/5) 를 이용하여 올림하면 현재 페이지 그룹
//그룹숫자 *5 = 마지막 페이지, 마지막페이지 -4를 하면 첫번째 페이지 
//page정보 기준으로 내가 몇번째 그룹인지 안다.
//그 그룹에 첫번째와 마지막번째를 안다.
//첫번째~마지막까지 그려준다.(1~5까지 그려줌) <li class="page-item"><a class="page-link" href="#">Previous</a></li>
//totalpage가 3인 경우 3개의 페이지만 프린트 하는 법 last,first
// << >> 버튼
//내가 첫번째 그룹일 때 << 버튼이 없다.
//내가 마지막 그룹일 때 >> 버튼이 없다.

const pagination = () => {
    // 기본변수: 총페이지수, 현재 페이지, 페이지그룹, 페이지그룹의 첫번째페이지, 마지막페이지, first~last까지 페이지 그리기
    // 1.1~5까지를 보여준다
    // 2.6~10을 보여준다 => last, first 가필요 / first: 페이지그룹의 첫번호 / last: 페이지그룹의 마지막번호
    // 3.만약에 first가 6 이상이면(두번째그룹) prev 버튼을 단다(두번째 페이지그룹부터는 이전버튼 필요)
    // 4.만약에 last가 마지막이 아니라면 next버튼을 단다
    // 5.마지막이 5개이하이면 last=totalpage이다
    // 6.페이지가 5개 이하라면 first = 1이다
    let pagenationHTML = ``;
    let pagePerpageGroup = 5;
    let pageGroup = Math.ceil(page / pagePerpageGroup); //0.2라면 1, 1.2라면 2 ==> 현재페이지가 속한 그룹번호를 구하기
    console.log('pageGroup',pageGroup, 'totalPage', totalPage)
    let last = pageGroup * pagePerpageGroup; 
    if (last > totalPage) {
      // 마지막 페이지그룹의 마지막번호가 totalpage보다 크면, 즉 101이면 
      last = totalPage;
    }
    console.log('last',last)
    let first = last - (pagePerpageGroup - 1) <= 0 ? 1 : last - (pagePerpageGroup - 1); // totalPage가 5 미만일 경우는(3,4일경우) first가 1
    console.log('first',first)
    console.log('현재page',page)
    if (pageGroup>=2) { //두번째 페이지블록부터는 맨처음버튼이 생성
        pagenationHTML += `<li class="page-item" onclick="pageClick(1)">
                          <a class="page-link" href='#js-bottom'>&lt;&lt;</a>
                          </li>`
    }
    if (page > 1) { //2번째 페이지부터는 이전버튼이 생성 
        pagenationHTML += `<li class="page-item" onclick="pageClick(${page - 1})">
                          <a class="page-link" href='#js-bottom'>&lt;</a>
                        </li>`;
    }

    for (let i = first; i <= last; i++) {
      pagenationHTML += `<li class="page-item ${i == page ? "active" : ""}">
                          <a class="page-link" href='#js-bottom' onclick="pageClick(${i})">${i}</a>
                         </li>`;
    }
  
    if (last < totalPage) { //마지막 페이지블록이 아닌경우(=즉 마지막페이지일 경우는 스킵)
      pagenationHTML += `<li class="page-item" onclick="pageClick(${page + 1})">
                          <a  class="page-link" href='#js-program-detail-bottom'>&gt;</a>
                         </li>
                         <li class="page-item" onclick="pageClick(${totalPage})">
                          <a class="page-link" href='#js-bottom'>&gt;&gt;</a>
                         </li>`;
    }
  
    document.querySelector(".pagination").innerHTML = pagenationHTML;
  };


const pageClick = (pageNum) => {
    //이동하고싶은 페이지를 알아야함
    page = pageNum
    //console.log(page)
    // window.scrollTo({ top: 0, behavior: "smooth" });
    //이동하고싶은 페이지를 가지고 api를 다시 호출 
    getNews()
}

//토픽 메뉴 클릭 
let menus = document.querySelectorAll("#menu-list")
//console.log(menus)
menus.forEach((menu) => menu.addEventListener("click", (event) => {
    //console.log("내가클릭한메뉴",menu)
    getNewsByTopic(event)
}))

//검색아이콘
function openSearchBox() {
    let inputArea = document.getElementById("input-area")
    if (inputArea.style.display == "inline") {
        inputArea.style.display = "none"
    } else {
        inputArea.style.display = "inline"
    }
}

//모바일 메뉴
function openNav() {
    document.getElementById("mySidenav").style.width = "200px"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
}