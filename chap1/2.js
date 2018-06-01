$("<div/>", {
    "class": "test",
    text: "click me!",
    click: function () {
        $(this).toggleClass("test");
    }
}).appendTo("body");

console.log($().on);