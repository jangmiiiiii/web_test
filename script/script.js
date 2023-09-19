//서브메뉴, 갤러리 숨기기
$('.sub').hide() /* .sub를 숨긴다 */
$('.c2').hide() /* .c2를 숨긴다 */

/* 메인 메뉴를 마우스로 올리면(mouse over) 
서브 메뉴 영역이 부드럽게 나타나면서, 서브 메뉴가 보이도록 한다. */
$('nav').on('mouseover',function(){ /* nav에 마우스를 올렸을때 */
    // $('.sub').show() /* sub가 보인다. */
    $('.sub').stop().slideDown(); /*마우스 올렸을때 부드러운효과  */
})
$('nav').on('mouseout',function(){ /* nav에 마우스가 벗어날때 없어지기*/
    $('.sub').stop().slideUp(); /*마우스 부드러운효과  */
})

/*  공지사항의 첫 번째 콘텐츠를 클릭(Click)할 경우
 레이어 팝업창(Layer Pop_ up)이 나타나며, */
$('.c1 a:nth-child(1)').on('click',function(){
    $('.popup').show();
})
/*  레이어 팝업창 내에 닫기 버튼을 두어서 클릭하면 
해당 팝업창이 닫혀야 한다.  */
$('.popup a').on('click',function(){
    $('.popup').hide();
})

/* 공지사항과 갤러리는 탭 기능을 이용하여 제작하여야 한다. 
각 탭을 클릭(Click) 시 해당 탭에 대한 내용이 보여야 한다.  */
$('.c12 .title a:first-child').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').show();
    $('.c2').hide();
})
$('.c12 .title a:last-child').on('click',function(){    
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c2').show();
    $('.c1').hide();
})