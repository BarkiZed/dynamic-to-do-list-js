// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select essential DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        // Alert if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Attach click event to remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the button to the list item and add to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
