import Container from "react-bootstrap/Container";
import List from "./components/List";
import AddBar from "./components/AddBar";
import { useEffect, useState } from "react";
import axios from 'axios'


const App = () => {
  const [tasks, setTasks] = useState([]);

  //FETCH DATA
  useEffect(() => {
    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
    }

    fetchTasks();

  }, [])


  //CREATE DATA
  const createTask = async (task) => {
    const response = await axios.post('http://localhost:3001/tasks',
        {taskName: task}
    )

    console.log(response.data)

    const updatedTasks = [
      ...tasks,
        response.data
    ];

    setTasks(updatedTasks);
    console.log(response);
  };


  //EDIT DATA
  const editTask = async (id, taskName) => {
    const response = await axios.put(`http://localhost:3001/tasks/${id}`, {
        taskName
    })

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          ...response.data
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  //DELETE DATA
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);

  };

  return (
    <div>
      <Container className="border rounded mt-5 p-3">
        <h2 className="py-3 text-center">TO DO LIST</h2>

        <AddBar onAdd={createTask} />

        <hr className="p-3" />

        <List tasks={tasks} onEdit={editTask} onDelete={deleteTask}/>
      </Container>
    </div>
  );
};

export default App;
