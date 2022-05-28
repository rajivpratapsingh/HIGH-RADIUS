import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";

export default function Edit({
  open,
  sl_no,
  invoice_currency,
  cust_payment_terms,

  editchangeHandler,
  submitHandler,
  handleClose,
}) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "#2A3E4C",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
            {/* <TextField
              id="sl_no"
              name="sl_no"
              variant="outlined"
              value={sl_no}
              // onChange={editchangeHandler}
              margin="dense"
              // style={{
              //   backgroundColor: "white",
              //   borderRadius: 8,
              //   padding: "offset",
              // }}
            /> */}
            <TextField
              id="invoice_currency"
              name="invoice_currency"
              label="Invoice currency"
              variant="outlined"
              onChange={editchangeHandler}
              value={invoice_currency}
              margin="dense"
              placeholder="USD"
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: "offset",
              }}
            />
            <TextField
              m={30}
              pl={10}
              id="cust_payment_terms"
              name="cust_payment_terms"
              label="Customer Payment Terms"
              onChange={editchangeHandler}
              value={cust_payment_terms}
              variant="outlined"
              margin="dense"
              placeholder="ABCD"
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: "offset",
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => handleClose(true)}>
              Edit
            </Button>

            <Button variant="outlined" onClick={() => handleClose(false)}>
              Cancel
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
