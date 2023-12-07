import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/esm/Stack";

const AddBar = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Add a new task</Form.Label>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
            required
              placeholder="new task"
              onChange={handleChange}
              value={task}
            />
            <Button type="submit">Add</Button>
          </Stack>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddBar;
