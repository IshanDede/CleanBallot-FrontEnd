import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUser,
  faChartBar,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons

function AdminPage() {
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [votersCount, setVotersCount] = useState(0);
  const [voterTurnout, setVoterTurnout] = useState(0);
  const [winner, setWinner] = useState("Not available");

  useEffect(() => {
    // Fetch the number of candidates from your backend
    fetch(`${process.env.REACT_APP_API_URL}/api/candidates`)
      .then((response) => response.json())
      .then((data) => {
        setCandidatesCount(data.length);
        console.log(data.length);
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });

    // Fetch the number of voters from your backend
    fetch(`${process.env.REACT_APP_API_URL}/api/voters`)
      .then((response) => response.json())
      .then((data) => {
        setVotersCount(data.length);
        console.log(data.length);
      })
      .catch((error) => {
        console.error("Error fetching voters:", error);
      });

    // Fetch the votes from your backend and calculate the voter turnout
    fetch(`${process.env.REACT_APP_API_URL}/api/voters`)
      .then((response) => response.json())
      .then((data) => {
        const votedVoters = data.filter((voter) => voter.status === "Voted");
        const turnout = (votedVoters.length / data.length) * 100;
        setVoterTurnout(turnout);
      })
      .catch((error) => {
        console.error("Error fetching votes:", error);
      });

    // Fetch the winner from your backend
    fetch(`${process.env.REACT_APP_API_URL}/api/candidates`)
      .then((response) => response.json())
      .then((data) => {
        // Find the candidate with the highest voteCount
        const winnerCandidate = data.reduce((prev, current) =>
          prev.voteCount > current.voteCount ? prev : current
        );

        setWinner(winnerCandidate.name); // Display the winner's name
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={12} className="p-0">
          <h1 className="text-center py-3">Admin Dashboard</h1>
        </Col>
        {/* Sidebar */}
        <Col sm={3} className="bg-light p-0 ">
          <Nav
            defaultActiveKey="/"
            className="flex-column align-items-center"
            style={{
              borderRight: "2px solid white",
              height: "100vh",
            }}
          >
            <Nav.Link
              className="text-dark"
              href="/admin/candidate"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                width: "100%",
                padding: "10px",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              Manage Candidates
            </Nav.Link>
            <Nav.Link
              className="text-dark"
              href="/admin/voter"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                width: "100%",
                padding: "10px",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              Manage Voters
            </Nav.Link>
            <Nav.Link
              className="text-dark"
              href="/sign-out"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                width: "100%",
                padding: "10px",
                transition: "background 0.3s, color 0.3s",
              }}
            >
              Sign Out
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main content */}
        <Col sm={9}>
          <Container fluid>
            <Row>
              {/* Cards */}
              <Col sm={3}>
                <Card className="mb-3 bg-light" style={{ height: "200px" }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faUsers} size="2x" />
                    <Card.Title className="mt-2 text-center">
                      Voters Registered
                    </Card.Title>
                    <Card.Text className="text-center">{votersCount}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card className="mb-3 bg-light" style={{ height: "200px" }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faUser} size="2x" />
                    <Card.Title className="mt-2 text-center">
                      Candidates Registered
                    </Card.Title>
                    <Card.Text className="text-center">
                      {candidatesCount}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card className="mb-3 bg-light" style={{ height: "200px" }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faChartBar} size="2x" />
                    <Card.Title className="mt-2 text-center">
                      Voter Turnout
                    </Card.Title>
                    <Card.Text className="text-center">
                      {Math.round(voterTurnout)}%
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={3}>
                <Card className="mb-3 bg-light" style={{ height: "200px" }}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faTrophy} size="2x" />
                    <Card.Title className="mt-2 text-center">
                      Winner Prediction
                    </Card.Title>
                    <Card.Text className="text-center">{winner}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Graph */}
            <Row>
              <Col>
                {/* You can add your graph component or use an image here */}
                <img
                  src={`${process.env.REACT_APP_API_URL}/public/images/dummy/piechartParty.jpg`}
                  alt="Graph"
                  style={{ width: "50%", height: "300px" }}
                />
                <img
                  src={`${process.env.REACT_APP_API_URL}/public/images/dummy/tableParty.png`}
                  alt="Graph"
                  style={{ width: "50%", height: "300px" }}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
