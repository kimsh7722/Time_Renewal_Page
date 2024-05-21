document.addEventListener("DOMContentLoaded",()=>{
    
    // 해당 생성된 영역 전부 불러와서 합쳐라
    // const list1=document.querySelectorAll(".item-list")
    const totalitem = document.getElementsByClassName("item-list")
    // └전체 페이지 수
    console.log("해당역역 최대 배열길이 값(Element) : ",totalitem.length)
    
    // ┌초기 페이지
    var currentpage = 1
    
    // ┌고정 아이템 수
    const itemViewCount=15
    
    
    createPage=()=> {
        const pageNumber = document.getElementsByClassName("pageNumber")[0]
        
        // ┌페이지 나타날 범위 계산
        const totalPage = Math.ceil(totalitem.length / itemViewCount)
        // └ 전체 아이탬수를 나눠 페이지안에 들어갈 갯수를 정한다
        console.log("생성된 page번호 => ",totalPage)
        
        // ┌하위 요소의 페이지번호를 생성
        for(let i=1; i <= totalPage; i++) {
            const number = document.createElement('a')
            number.textContent=i
            // ┌생성된 페이지번호에 맞게 그위치로 이동하는 로직
            number.addEventListener('click',()=>{
                currentpage=i;
                // ┌ 생성된 태그이벤트값을 movePage로이동된다.
                movePage()
            })
            pageNumber.appendChild(number)
        }
    }

    function movePage(){
    //     // ┌ 나눈 페이지를 1페이지에 들어갈 요소를 보이게하며 그 이상넘어가면 감춰야 한다
        var startItem = (currentpage-1)*itemViewCount 
        var endItem = Math.min(startItem+itemViewCount,totalitem.length)
    //     // math.min(시작값,종료값)
    //     console.log("범위 시작 => ",startItem)
    //     console.log("범위 끝 => ",endItem)

    //     // ┌JavaScript를 ForEach쓰기 위해 배열변환이 필요
        Array.from(totalitem).forEach((item,i)=>{
            // ┌ 어디까지 감추고 보일건지 범위값을 계산한다
            if(i >= startItem && i < endItem) { // 0부터 정해진수(15)의 범위
                item.style.display = 'block'
            }else {
                item.style.display = 'none' 
            }
        })
    }
    

    PrevBtn = () => {
        // console.log(currentpage)
        if(currentpage > 1) {
            currentpage--
            movePage()
        }else {
            alert("더이상 페이지를 넘길수 없습니다.")

        }
    }

    NextBtn = () => {
        console.log(currentpage,totalitem.length)
        // ┌갈수있는 페이지만 이동 계산
        const totalPage = Math.ceil(totalItem.length/itemViewCount)
        console.log(totalPage)
        if(currentpage < totalPage) {
            currentpage++
            movePage()
        }else {
            alert("더이상 다음페이지가 없습니다.")
        }
    }

    createPage();
    movePage()
    
})