import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AddTask from "../pages/addTask";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../rtk/tasksSlice";
import Swal from "sweetalert2";
const AppNavbar = () => {
  const dispatch=useDispatch()
  const Tasks =useSelector((state)=>state.task)
  const DoneTasks =useSelector((state)=>state.completed)
  ////////////////////////////////////////////////////////////
const handleDeleteAll=()=>{
  Swal.fire({
    title: "Do you want to delete all tasks?",
    icon: "warning",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Delete",
    denyButtonText: `Don't delete`,
    confirmButtonColor: '#875D37',
    denyButtonColor: '#93785B',

    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      dispatch(clear())
    } 
  });
  
}

  /////////////////////////////////////////////////////////////
  const howManyTasks =()=>{
    return  Tasks.length
  }
  const howManyDoneTasks =()=>{
    return  DoneTasks.length
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const day = d.getDate();
  const month = months[d.getMonth()];
  const taskDate = d.getFullYear();

  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#3F362F" }}
      >
        <Container>
          <Link className="navbar-brand" to={"/"}>
            To-DO list
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white-50">
              {taskDate + " / " + month + "  " + day}
            </Nav>
            <Nav className="ms-auto">
              <Link className="nav-link" to={"/"}>
                All tasks 
                ({howManyTasks()})
              </Link>
              <Link className="nav-link" to={"/Completed"}>
                Completed ({howManyDoneTasks()})
              </Link>
              <button className="nav-link me-auto" onClick={handleShow}>
                Add task
              </button>
              <Modal
                className=" modal-content-bg-danger"
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <AddTask handleClose={handleClose}/>
                </Modal.Body>
              </Modal>
              <button className="nav-link me-auto" onClick={handleDeleteAll}>
                Delete All
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
