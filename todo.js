
// Creating an function to generate random numbers
function RandomIdGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Generating Random numbers
// var RandId = RandomIdGenerate(8324, 2842);
var CustomID = RandomIdGenerate(2323, 2842);

let RanId = RandomIdGenerate(8324, 2842);

// Initialize an array to store the IDs of added items
let addTodo = [];


const searchArray = (value) => {
    // Assuming 'id' is the value you want to search for
    let idToFind = value;

    let foundKey = null;
    let foundValue = null; // Variable to store the found value

    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let storedItems = localStorage.getItem(key);

        console.log(`Checking key: ${key}`);

        if (storedItems) {
            let itemsArray = JSON.parse(storedItems);

            // Assuming 'id' is the property you want to search for
            for (let j = 0; j < itemsArray.length; j++) {
                console.log(`Checking item: ${JSON.stringify(itemsArray[j])}`);

                // Ensure the type of the id matches before comparison
                if (itemsArray[j].id === parseInt(idToFind, 10)) {
                    foundKey = key;
                    foundValue = itemsArray; // Store the found value
                    break; // exit the loop once key is found
                }
            }
        }

        // Move the condition outside of the inner loop
        if (foundKey) {
            break; // exit the outer loop once key is found
        }
    }

    return foundKey;
}

const Callback = (v) => {
    if (v) {
        console.log(`Finding Key: ${v}`)
        console.log(`Key Found: ${v}`);
        localStorage.removeItem(v);
    } else {
        console.error(`Key not found: ${v}`);
        console.error("Trying debug"); // Line number 
    }
}

function getCurrentDate() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = String(currentDate.getFullYear()).slice(-2); // Get the last two digits of the year

    return `${day}/${month}/${year}`;
}


// Add Todo

function AddTodo(id, RemoveElement) {

    let modalWindow = document.getElementById(id);

    modalWindow.style = "display:block;background-color: rgba(0, 0, 0, 0.288);";
    modalWindow.classList.add("show");
    modalWindow.removeAttribute(RemoveElement);

    let SaveBtn = modalWindow.querySelector("#SaveBtn");
    let topic = modalWindow.querySelector("#TopicName");
    let date = getCurrentDate();
    let details = modalWindow.querySelector("#TopicDetail");
    let waring = modalWindow.querySelector("#warnWind");

    if (topic.value && details.value) {
        topic.value = '';
        details.value = '';
    } else {
        topic.value = '';
        details.value = '';
    }
    
    const adding_data = () => {
        console.log(topic.value);
        console.log(topic.value.length);
    
        if ((topic.value.length > 1 && topic.value.length < 16) && (details.value.length > 1 && details.value.length < 60)) {
            modalWindow.classList.remove("show");
            modalWindow.classList.add("hide");
            modalWindow.style = "display:none";
            setTimeout(() => {
                modalWindow.classList.remove("hide");
            }, 1000);
    
            // Creating Elements
            let todo = document.createElement("div");
            Tdo.appendChild(todo);
    
            if (todo) {
                while (addTodo.some(item => item.id === CustomID)) {
                    CustomID = RandomIdGenerate(1343, 10309);
                }
    
                let container = document.createElement("div");
                let badge = document.createElement("div");
                let todoDate = document.createElement("h5");
                let todoTopic = document.createElement("h4");
                let todoDetails = document.createElement("p");
                let button = document.createElement("buttton");
    
                // Adding Class, id's, style, and some events in created elements
                todo.classList.add("p-3", "bg-body-tertiary", "border", "rounded-4", "list");
                button.classList.add("btn", "btn-outline-secondary");
    
                todo.setAttribute("id", CustomID);
                todoDate.setAttribute("class", "date");
                todoTopic.setAttribute("class", "topic");
                todoDetails.setAttribute("class", "details");
                button.setAttribute("onclick", `todoNextStep('todo', '${CustomID}')`);
    
                container.style = "display: grid; grid-template-columns: 1fr 1fr;";
                badge.style = "background-color: red;width: 10px;height: 10px;border-radius: 100%;";
                todoDate.style = "font-size: 0.8em;text-align: right;";
                todoDetails.style = "word-wrap: break-word;";
    
                todoDate.innerHTML = date;
                todoTopic.innerHTML = topic.value;
                todoDetails.innerHTML = details.value;
                button.innerHTML = "Let's Work";
    
                console.log(todoDate.innerText);
    
                todo.appendChild(container);
                todo.appendChild(todoTopic);
                todo.appendChild(todoDetails);
                todo.appendChild(button);
    
                container.appendChild(badge);
                container.appendChild(todoDate);
    
                RanName = RandomIdGenerate(143, 1920);
    
                // Retrieve existing todos from local storage
                let existingTodos = JSON.parse(localStorage.getItem(RanName)) || [];
    
                // Clear local storage
                localStorage.removeItem(RanName);
    
                // Add new todo to the existing todos
                existingTodos.push({
                    id: CustomID,
                    S_Id: RanName,
                    date: todoDate.innerText,
                    topic: todoTopic.innerText,
                    color: "red",
                    details: todoDetails.innerText,
                });
    
                // Save the updated array in local storage
                localStorage.setItem(RanName, JSON.stringify(existingTodos));
            }
        } else {
            if (!(topic.value.length > 1 && topic.value.length < 16)) {
                if (waring) {
                    waring.textContent = `Title of todo must be between 2 and 15 characters.`;
                }
            } else if (!(details.value.length > 1 && details.value.length < 60)) {
                if (waring) {
                    waring.textContent = `Details of todo must be between 2 and 59 characters.`;
                }
            } else {
                console.log("other");
            }
        }
    };
    

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default form submission
        adding_data();
    };

    // Check if the event listener is already attached
    const existingListener = SaveBtn.getAttribute("data-listener");
    if (!existingListener) {
        // Attach the event listener
        SaveBtn.addEventListener("click", handleClick);
        SaveBtn.setAttribute("data-listener", "true");
    }
    
    

    let Tdo = document.getElementById("todo");


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
    if (category === "todo") {

        // Selecting Todo Data from todo
        let todoItem = document.getElementById(id);
        console.log(todoItem);

        // Check if the element with the specified ID exists
        if (!todoItem) {
            console.error(`Element not found with id: ${id}`);
            return;
        }
        let todoItemDateElement = todoItem.querySelector(".date");

        // Check if the element with the specified ID exists
        if (!todoItemDateElement) {
            console.error(`Element not found with id: date - ${todoItemDateElement}`);
            return;
        }

        let todoItemDate = todoItemDateElement.innerText;

        let todoItemTopic = todoItem.querySelector(".topic").innerText;
        let todoItemDetails = todoItem.querySelector(".details").innerText;

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
                InProgressItemDetails.style = "word-wrap: break-word;";

                InProgressItemDate.setAttribute("class", "date");
                InProgressItemTopic.setAttribute("class", "topic");
                InProgressItemDetails.setAttribute("class", "details");
                InProgressItemBtn.setAttribute("onclick", `todoNextStep('todo', '${RanId}')`);

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

                RandName = RandomIdGenerate(143, 1920);

                // Store the item data in the array
                addedItems.push({
                    id: RanId,
                    date: todoItemDate,
                    topic: todoItemTopic,
                    color: "rgb(255, 238, 0)",
                    details: todoItemDetails,
                    previous_id: id,
                });



                // Save the addedItems array in local storage
                localStorage.setItem(RandName, JSON.stringify(addedItems));



                todoItem.remove();
            }
        } else {
            console.log("Test Two Failed");
            console.error("todoItemTopic is undefined");
        }

    }
    Callback(searchArray(id));

}

// Clear all todos

function ClearTodos() {
    // Get all keys from local storage
    let allKeys = Object.keys(localStorage);

    // Iterate through all keys and remove each key-value pair
    allKeys.forEach((key) => {
        localStorage.removeItem(key);
    });

    // Optionally, you can also reload the window after clearing the storage
    location.reload();
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

                // Iterate through the items and do something with them
                itemsArray.forEach((item) => {
                    // Assuming each item has a property named "color"
                    let color = item.color;
                    if (color == "red") {
                        recreateElementOnPage(item, "red", "todo", "Let's Work");
                    }
                    else {
                        recreateElementOnPage(item, "rgb(255, 238, 0)", "InProgress", "In Progress");
                    }

                });
            }
        }
    });
};

function recreateElementOnPage(item, color, idOfDiv, Values) {


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

    InProgressItemDate.setAttribute("class", "date");
    InProgressItemTopic.setAttribute("class", "topic");
    InProgressItemDetails.setAttribute("class", "details");


    container.style = "display:grid; grid-template-columns:1fr 1fr;";
    badge.style = "background-color: " + color + " ;width: 10px;height: 10px;border-radius: 100%;";
    InProgressItemDate.style = "font-size: 0.8em;text-align: right;";
    InProgressItemDetails.style = "word-wrap: break-word;";


    InProgressItemDate.innerText = item.date;
    InProgressItemTopic.innerText = item.topic;
    InProgressItemDetails.innerText = item.details;

    InProgressItemBtn.innerText = Values; // Set the innerText based on result.Text or any other property
    InProgressItemBtn.setAttribute("onclick", `todoNextStep('todo', '${item.id}')`);

    InProgressItem.appendChild(container);
    InProgressItem.appendChild(InProgressItemTopic);
    InProgressItem.appendChild(InProgressItemDetails);
    InProgressItem.appendChild(InProgressItemBtn);

    container.appendChild(badge);
    container.appendChild(InProgressItemDate);

    InProgress.appendChild(InProgressItem);
}



