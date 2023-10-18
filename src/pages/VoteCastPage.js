import React, { useEffect, useState } from 'react'
import Votingcard from '../components/Votingcard'
import Info from "../components/Info";
import Footer from "../components/Footer"

function VoteCastPage() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        // Fetch candidate data from the API
        fetch(`${process.env.REACT_APP_API_URL}/api/candidates`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Set the fetched data to the candidates state
                setCandidates(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    const handleClick = () => {
        alert("Button clicked!");
    };
    return (
        <>
            <Info />
            <Votingcard
                votingCandidate={candidates}
                handleClick={handleClick}
            />
            <Footer />

        </>
    )
}

export default VoteCastPage