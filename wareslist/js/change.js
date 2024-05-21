document.addEventListener('DOMContentLoaded', function() {
    
    // 변경할 데이터 - img-div
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

    const original=[]
    // img-div요청
    const getimgdiv = document.getElementsByClassName('img-div')
    for(let i=0; i < getimgdiv.length; i++) {
        getimgdiv[i].addEventListener('mouseover', function() {
            // .img-div의 상위 요소인 .bottom-image 찾기
            const bottomImage = this.parentElement;
            
            // .bottom-image의 부모 요소인 .top-image 찾기
            const topImage = bottomImage.parentElement.querySelector('.top-image');
            
            // .top-image에서 이미지 찾아서 변경
            const topImg = topImage.querySelector('img');

            original[i]=topImg.src

            topImg.src = `./wareslist/sub-img/${subimag[i]}`;
        });

        getimgdiv[i].addEventListener('mouseout', function(){
            const topImg = this.parentElement.parentElement.querySelector('.top-image img')
            topImg.src = original[i]
        })
    }
    
});