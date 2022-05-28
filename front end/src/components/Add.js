/* eslint-disable no-unused-vars */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// import TimePicker from '@mui/lab/TimePicker';
// import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { useState } from "react";

export default function Add({
  open,
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

  changeHandler,
  submitHandler,
  handleCloseadd,
  handleClickOpen,
}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "red" : "green",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = React.useState(new Date("2022-01-05T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Dialog open={false} onClose={handleCloseadd} maxWidth={true} mx={10}>
        <Box
          sx={{
            backgroundColor: "#2d4250",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DialogTitle>ADD</DialogTitle>

          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="business_code"
                  name="business_code"
                  onChange={changeHandler}
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="cust_number"
                  name="cust_number"
                  onChange={changeHandler}
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="clear_date"
                      inputFormat="MM/dd/yyyy"
                      name="clear_date"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField {...params} className="raj" />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="buisness_year"
                  name="buisness_year"
                  onChange={changeHandler}
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="doc_id"
                  onChange={changeHandler}
                  name="doc_id"
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="posting_date"
                      name="posting_date"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={changeHandler}
                      renderInput={(params) => (
                        <TextField {...params} className="raj" />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="document_create_date"
                      name="document_create_date"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={changeHandler}
                      renderInput={(params) => (
                        <TextField {...params} className="raj" />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="due_in_date"
                      name="due_in_date"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={changeHandler}
                      renderInput={(params) => (
                        <TextField {...params} className="raj" />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="invoice_currency"
                  name="invoice_currency"
                  onChange={changeHandler}
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="document_type"
                  name="document_type"
                  onChange={changeHandler}
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="posting_id"
                  name="posting_id"
                  onChange={changeHandler}
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="total_open_amount"
                  name="total_open_amount"
                  variant="filled"
                  margin="dense"
                  onChange={changeHandler}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="baseline_create_date"
                      name="baseline_create_date"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      style={{
                        backgroundColor: "white",
                        borderRadius: 8,
                        padding: "offset",
                      }}
                      onChange={changeHandler}
                      renderInput={(params) => (
                        <TextField {...params} className="raj" />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="cust_payment_terms"
                  name="cust_payment_terms"
                  variant="filled"
                  onChange={changeHandler}
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="filled-basic"
                  label="invoice_id"
                  name="invoice_id"
                  onChange={changeHandler}
                  variant="filled"
                  margin="dense"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                    padding: "offset",
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button className="abc" onClick={() => handleCloseadd()}>
              Cancel
            </Button>
            <Button onClick={() => submitHandler()}>Add</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
