/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
// import { getData } from "../services/data";
// import { DataGrid } from "@mui/x-data-grid";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import Footer from "./Footer";
import Pagination from "./Pagination";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@mui/material/Button";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

import {
  addInvoice,
  deleteInvoice,
  getData,
  updateInvoice,
} from "../services/data";
import { TablePagination, TextField } from "@mui/material";
import Header from "./Header";
import { Box } from "@mui/system";
import { ButtonGroup, Navbar } from "react-bootstrap";
const buttonstyle = {
  backgroundColor: "#283D4A",
  color: "#fff",
  paddingLeft: "60px",
  paddingRight: "60px",
  "&:hover": {
    backgroundColor: "#14AFF1",
    color: "#fff",
  },
};
const search = {
  backgroundColor: "white",
  borderRadius: "22px",
  marginLeft: "50px",
  width: "320px",
};
function MyGrid() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  const [open, setOpen] = useState(false);

  const [count, setCount] = React.useState(0);
  const [data, setData] = useState([]);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
  const [invoice, setInvoice] = useState({
    sl_no: "",
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  });
  const {
    sl_no,
    business_code,
    cust_number,
    clear_date,
    buisness_year,
    doc_id,
    posting_date,
    document_create_date,
    due_in_date,
    invoice_currency,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    cust_payment_terms,
    invoice_id,
  } = invoice;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const editchangeHandler = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...setInvoice, [name]: value });
  };

  const deleteHandler = async () => {
    let response = await deleteInvoice(invoice.sl_no);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let response = await addInvoice(invoice);
    if (response) {
      setInvoice({
        business_code: "",
        cust_number: "",
        clear_date: "",
        buisness_year: "",
        doc_id: "",
        posting_date: "",
        document_create_date: "",
        due_in_date: "",
        invoice_currency: "",
        document_type: "",
        posting_id: "",
        total_open_amount: "",
        baseline_create_date: "",
        cust_payment_terms: "",
        invoice_id: "",
      });
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async (update) => {
    if (update) {
      let response = await updateInvoice(invoice);
      if (response) {
        setInvoice({
          sl_no: "",
          invoice_currency: "",
          cust_payment_terms: "",
        });
      }
    }
    setOpen(false);
  };

  const handleCloseadd = () => {
    setOpen(false);
  };
  const editHandler = () => {
    setOpen(true);
  };

  const checkHandler = (e, sl_no) => {
    if (e.target.checked) {
      let editInvoice = data.filter(
        (editinvoice) => editinvoice.sl_no === sl_no
      )[0];
      setInvoice(editInvoice);
    }
  };

  useEffect(() => {
    async function a() {
      let response = await getData();
      setData(response);
    }
    a();
  }, []);

  return (
    <>
      <Header />
      <div>
        <Navbar className="Nav1">
          <Box
            sx={{ display: "flex", flexDirection: "row", marginLeft: "30px" }}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={buttonstyle}
              className="buton"
            >
              <Button className="predict" sx={buttonstyle}>
                PREDICT
              </Button>
              <Button className="ana" sx={buttonstyle}>
                ANALYTICS VIEW
              </Button>
              <Button className="adv" sx={buttonstyle}>
                ADVANCE SEARCH
              </Button>
            </ButtonGroup>

            {/* <item>
              <Button
                variant="outlined"
                // onClick={handleClickOpen}
                sx={buttonstyle}
              >
                PREDICT
              </Button>
            </item>
            <item>
              <Button
                variant="contained"
                // onClick={editHandler}
                // disabled={open}
                // onClose={disAbled}
                sx={buttonstyle}
              >
                ANALYTICS VIEW
              </Button>
            </item>
            <item>
              <Button
                variant="outlined"
                // onClick={deleteHandler}
                sx={buttonstyle}
              >
                ADVANCE SEATCH
              </Button>
            </item> */}
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              style={search}
              id="filled-basic"
              label="Search Customer Id"
              variant="filled"
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginLeft: "52px" }}
          >
            <item>
              <Button
                variant="outlined"
                onClick={() => handleClickOpen()}
                sx={buttonstyle}
              >
                ADD
              </Button>
            </item>
            <item>
              <Button
                variant="contained"
                onClick={() => handleClickOpen(2)}
                // disabled={open}
                // onClose={disAbled}
                sx={buttonstyle}
              >
                EDIT
              </Button>
            </item>
            <item>
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={buttonstyle}
              >
                DELETE
              </Button>
            </item>
          </Box>
        </Navbar>
      </div>
      <Edit
        open={open}
        sl_no={sl_no}
        invoice_currency={invoice_currency}
        cust_payment_terms={cust_payment_terms}
        handleClose={handleClose}
        editchangeHandler={editchangeHandler}
        onClick={editHandler}
      />
      <Add
        open={open}
        business_code={business_code}
        cust_number={cust_number}
        clear_date={clear_date}
        buisness_year={buisness_year}
        doc_id={doc_id}
        posting_date={posting_date}
        document_create_date={document_create_date}
        due_in_date={due_in_date}
        invoice_currency={invoice_currency}
        document_type={document_type}
        posting_id={posting_id}
        total_open_amount={total_open_amount}
        baseline_create_date={baseline_create_date}
        cust_payment_terms={cust_payment_terms}
        invoice_id={invoice_id}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        handleCloseadd={handleCloseadd}
        onClick={handleClickOpen}
      />

      <Delete
        onClick={handleClickOpen}
        open={open}
        handleCloseadd={handleCloseadd}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead size={"small"}>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell align="center">sl_no</TableCell>
              <TableCell align="center">business_code</TableCell>
              <TableCell align="center">cust_number</TableCell>
              <TableCell align="center">clear_date</TableCell>
              <TableCell align="center">buisness_year</TableCell>
              <TableCell align="center">doc_id</TableCell>
              <TableCell align="center">posting_date</TableCell>
              <TableCell align="center">document_create_date</TableCell>
              <TableCell align="center">document_create_date1</TableCell>
              <TableCell align="center">due_in_date</TableCell>
              <TableCell align="center">invoice_currency</TableCell>
              <TableCell align="center">document_type</TableCell>
              <TableCell align="center">posting_id</TableCell>
              <TableCell align="center">area_business</TableCell>
              <TableCell align="center">total_open_amount</TableCell>
              <TableCell align="center">baseline_create_date</TableCell>
              <TableCell align="center">cust_payment_terms</TableCell>
              <TableCell align="center">invoice_id</TableCell>
              <TableCell align="center">isOpen</TableCell>
              <TableCell align="center">aging_bucket</TableCell>
              <TableCell align="center">is_deleted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.sl_no}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {" "}
                <TableCell component="th" scope="row">
                  <Checkbox
                    style={{
                      color: "#fff",
                    }}
                    onClick={(e) => checkHandler(e, row.sl_no)}
                  />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  {row.sl_no}
                </TableCell>
                <TableCell align="right">{row.business_code}</TableCell>
                <TableCell align="right">{row.cust_number}</TableCell>
                <TableCell className="clearpart" align="right">
                  {row.clear_date}
                </TableCell>
                <TableCell align="right">{row.buisness_year}</TableCell>
                <TableCell align="right">{row.doc_id}</TableCell>
                <TableCell align="right">{row.posting_date}</TableCell>
                <TableCell align="right">{row.document_create_date}</TableCell>
                <TableCell align="right">{row.document_create_date1}</TableCell>
                <TableCell align="right">{row.due_in_date}</TableCell>
                <TableCell align="right">{row.invoice_currency}</TableCell>
                <TableCell align="right">{row.document_type}</TableCell>
                <TableCell align="right">{row.posting_id}</TableCell>
                <TableCell align="right">{row.area_business}</TableCell>
                <TableCell align="right">{row.total_open_amount}</TableCell>
                <TableCell align="right">{row.baseline_create_date}</TableCell>
                <TableCell align="right">{row.cust_payment_terms}</TableCell>
                <TableCell align="right">{row.invoice_id}</TableCell>
                <TableCell align="right">{row.isOpen}</TableCell>
                <TableCell align="right">{row.aging_bucket}</TableCell>
                <TableCell align="right">{row.is_deleted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rows={data}
        color={"#fff"}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={48579}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="page"
      />
      <Footer />
    </>
  );
}
export default MyGrid;
