import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from 'next/link';
const Index = props => {
  return (
    <div>
      <Link href = "/sessions">
      Sessions
      </Link>

      <ul>
        {props.speakerData.map(speaker => 
          <li>{speaker.firstName} {speaker.lastName}</li>
        )}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const promise = axios
    .get("http://localhost:4000/speakers")
    .then(response => {
      return {
        haserror: "false",
        speakerData: response.data
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
