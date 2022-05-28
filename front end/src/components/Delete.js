import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./component.css";
export default function Delete(open, handleClose) {
  return (
    <div className="del">
      <Dialog open={false} onClose={handleClose}>
        <DialogTitle className="del">Delete Records?</DialogTitle>
        <DialogContent className="del">
          <DialogContentText className="dele">
            Are you sure you want to delete these record[s].
          </DialogContentText>
        </DialogContent>
        <DialogActions className="del">
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
