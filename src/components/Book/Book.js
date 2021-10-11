import React from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Book = () => {
  const { bedType } = useParams();
  const { user } = useAuth();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome!! {user.displayName}</h1>
      <h1>Let's book a {bedType} Room.</h1>
      <p>
        Want a <Link to="/home">different room?</Link>{" "}
      </p>
    </div>
  );
};

export default Book;
