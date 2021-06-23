import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  return <div>About, hobby: {location.state.hobby}</div>;
}
