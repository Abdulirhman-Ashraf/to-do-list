import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../rtk/tasksSlice";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "./allTask.css";
import { getTask } from "../rtk/completed-slice";
import { useState } from "react";
import AddTask from "./addTask";
import Swal from "sweetalert2";
import addImage from "../images/output-removebg-preview (1).png";
import addImage2 from "../images/12f0244b-a8b6-4b5b-8fac-06b0ad221334-removebg-preview.png";
const AllTask = () => {
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (task) => {
    Swal.fire({
      title: "Do you want to delete this task?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
      confirmButtonColor: "#875D37",
      denyButtonColor: "#93785B",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(removeTask(task));
      }
    });
  };

  return (
    <Container>
      <Row>
        <h2 className="my-3 text-center text-warning-emphasis">
          All tasks ({tasks.length} task)
        </h2>
        <Col>
          <Button onClick={handleShow} className=" addTaskCard">
          {tasks.length !==0 ?(       <img
              src={addImage2}
              style={{ width: "300px", height: "190px" }}
              alt=""
            />):(
                   <img
              src={addImage}
              style={{ width: "300px", height: "200px" }}
              alt=""
            />
            )}
       
     
          </Button>
        </Col>
        <Modal
          className=" modal-content-bg-danger"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddTask handleClose={handleClose} />
          </Modal.Body>
        </Modal>

        {tasks.length !== 0 ? (
          tasks.map((task) => {
            const colors = ["#875D37", "#93785B", "#EDC8B8", "#F7EAA1"];
            const index = Math.floor(Math.random() * colors.length);
            const tasksRandomColor = colors[index];
            return (
              <>
                <Col key={task.id}>
                  <Card
                    className=" my-3 "
                    style={{
                      width: "300px",
                      margin: "auto",
                      minHeight: "200px",
                      backgroundColor: `${tasksRandomColor}`,
                    }}
                  >
                    <Card.Header>
                      <Card.Title>{task.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text style={{ color: "#1413148b" }}>
                        {task.description
                          ? task.description
                          : "This is the description for this task"}
                      </Card.Text>
                      <Card.Text>{task.date}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <IoCheckmarkDoneCircle
                        onClick={() => {
                          dispatch(getTask(task));
                          dispatch(removeTask(task));
                        }}
                        style={{
                          float: "left",
                          color: "#3F362F",
                          cursor: "pointer",
                          fontSize: "30px",
                        }}
                      />

                      <MdDelete
                        className=""
                        onClick={() => handleDelete(task)}
                        style={{
                          fontSize: "35px",
                          float: "right",
                          cursor: "pointer",
                          Color: "93785B",
                        }}
                      />
                    </Card.Footer>
                  </Card>
                </Col>
              </>
            );
          })
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default AllTask;
