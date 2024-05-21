
// 상단 이미지 데이터
const imag = [ 
    'item1.webp','item2.png','item3.png','item4.png','item5.png',
    'item6.png','item7.png','item8.png','item9.png','item10.png',
    'item11.png','item12.png','item13.png','item14.png','item15.png',
    'item16.png','item17.png','item18.png'
]

// 선택 이미지 데이터
const subimag = [
    'item1.webp','item1-1.webp','item1-2.webp',
    'item2-1.png','item2-2.png','item2-3.png',
    'item3-1.png','item3-2.png','item3-3.png',
    'item4-1.png','item4-2.png','item4-3.png',
    'item5-1.png','item5-2.png','item5-3.png',
    'item6-1.png','item6-2.png','item6-3.png',
    'item7-1.png','item7-2.png','item7-3.png',
    'item8-1.png','item8-2.png','item8-3.png',
    'item9-1.png','item9-2.png','item9-3.png',
    'item10-1.png','item10-2.png','item10-3.png',
    'item11-1.png','item11-2.png','item11-3.png',
    'item12-1.png','item12-2.png','item12-3.png',
    'item13-1.png','item13-2.png','item13-3.png',
    'item14-1.png','item14-2.png','item14-3.png',
    'item15-1.png','item15-2.png','item15-3.png',
    'item16-1.png','item16-2.png','item16-3.png',
    'item17-1.png','item17-2.png','item17-3.png',
    'item18-1.png','item18-2.png','item18-3.png'
]

const contentsList = document.querySelector(".contents-list")

// 상단 div 영역 - 메인 image를 데이터기준을 잡고 시작
for(var i=0; i < imag.length; i++) {
    const sublist = document.createElement('div')
    sublist.className="item-list"
    contentsList.appendChild(sublist)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 각각만들어진 sublist class태그를 요청한다
const totalItem = document.getElementsByClassName("item-list")
console.log("총 아이템수 : ",totalItem.length)

//  상단 이미지 생성
for(var i=0; i < totalItem.length; i++) {
    const topimagediv=document.createElement('div')
    topimagediv.className = 'top-image'
    totalItem[i].appendChild(topimagediv)
}

const topimag = document.getElementsByClassName('top-image')
console.log(topimag)
for(var i=0; i < totalItem.length; i++) {
    // 이미지 태그생성 후 삽입
    const imagtag = document.createElement('img')
    imagtag.src=`./wareslist/img/${imag[i]}`
    topimag[i].appendChild(imagtag)
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
// 중간 이미지 생성 - 선택이미지 영역
for(var i=0; i < totalItem.length; i++) {
    const middiv = document.createElement('div')
    middiv.className = 'bottom-image'
    totalItem[i].appendChild(middiv)
}

const getbottomimage = document.getElementsByClassName('bottom-image')
// 이미지 최대크기 지정될영역
for(var i=0; i< getbottomimage.length; i++) {
    for(var j=1; j <= 3; j++) {
        const imagdiv = document.createElement('div')
        imagdiv.className='img-div'
        getbottomimage[i].appendChild(imagdiv)
    }
}

// 선택 이미지 생성
const getimgdiv = document.getElementsByClassName('img-div')
for(var i=0; i < getimgdiv.length; i++) {
    const imgetag = document.createElement('img')
    imgetag.src = `./wareslist/sub-img/${subimag[i]}`
    getimgdiv[i].appendChild(imgetag)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 하단 스팸생성
for(var i=0; i < totalItem.length; i++) {
    const bottomdiv = document.createElement('div')
    bottomdiv.className = 'item-plan'
    totalItem[i].appendChild(bottomdiv)
}

const getbottom = document.getElementsByClassName('item-plan')
console.log(getbottom)
for(var i=0; i < getbottom.length; i++) {
    for(var j=1; j <= 3; j++) {
        const span = document.createElement('span')
        span.className = 'plan'
        if(j === 1) {
            span.textContent='상품이름'
        }else if(j === 2){
            span.textContent='할인전 가격'
        }else if(j === 3){
            span.textContent='[ ??% ] 할인후 가격'
        }
        getbottom[i].appendChild(span)
    }
}
    
    
    