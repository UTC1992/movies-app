"use client"
import { Button } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar>
        <h1>hello world</h1>
        <Button variant="contained" color="primary">HI</Button>
      </Navbar>
    </main>
  )
}
