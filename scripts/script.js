//create an object with my "options for BBT"


//if they user value picks green then it turns green, else it turns black
// pickABase = function (){}

const teaPlease = function (x,y){
    const userBase = $("input[name=base]:checked").val();
    console.log(userBase);
}
//Tea Options
$(".teas").on("click", function(){
    const userBase = $("input[name=base]:checked").val();
    console.log(userBase);
    if (userBase === "green"){
        $(".contents").addClass("greentea");
        $(".contents").removeClass("blacktea");
    }
    else if (userBase === "black"){
        $(".contents").addClass("blacktea");
        $(".contents").removeClass("greentea");
    }
    else{
        $(".contents").removeClass("blacktea greentea");
    }
});
//Milk Options
$(".milks").on("click", function () {
    const userMilk = $("input[name=milk]:checked").val();
    console.log(userMilk);
    if (userMilk === "yesMilk" && $(".contents").hasClass("greentea")) {
        $(".contents").addClass("milkgreen");
        $(".contents").removeClass("milkblack");
    }
    else if (userMilk === "yesMilk" && $(".contents").hasClass("blacktea")) {
        $(".contents").addClass("milkblack");
        $(".contents").removeClass("milkgreen");
    }
    else {
        $(".contents").removeClass("milkblack milkgreen");
    }
});
//Flavour Options
$(".flavour").on("click", function () {
    const userFlavour = $("input[name=flavour]:checked").val();
    console.log(userFlavour);
    if (userFlavour === "taro") {
        // This is a test
        $(".contents").addClass("taro");
        $(".contents").removeClass("honeydew");
        $(".contents").removeClass("strawberry");
    }
    else if (userFlavour === "honeyDew") {
        $(".contents").addClass("honeydew");
        $(".contents").removeClass("taro");
        $(".contents").removeClass("strawberry");
        // $(".contents").removeClass("greentea");
    }
    else if (userFlavour === "strawberry") {
        $(".contents").addClass("strawberry");
        $(".contents").removeClass("taro");
        $(".contents").removeClass("honeydew");
        // $(".contents").removeClass("greentea");
    }
    //There is a glitch that if you change your previous option the "new" option won't change unless clicked again
    else if (userFlavour === "rose" && $(".contents").hasClass("blacktea")) {
        $(".contents").addClass("roseblack");
        $(".contents").removeClass("rosegreen");
    }
    else if (userFlavour === "rose" && $(".contents").hasClass("greentea")) {
        $(".contents").addClass("rosegreen");
        $(".contents").removeClass("roseblack");
    }
    else {
        $(".contents").addClass("transparent");
    }
});



//want to append a Colour on the page with the Value is selected

const buttonShow = function (optionSelected, showOptions) {
    $(optionSelected).on("click", function (e) {
        e.preventDefault();
        $(showOptions).removeClass("hidden");
    });
}
const hide = function(optionSelected, showOptions){
    $(optionSelected).on("click", function(){
        $(showOptions).removeClass("hidden");
    });
}


$(function(){
    buttonShow("#teaBase", ".teas");
    buttonShow("#addMilk", ".milks");
    hide("#black", ".milks");
    hide("#green",".milks");

    hide("#yesMilk",".addFlavourWithMilk");
    $("#yesMilk").on("click", function(){
        $(".addFlavourNoMilk").addClass("hidden");
    });
    hide ("#noMilk",".addFlavourNoMilk");
    $("#noMilk").on("click",function(){
        $(".addFlavourWithMilk").addClass("hidden");
    });
    
    hide(".flavourShot",".toppings");
    
    // On click display options
    // when option is selected next button is opened with options 
});