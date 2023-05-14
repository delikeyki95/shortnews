let news = []
let category = 'all'
let url = new URL("https://inshorts.deta.dev/news?category=category")
let categories = ["all", "national", "business", "sports", "world", "politics", "technology", "startup", "entertainment", "miscellaneous", "hatke", "science", "automobile"]
let totalPageCount = 0 //전체기사 갯수
let pageGroupCount = 0 //페이지그룹 갯수
let first = 1 //페이지그룹의 첫번째
let last = 10 //페이지그룹의 마지막
let currentPageGroup = 1 //현재페이지그룹
const listNews = document.getElementById("listNews") //뉴스 그려줄 영역
const pageArea = document.getElementById("pagenation") //페이지 그려줄 영역

//카테고리 render
let categoryHTML = ``

categoryHTML = categories.map((item) => {
    return `<li class="d-inline-block p-1"><a href="#" onClick="categoryClick('${item}')" class="text-decoration-none text-black cate-link ${item == 'all' ? 'active' : ''}">${item}</a></li>`
})

document.getElementById("listCategory").innerHTML = categoryHTML

const categoryClick = (categoryName) =>{
    category = categoryName

    for(let i=0; i<categories.length; i++) {
        document.querySelectorAll(".cate-link")[i].classList.remove("active")
    }
    event.target.classList.add("active")
    console.log(category)
    first = 1
    last = 10
    currentPageGroup = 1
    getNews()
}

//뉴스데이터 가져오기
const getNews = async () => {
    try {
        url.searchParams.set('category', category)
        let response = await fetch(url)
    
        let data = await response.json() 

        if(response.status == 200){
            news = data.data
            totalPageCount = news.length
            pageGroupCount = Math.ceil(totalPageCount / 10)
            console.log("totalPageCount",totalPageCount)
            console.log("호출한 카테고리는", category)
            console.log("호출한 데이타는", news)
            render()
        } else { 
            throw new Error(error.message)
        }
        
    } catch(error){
        listNews.innerHTML = "페이지가 정상적으로 호출되지 않았습니다. 다시한번 시도해주세요."
        console.log(error.message)
    }
    
}

//뉴스 그리기
const render = () => {
    let newsRow = ""
    console.log("첫번째", first, "마지막", last)
    for(let i=first-1; i<=last-1; i++) {
        newsRow += `<li class="list-group-item">
        <div class="row">
            <div class="col-lg-4">
                ${i+1}
                <img src="${news[i].imageUrl}" class="img-thumbnail" />
            </div>
            <div class="col-lg-8">
                <h2 class="text-title"><a href="${news[i].readMoreUrl}" target="_blank" class="text-decoration-none">${news[i].title}</a></h2>
                <p class="text-content">${news[i].content}</p>
                <div class="text-author">By. ${news[i].author}</div>
                <div class="text-date">Date. ${news[i].date}</div>
            </div>
        </div>
    </li>`
    }

    listNews.innerHTML = newsRow
    
    pagination()
}

//페이지 그리기
const pagination = () => {
    let drawPage = ``

    if (currentPageGroup > 1) {
        drawPage += `<li class="page-item" onclick="pageClick(${currentPageGroup-1})">
        <a class="page-link" href='#'>&lt;</a>
        </li>`
    }

    for(let i=0;i<pageGroupCount;i++) {
        drawPage += `<li class="page-item" onclick="pageClick(${i+1})">
        <a class="page-link ${currentPageGroup == (i+1) ? "active":""}" href='#'>${i+1}</a>
      </li>`
    }
    console.log('현재페이지', currentPageGroup, "페이지그룹", pageGroupCount)
    if (currentPageGroup < pageGroupCount) {
        drawPage += `<li class="page-item" onclick="pageClick(${currentPageGroup+1})">
        <a class="page-link" href='#'>&gt;</a>
        </li>`
    }

    pageArea.innerHTML = drawPage
}

// 페이지 이동
const pageClick = (pageNum) => {
    currentPageGroup = pageNum
    console.log("현재페이지",currentPageGroup)

    first = currentPageGroup * 10 - 9

    last = first + 9
    if(last > totalPageCount) {
        last = totalPageCount
    }

    render()
}

//검색어
const searchKeyword = () => {
    let arrSchResult = [] //검색결과 넣어줄 배열
    let keyword = document.getElementById("iptKeyword").value
    //console.log(news)
    news.map((item) => {
        if(item.content.includes(keyword)) {
            arrSchResult.push(item)
         }
    })

    news = arrSchResult
    console.log("검색결과arr",news)
    totalPageCount = news.length
    pageGroupCount = Math.ceil(totalPageCount / 10)
    
    if(pageGroupCount >= 1) {
        first = 1
        currentPageGroup = 1
        if(pageGroupCount == 1) {
            last = totalPageCount
        } else {
            last = 10
        }
        console.log("토탈페이지",totalPageCount, "현재페이지그룹", currentPageGroup, "퍼스트", first, "라스트",last)
        render()
    } else {
       listNews.innerHTML = "검색결과가 없습니다."
       pageArea.innerHTML = ''
    }

}

getNews()