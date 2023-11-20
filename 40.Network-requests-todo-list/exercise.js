async function fetchTodos() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      return data;
  }

  fetchTodos()
    .then (todoList => {
      console.log(todoList);
    })
    .catch((err) => console.error(err))
