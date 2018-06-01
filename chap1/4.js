//js对象和事件都是自定义的
var foo = {"name": "robin", "age": 27};
var jq = $(foo);
jq.on("custom", function () {
    console.log("custom event was called");
});
jq.trigger('custom');


