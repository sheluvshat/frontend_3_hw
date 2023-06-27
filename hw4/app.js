var data = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo'];


var groupedData = {};
var i = 0;
while (i < data.length) {
    var value = data[i];
    var type = typeof value;
    if (!groupedData[type]) {
        groupedData[type] = [];
    }
    groupedData[type].push(value);
    i++;
}

var arrays = Object.values(groupedData); //схожь с for in


arrays.sort((a, b) => b.length - a.length);

console.log(arrays);