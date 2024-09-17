$(document).ready(function(){
    let burger = $(".burger");
    let wrapperMain = $(".wrapper");
    let clouseBtn = $(".clouse-button");
    let wrapperMenu = $(".wrapper-menu");

    burger.click(() => {
        wrapperMain.css("display", "none");
        wrapperMenu.css("display", "block")
    })

    clouseBtn.click(() => {
        wrapperMain.css("display", "block");
        wrapperMenu.css("display", "none")
    })
})