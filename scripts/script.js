//create an object with my "options for BBT"

console.log("Hello")

// const drinks = {
//     black tea: [
//         {
//             title: 'Early Bird',
//             price: '$$'
//         },
//         {
//             title: 'Dark Horse',
//             price: '$'
//         },
//         {
//             title: 'Le Gourmand',
//             price: '$'
//         }
//     ],
//     green tea: [
//         {
//             title: 'David\'s Tea',
//             price: '$'
//         },
//         {
//             title: 'Tealish',
//             price: '$$'
//         },
//         {
//             title: 'Teavana',
//             price: '$'
//         }
//     ]
// };
const hide = function(x,y){
    $(x).on("click", function(e){
        e.preventDefault();
        $(y).removeClass("hidden");
    });
}

$(function(){
    hide("#teaBase", ".teas");
    // $("#teaBase").on("click", function (e) {
    //     e.preventDefault();
    //     $(".teas").removeClass("hidden");
    // });
    hide("#black", ".milks");
    // $("#black").on("click", function () {
    //     $(".milks").removeClass("hidden");
    // });
    hide("#green",".milks");
    // $("#green").on("click", function(){
    //     $(".milks").removeClass("hidden");
    // });
    hide("#yesMilk",".addFlavourWithMilk");
    $("#yesMilk").on("click", function(){
        $(".addFlavourNoMilk").addClass("hidden");
    });
    hide ("#noMilk",".addFlavourNoMilk");
    $("#noMilk").on("click",function(){
        $(".addFlavourWithMilk").addClass("hidden");
    });
    hide(".flavourShot",)
    
    // On click display options
    // when option is selected next button is opened with options 
});