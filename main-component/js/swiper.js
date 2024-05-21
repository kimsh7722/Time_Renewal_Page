new Swiper('.s1',{
    // ┌수평 슬라이드(기본)
    direction:'horizontal', 
    
    // ┌슬라이드 이팩트 결정
    // effect : ,
    
    // ┌시작시 바로 재생 여부
    autoplay:{            
        // ┌시간 설정 - 1s는 1000
        delay:6500, 
        // ┌사용자의 action에 따른 슬라이드 동작 정지여부
        disableOnInteraction:false 
    },
    // ┌무한재생
    loop:true,
    allowTouchMove:false,
    // ┌슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    loopAdditionalSlides: 1,
  
    // ┌한번에 보여주는 slide개수
    slidesPerView:1,  
    // ┌slide 간격 (px)
    spaceBetween:0,
    centeredSlides:true,
    
    // ┌슬라이드 넘어갈 속도
    speed:1000,
});

new Swiper('.s2',{
    // direction:'horizontal', //수평 슬라이드(기본)
    // ┌무한재생
    loop:true, 
    effect:'slide',
    // ┌시작시 바로 재생 여부
    autoplay:{            
        delay:0,
        // ┌마우스 클릭할시 자동재생 정지 여부를 결정
        pauseOnMouseEnter: true,
        // ┌해당 클릭햇을 시 동작을 멈출지 결정
        disableOnInteraction:false
    },
    
    // ┌슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    // loopAdditionalSlides: 'loopAdditionalSlides',
  
    
    // ┌한번에 보여주는 slide개수
    slidesPerView:4,  
    // ┌slide 간격 (px)
    spaceBetween:0,
    // ┌슬라이드 중앙배치하여 움직임 감지
    // centeredSlides:false, 
  
    // ┌슬라이드 넘어갈 속도
    speed:3000
});