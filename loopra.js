  // Define the todolist array globally so it can be accessed by all functions
    const todolist = [{
      name: 'CODE',
      duedate: '2025-12-22'
    }, {
      name: 'READ',
      duedate: '2025-12-22'
    }, {
      name: 'SLEEP',
      duedate: '2025-12-22'
    }];

    // Function to render the list to the DOM
    function render() {
      let todohtml = '';
      todolist.forEach((todoItem, i) => {
        let { name, duedate } = todoItem; // Using object destructuring for cleaner code
        const html = `
          <div class="div-js">
            <span class="sp">${name}</span>
            <span  class="sp">${duedate}</span>
            <button class="delete-btn" onclick="
              todolist.splice(${i}, 1);
              render();
            ">Delete</button>
          </div>
        `;
        todohtml += html;
      });
      document.querySelector('.display').innerHTML = todohtml;
    }

    // Function to add a new item to the list
    function addTodo() {
      const inputElement = document.querySelector('.js-input');
      const dateElement = document.querySelector('.datin');
      const name = inputElement.value;
      const duedate = dateElement.value;

      if (name && duedate) { // Check if both fields have values
        todolist.push({ name, duedate });
        inputElement.value = ''; // Clear the input fields
        dateElement.value = '';
        render(); // Rerender the list
      }
    }

    // Event listeners
    document.querySelector('.add').addEventListener('click', addTodo);
    document.querySelector('.js-input').addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addTodo();
      }
    });
    
    // Initial render
    render();