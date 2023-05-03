$(function(){
    var mixer = mixitup('.category__inner',{
        load:{
            filter:'.All-Categories'
        }
    }); 
    $('.burger').on('click',function(){
        $('.burger').toggleClass('burger-active');
        $('.header__items').toggleClass('header__items-open');
        $('.header__burgerLogo').toggleClass('header__burgerLogo-open');
    })
})