import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_GET } from "../Config/Api";
import Header from "./Header";
import Profile from "./Profile";

function Parent(props) {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(URL_GET).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log("posts", posts);

  return (
    <div className="Parent">
      <h1>XYZ - Company</h1>
      <Header desc="List of Office Employees" />
      <Profile clientData={posts?.data} />
    </div>
  );
}

export default Parent;
