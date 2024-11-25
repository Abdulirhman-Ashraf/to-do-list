import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../rtk/completed-slice";
const Completed = () => {
  const doneTasks = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const handleDelete=(task)=>{
    Swal.fire({
      title: "Do you want to delete this task?",
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
        dispatch(remove(task))
      }
    });
  }
  return (
    <>
      <Container>
        <Row>
          <h2 className="my-3 text-center text-warning-emphasis">
            Completed tasks ({doneTasks.length} tasks)
          </h2>
          {doneTasks.length !== 0 ? (
            doneTasks.map((task) => {
              const colors = [
                "#875D37",
                "#93785B",
                "#EDC8B8",
                "#F7EAA1",
              ];
              const index = Math.floor(Math.random() * colors.length);
              const tasksRandomColor = colors[index];
              return (
                <>
                  <Col key={task.id}>
                    <Card
                      className=" my-5 "
                      style={{
                        width: "300px",
                        height: "200px",
                        margin:"auto",
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
                        <MdDelete
                               style={{
                            fontSize: "35px",
                            float: "center",
                            cursor: "pointer",
                            Color: "93785B",
                          }}
                          onClick={()=>handleDelete(task)}
                        />
                      </Card.Footer>
                    </Card>
                  </Col>
                </>
              );
            })
          ) : (
            <div>
              <h3 className="my-3 text-center text-warning-emphasis">
                “Procrastination makes easy things hard and hard things harder.”
                —Mason Cooley
              </h3>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Completed;
