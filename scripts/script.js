//create an object with my "options for BBT"

//start with all the options and push it in a global array
//then write a function that allows me to call everytime a new option is clicked
//based on those option in the global array at the corresponding class 


//Tea Options
$(".teas").on("click", function(){
    const userBoba = [];
    const userBase = $("input[name=base]:checked").val();
    console.log(userBase);
    userBoba.push(userBase);
    // console.log(userBoba);
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
    if (userMilk === "yesMilk") {
        $(".contents").addClass("milk");
    }
    else {
        $(".contents").removeClass("milk");
    }
});
//Flavour Options
$(".flavour").on("click", function () {
    const userFlavour = $("input[name=flavour]:checked").val();
    if (userFlavour === "taro") {
        // This is a test
        $(".contents").addClass("taro");
        $(".contents").removeClass("honeydew strawberry rose grape peach");
    }
    else if (userFlavour === "honeyDew") {
        $(".contents").addClass("honeydew");
        $(".contents").removeClass("taro strawberry rose grape peach");
    }
    else if (userFlavour === "strawberry") {
        $(".contents").addClass("strawberry");
        $(".contents").removeClass("taro honeydew rose grape peach");
    }
    //There is a glitch that if you change your previous option the "new" option won't change unless clicked again
    else if (userFlavour === "rose") {
        $(".contents").addClass("rose");
        $(".contents").removeClass("grape peach taro honeydew strawberry");
    }
    else if (userFlavour === "grape") {
        $(".contents").addClass("grape");
        $(".contents").removeClass("rose peach taro honeydew strawberry");
    }
    else if (userFlavour === "peach") {
        $(".contents").addClass("peach");
        $(".contents").removeClass("rose grape taro honeydew strawberry");
    }
    else {
        $(".contents").removeClass("taro honeydew strawberry rose grape peach");
    }
});

//Topping Options
$(".toppings").on("click", function () {
    const userTopping = $("input[name=toppings]:checked").val();
    if (userTopping === "pearl") {
        $(".addins").addClass("pearl");
    }
    else {
        $(".addins").removeClass("");
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