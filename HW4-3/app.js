var people = [
    { name: "John", age: 25 },
    { name: "Anna", age: 30 },
    { name: "Peter", age: 35 }
];

var ulElement = document.getElementById("people-list");

people.forEach(function(person) {
    var liElement = document.createElement("li");

    liElement.textContent = person.name + " - " + person.age + " years old";

    ulElement.appendChild(liElement);
});

//

var xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();