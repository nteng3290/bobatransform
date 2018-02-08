//create an object with my "options for BBT"

console.log("Hello");

//if they user value picks green then it turns green, else it turns black
// pickABase = function (){}

const teaPlease = function (x,y){
    const userBase = $("input[name=base]:checked").val();
    console.log(userBase);
}

$(".teas").on("click", function(){
    const userBase = $("input[name=base]:checked").val();
    console.log(userBase);
    if (userBase === "green"){
        $(".third").addClass("greentea");
        $(".third").removeClass("blacktea");
    }
    else if (userBase === "black"){
        $(".third").addClass("blacktea");
        $(".third").removeClass("greentea");
    }
    else{
        $(".third").removeClass("blacktea greentea");
    }
});
$(".milks").on("click", function () {
    const userMilk = $("input[name=milk]:checked").val();
    console.log(userMilk);
    if (userMilk === "yesMilk") {
        $(".third").addClass("milk");
    }
    else if (userMilk === "noMilk") {
        $(".third").removeClass("milk");
    }
    else {
        $(".third").removeClass("milk");
    }
});
// $(".addFlavourNoMilk").on("click", function () {
//     const userFlavour = $("input[name=milk]:checked").val();
//     console.log(userMilk);
//     if (userMilk === "yesMilk") {
//         $(".third").addClass("milk");
//     }
//     else if (userMilk === "noMilk") {
//         $(".third").removeClass("milk");
//     }
//     else {
//         $(".third").removeClass("milk");
//     }
// });



//want to append a Colour on the page with the Value is selected

const hide = function(optionSelected, showOptions){
    $(optionSelected).on("click", function(){
        $(showOptions).removeClass("hidden");
    });
}


$(function(){
    hide("#teaBase", ".teas");
    $("#teaBase").on("click", function (e) {
        e.preventDefault();
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
    
    // On click display options
    // when option is selected next button is opened with options 
});