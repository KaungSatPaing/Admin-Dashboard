$(".show-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft: 0})
})

$(".hide-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft: "-100%"})
})

let category = ["Phone","Computer","TV"];
let subCategory = [
    {name: "Sumsaung",categoryId: 0},
    {name: "Iphone",categoryId: 0},
    {name: "Acer",categoryId: 1},
    {name: "Imac",categoryId: 1},
    {name: "Panasonic",categoryId: 2},
    {name: "Fujitsu",categoryId: 2}
];

category.map(function(el,index){
    $("#catego").append(`<option value="${index}">${el}</option>`);
});

subCategory.map(function(el,index){
    $("#subcatego").append(`<option value="${index}" data-category-id="${el.categoryId}">${el.name}</option>`);
});

$("#catego").on("change",function(){
   let currentCategoryId = $(this).val();
   $("#subcatego option").hide();
   $(`[data-category-id=${currentCategoryId}]`).show();
});

$(".full-screen-btn").on("click",function(){
    let current = $(this).closest(".card");
    current.toggleClass("full-screen");
    if(current.hasClass("full-screen")){
        console.log("true");
        $(this).html(`<span class="iconify" data-icon="feather:minimize-2"></span>`);
    }else{
        console.log("false")
        $(this).html(`<span class="iconify" data-icon="feather:maximize-2"></span>`);
    };
});

let screenHeight = $(window).height();
let currentMenuHeight = $(".nav-menu .active").offset().top;

if(currentMenuHeight > screenHeight*0.8){
    $(".sidebar").animate({
        scrollTop: currentMenuHeight-200
    },1000)
}

// let statuss = document.getElementsByClassName("status-card")[0];

// statuss.addEventListener("click",function(e){
//     setTimeout(() => {
//         location.href ="https://www.google.com";
//     }, 300);
        
// })

feather.replace();

$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $(document).ready(function() {
    $('#example').DataTable();
}
);

