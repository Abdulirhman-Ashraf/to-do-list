import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTask } from "../rtk/tasksSlice";
import { useNavigate } from "react-router-dom";
import goodJobImage from '../images/2bdd22c6-938e-41e7-9201-133dde35e026-removebg-preview.png'
import Swal from "sweetalert2";
const AddTask = (props) => {
  const navigation = useNavigate();
  const [tasksTitle, setTasksTitle] = useState("");
  const [tasksDate, setTasksDate] = useState("");
  const [tasksDescription, setDescription] = useState("");
  const tasksId = Date.now();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTasks = () => {
    if (tasksTitle) {
      dispatch(
        addTask({
          id: tasksId,
          title: tasksTitle,
          date: tasksDate,
          description: tasksDescription,
        })
      );
      navigation("/");
      Swal.fire(
        {title:"best wishes for you!",
          confirmButtonColor: '#93785B',
          imageUrl: goodJobImage,
          imageWidth: 270,
          imageHeight: 300,
          imageAlt: "Custom image"
        });
      props.handleClose()
    } else {
      Swal.fire(
        {title:"Input the title!",
          icon:"warning",
          confirmButtonColor: '#93785B',

        });

    }
  };
  return (
    <>
      <Container>
        <Form
          onSubmit={handleSubmit}
          style={{
            margin: "30px auto",
            padding: "10px",
          }}
        >
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>title</Form.Label>
            <Form.Control
              onChange={(e) => setTasksTitle(e.target.value)}
              type="text"
              placeholder="title..."
            />
            <Form.Text className="text-dark">
              "All our dreams can come true, if we have the courage to pursue
              them"
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="Date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setTasksDate(e.target.value)}
              placeholder="date..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />
          </Form.Group>
          <Button
          className="btn"
            style={{ backgroundColor: "#93785B" }}
            onClick={handleTasks}
          >
            Add Task
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddTask;
