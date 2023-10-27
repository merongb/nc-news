import { useEffect,useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {

    return (
<nav className="nav-bar">
  <Link to="/" className="nav-link">Articles</Link>
  <Link to="/Topics" className="nav-link">Topics</Link>
  <Link to="/Users" className="nav-link">Users</Link>
</nav>
	);
}