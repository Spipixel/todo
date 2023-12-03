// Displaying Form to add todo 

// Creating an function to generate random numbers
function RandomIdGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Generating Random numbers
let RandId = RandomIdGenerate(8324, 2842);

let RanId = RandomIdGenerate(8324, 2842);

// Initialize an array to store the IDs of added items
let addTodo = [];

// Add Todo

function AddTodo() {
    let topic = prompt("Enter Topic name");
    let date = prompt("Enter Date In formate of DD/MM/YY");
    let details = prompt("Enter More details about your topic (in 20 words)");


    let Tdo = document.getElementById("todo");


    // Generating Random numbers
    let RandId = RandomIdGenerate(8324, 2842);

    // Creating Elements
    let todo = document.createElement("div");

    Tdo.appendChild(todo);

    if (todo) {

        while (addTodo.some(item => item.id === RanId)) {
            RanId = RandomIdGenerate(1343, 10309);
        }

        let container = document.createElement("div");
        let badge = document.createElement("div");

        let todoDate = document.createElement("h5");
        let todoTopic = document.createElement("h4");

        let todoDetails = document.createElement("p");
        let button = document.createElement("buttton");
        // Adding Class , id's , style and some events in creatred elements

        todo.classList.add("p-3", "bg-body-tertiary", "border", "rounded-4", "list");
        button.classList.add("btn", "btn-outline-secondary");

        todo.setAttribute("id", RandId);
        todoDate.setAttribute("id", "date");
        todoTopic.setAttribute("id", "topic");
        todoDetails.setAttribute("id", "details");
        button.setAttribute("onclick", "todoNextStep('todo', '" + RandId + "')");


        container.style = "display: grid; grid-template-columns: 1fr 1fr;";
        badge.style = "background-color: red;width: 10px;height: 10px;border-radius: 100%;";
        todoDate.style = "font-size: 0.8em;text-align: right;";

        todoDate.innerHTML = date;
        todoTopic.innerHTML = topic;
        todoDetails.innerHTML = details;
        button.innerHTML = "Let's Work";

        console.log(todoDate.innerText);


        todo.appendChild(container);
        todo.appendChild(todoTopic);
        todo.appendChild(todoDetails);
        todo.appendChild(button);

        container.appendChild(badge);
        container.appendChild(todoDate);

        // Store the item data in the array
        addTodo.push({
            id: RandId,
            date: todoDate.innerText,
            topic: todoTopic.innerText,
            color: "red",
            details: todoDetails.innerText,
        });

        // Save the addedItems array in local storage
        RanName = RandomIdGenerate(143, 1920);
        localStorage.setItem(RanName, JSON.stringify(addTodo));


    }

}




// Custom Theme

document.addEventListener('DOMContentLoaded', function () {
    const customDiv = document.querySelector('.rid');
    const customDiv1 = document.querySelector('.rid1');
    const customDiv2 = document.querySelector('.rid2');
    const themeToggleButtons = document.querySelectorAll('[data-bs-theme-value]');

    // Function to update the theme based on the selected mode
    function updateTheme(theme) {
        if (theme === 'light') {
            let lightColor = "#eeeeee";
            customDiv.style.backgroundColor = lightColor;
            customDiv1.style.backgroundColor = lightColor;
            customDiv2.style.backgroundColor = lightColor;  // Light mode background color
        } else if (theme === 'dark') {
            let darkColor = "#6d6a6a";
            customDiv.style.backgroundColor = darkColor;
            customDiv1.style.backgroundColor = darkColor;
            customDiv2.style.backgroundColor = darkColor;  // Dark mode background color
        }

        // Save the selected theme to localStorage
        localStorage.setItem('selectedTheme', theme);
    }

    // Event listener for theme toggle buttons
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedTheme = this.getAttribute('data-bs-theme-value');
            updateTheme(selectedTheme);
        });
    });

    // Check if a theme is stored in localStorage and apply it on page load
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        updateTheme(storedTheme);
    }
});

// Todo Main Js 

function todoNextStep(category, id) {
    // If category is todo then 
    if (category == "todo") {

        // Selecting Todo Data from todo
        let todoItem = document.getElementById(id);
        let todoItemDate = todoItem.querySelector("#date").textContent;
        let todoItemTopic = todoItem.querySelector("#topic").textContent;
        let todoItemDetails = todoItem.querySelector("#details").textContent;

        // Test One Passed
        console.log("Test One Passed");


        // Initialize an array to store the IDs of added items
        let addedItems = [];


        // Test Two
        if (todoItemTopic != undefined) {
            // Now selecting div from in progress section
            let InProgress = document.getElementById("InProgress");

            // Creating div inside InProgress div
            let InProgressItem = document.createElement("div");
            // Add Classes in Container Div element
            InProgressItem.classList.add("p-3", "bg-body-tertiary", "border", "rounded-4", "list");
            // Adding id from random generated numbers
            RanId = RandomIdGenerate(1343, 10309);

            // Check if the generated ID already exists
            while (addedItems.some(item => item.id === RanId)) {
                RanId = RandomIdGenerate(1343, 10309);
            }

            InProgressItem.setAttribute("id", RanId);

            InProgress.appendChild(InProgressItem);

            console.log("Test Two Passed");

            if (InProgressItem) {
                let container = document.createElement("div");
                let badge = document.createElement("div");
                let InProgressItemDate = document.createElement("h5");
                let InProgressItemTopic = document.createElement("h4");
                let InProgressItemDetails = document.createElement("p");
                let InProgressItemBtn = document.createElement("button");

                InProgressItemBtn.classList.add("btn", "btn-outline-secondary");

                container.style = "display:grid; grid-template-columns:1fr 1fr;";
                badge.style = "background-color: rgb(255, 238, 0);width: 10px;height: 10px;border-radius: 100%;";
                InProgressItemDate.style = "font-size: 0.8em;text-align: right;";

                InProgressItemDate.setAttribute("id", "date");
                InProgressItemTopic.setAttribute("id", "topic");
                InProgressItemDetails.setAttribute("id", "details");

                InProgressItemDate.innerHTML = todoItemDate;
                InProgressItemTopic.innerHTML = todoItemTopic;
                InProgressItemDetails.innerHTML = todoItemDetails;
                InProgressItemBtn.innerText = "Work Completed";

                InProgressItem.appendChild(container);
                InProgressItem.appendChild(InProgressItemTopic);
                InProgressItem.appendChild(InProgressItemDetails);
                InProgressItem.appendChild(InProgressItemBtn);

                container.appendChild(badge);
                container.appendChild(InProgressItemDate);
                console.log("Test Three Passed");

                // Store the item data in the array
                addedItems.push({
                    id: RanId,
                    date: todoItemDate,
                    topic: todoItemTopic,
                    color: "rgb(255, 238, 0)",
                    details: todoItemDetails,
                });

                // Save the addedItems array in local storage
                RandName = RandomIdGenerate(143, 1920);
                localStorage.setItem(RandName, JSON.stringify(addedItems));

                todoItem.remove();

                // Assuming you know the id value
                let idToRemove = id;

                // Iterate through all localStorage entries
                for (let i = 0; i < localStorage.length; i++) {
                    let key = localStorage.key(i);
                    let storedItems = JSON.parse(localStorage.getItem(key));

                    // Check if the item with the matching ID is found
                    let foundIndex = storedItems.findIndex(item => item.id === idToRemove);
                    console.log(key);

                    if (foundIndex !== -1) {
                        // Remove the entire key-value pair from localStorage
                        localStorage.removeItem(key);
                        console.log(`Removed item with ID ${idToRemove} by removing key ${key}`);
                        // Break the loop if you only want to remove the first occurrence
                        break;
                    }
                }




            }
        } else {
            console.log("Test Two Failed");
            console.error("todoItemTopic is undefined");
        }

    }
}

// Load items from local storage when the page is reloaded
window.onload = function () {
    // Get all keys from local storage
    let allKeys = Object.keys(localStorage);

    // Iterate through all keys
    allKeys.forEach((key) => {
        // Check if the key matches a certain pattern or criteria
        // For example, you can check if the key starts with a specific prefix
        if (key < 1920) {
            // Retrieve the item using the key
            let storedItems = localStorage.getItem(key);

            if (storedItems) {
                let itemsArray = JSON.parse(storedItems);

                // Now you have the itemsArray for this key
                console.log(itemsArray);

                // Iterate through the items and do something with them
                itemsArray.forEach((item) => {
                    // Assuming each item has a property named "color"
                    let color = item.color;

                    localStorage.removeItem(696);

                    if (color == "red") {
                        recreateElementOnPage(item, "red", "todo");
                    }
                    else {
                        recreateElementOnPage(item, "rgb(255, 238, 0)", "InProgress");
                    }

                });
            }
        }
    });
};

function recreateElementOnPage(item, color, idOfDiv) {


    let InProgress = document.getElementById(idOfDiv);
    let InProgressItem = document.createElement("div");
    InProgressItem.classList.add("p-3", "bg-body-tertiary", "border", "rounded-4", "list");
    InProgressItem.setAttribute("id", item.id);

    let container = document.createElement("div");
    let badge = document.createElement("div");
    let InProgressItemDate = document.createElement("h5");
    let InProgressItemTopic = document.createElement("h4");
    let InProgressItemDetails = document.createElement("p");
    let InProgressItemBtn = document.createElement("button");

    InProgressItemBtn.classList.add("btn", "btn-outline-secondary");


    container.style = "display:grid; grid-template-columns:1fr 1fr;";
    badge.style = "background-color: " + color + " ;width: 10px;height: 10px;border-radius: 100%;";
    InProgressItemDate.style = "font-size: 0.8em;text-align: right;";
    InProgressItemDate.innerText = item.date;
    InProgressItemTopic.innerText = item.topic;
    InProgressItemDetails.innerText = item.details;
    InProgressItemBtn.innerText = "Work Completed";

    InProgressItem.appendChild(container);
    InProgressItem.appendChild(InProgressItemTopic);
    InProgressItem.appendChild(InProgressItemDetails);
    InProgressItem.appendChild(InProgressItemBtn);

    container.appendChild(badge);
    container.appendChild(InProgressItemDate);

    InProgress.appendChild(InProgressItem);
}
