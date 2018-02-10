//create an object with my "options for BBT"

//start with all the options and push it in a global array
//then write a function that allows me to call everytime a new option is clicked
//based on those option in the global array at the corresponding class 

//Tea Options
$(".teas").on("click", function(){
    const userBase = $("input[name=base]:checked").val();
    console.log(userBase);
    if (userBase === "green"){
        $(".greenTea").addClass("selected");
        $(".blackTea").removeClass("selected");
        $(".contents").addClass("greentea");
        $(".contents").removeClass("blacktea");
    }
    else if (userBase === "black"){
        $(".blackTea").addClass("selected");
        $(".greenTea").removeClass("selected");
        $(".contents").addClass("blacktea");
        $(".contents").removeClass("greentea");
    }
});
//Milk Options
$(".milks").on("click", function () {
    const userMilk = $("input[name=milk]:checked").val();
    if (userMilk === "yesMilk") {
        $(".yesMilk").addClass("selected");
        $(".noMilk").removeClass("selected");
        $(".contents").addClass("milk");
    }
    else {
        $(".noMilk").addClass("selected");
        $(".yesMilk").removeClass("selected");
        $(".contents").removeClass("milk");
    }
});

//Flavour Options
$(".flavour").on("click", function () {
    const userFlavour = $("input[name=flavour]:checked").val();
    if (userFlavour === "taro") {
        // $(".flavour.taro").addClass("selected");
        // $(".flavour").removeClass("selected");
        $(".contents").addClass("taro");
        $(".contents").removeClass("honeydew strawberry rose grape peach");
    }
    else if (userFlavour === "honeyDew") {
        // $(".flavour.honeyDew").addClass("selected");
        $(".contents").addClass("honeydew");
        $(".contents").removeClass("taro strawberry rose grape peach");
    }
    else if (userFlavour === "strawberry") {
        $(".contents").addClass("strawberry");
        $(".contents").removeClass("taro honeydew rose grape peach");
    }
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
    $("#teaBase").on("click", function(){
        $(".start").addClass("hidden");
    });
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
    
    $(".finalize").on("click", function(e){
        e.preventDefault();
        $("fieldset").toggleClass("hidden");
        $(".nameDrink").removeClass("hidden");
        $(".finalize").addClass("hidden");
        $(".done").removeClass("hidden");
    });
    $(".done").on("click",function(e){
        e.preventDefault();
        let userName = $("input[name=nameIt]").val();
        $(".addons").addClass("hidden");
        $("h2").append(`${userName}`);
        $(".replay").removeClass("hidden");
    });
    // On click display options
    // when option is selected next button is opened with options 
});