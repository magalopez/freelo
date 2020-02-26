import React from "react";
import { useParams } from "react-router-dom";

export default function() {
  let { slug } = useParams();
  return <div> Videos! {slug} </div>;
}
