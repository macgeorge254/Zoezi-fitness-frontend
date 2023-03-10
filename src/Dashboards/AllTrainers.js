import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';
// import { UilArrowCircleRight } from "@iconscout/react-unicons";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

function createData1(name, trackingId, date, status, client_goal) {
  return { name, trackingId, date, status, client_goal };
}

function createData2(name, trackingId, date, status, client_goal) {
  return { name, trackingId, date, status, client_goal };
}

const users = [
  createData1('DR. Stockmann', 38, '110kg', '+254712345678', 'Lose Weight'),
  createData1('DR. Stockmann', 38, '110kg', '+254712345678', 'Lose Weight'),
  createData1('DR. Stockmann', 38, '110kg', '+254712345678', 'Lose Weight'),
];

const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

export default function BasicTable({ trainers }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="tables">
        <Sidebar />
        <div className="full-table">
          <h3>Trainers</h3>
          <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>

                  <TableCell align="left">Clients</TableCell>

                  <TableCell align="left">Workouts</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Contact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: 'white' }}>
                {trainers?.map((trainer) => (
                  <TableRow key={trainer?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {trainer?.firstname} {trainer?.lastname}
                    </TableCell>

                    <TableCell align="left">{trainer?.clients?.length}</TableCell>

                    <TableCell align="left">{trainer?.exercises?.length}</TableCell>
                    <TableCell align="left">
                      <span className="status">{trainer?.email}</span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      {trainer?.contact}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="t-button">
            <button
              className="table-button"
              onClick={() => {
                console.log('clicked');
                navigate('/AddTrainer');
              }}
            >
              Add Trainer
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
