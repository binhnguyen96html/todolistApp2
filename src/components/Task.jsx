import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import Row from "react-bootstrap/Row";

const Task = ({ task, onEdit, onDelete }) => {
  const [editedTask, setEditedTask] = useState(task.taskName);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    onEdit(task.id, editedTask);
  }

  const handleDelete = () => {
    onDelete(task.id);
  }


  return (
    <div>
      <Stack direction="horizontal" gap={3} className="border rounded p-3 mt-1">
        {isEdit ? (
          <Form className="col-md-6" onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className="col-md-8">
                <Form.Control onChange={handleChange} value={editedTask}/>
              </Form.Group>
              <Form.Group as={Col}>
                <Button type="submit">Save</Button>
              </Form.Group>
            </Row>
          </Form>
        ) : (
          <div className="p-2 col-md-6">{task.taskName}</div>
        )}

        <div className="p-2 ms-auto" onClick={handleDelete}>
          <FaRegTrashAlt />
        </div>

        <div className="p-2" onClick={handleEdit}>
          <FaRegEdit />
        </div>
      </Stack>
    </div>
  );
};

export default Task;
