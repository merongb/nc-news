import { useEffect,useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {

    return (
<nav>
  <Link to="/">Articles</Link>
  <Link to="/Topics">Topics</Link>
  <Link to="/Users">Users</Link>
</nav>
	);
}