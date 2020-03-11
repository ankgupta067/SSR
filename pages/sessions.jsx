import React from "react";
import axios from "axios";
import Link from "next/link";
const Index = props => {
  return (
    <div>
      <ul>
        {props.sessionData.map(session => 
          <li>{session.title} {session.id}</li>
        )}
      </ul>
      <Link href="/">
          back
      </Link>
    </div>
  );
};

Index.getInitialProps = async () => {
  const promise = axios
    .get("http://localhost:4000/sessions")
    .then(response => {
      return {
        haserror: "false",
        sessionData: response.data
      };
    })
    .catch(error => {
      return {
        haserror: true,
        message: error.message
      };
    });
  return promise;
};

export default Index;
