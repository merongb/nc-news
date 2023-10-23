import { useEffect,useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {

    return (
<nav>
  <Link to="/">Articles</Link>
  <Link to="/comments">Comments</Link>
  <Link to="/users">Users</Link>
</nav>
	);
}