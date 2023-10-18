import React from "react";
import Info from "./Info";
import Votingcard from "./Votingcard";

export default function HomePage(props) {
  return (
    <>
      <Info />
      <Votingcard
        votingCandidate={props.votingCandidate}
        handleClick={props.handleClick}
      />
    </>
  );
}
