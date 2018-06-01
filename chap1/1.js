(function (window, undefined) {
    var jquery = "..jquery具体实现..";
    //do things
    window.jquery = window.$ = jquery;
})(window);


$('btn').click(function () {
    $('span',this).addClass('fontRed')
});