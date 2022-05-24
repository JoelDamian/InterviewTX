import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [responseList, setResponseListe] = useState([]);

  const getData = async () => {
    let data = await fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json());
    setResponseListe(data.results);
  };

  const renderData = () => {
    return responseList.map((d) => (
      <TableRow
        key={d.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {d.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {d.name}
        </TableCell>
        <TableCell align="right">
          <img src={d.image} width="200px" height="200px" alt="img" />
        </TableCell>
      </TableRow>
    ));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderData()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
