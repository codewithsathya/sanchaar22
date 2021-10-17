import React from "react";
import Button from "./Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ show, handleClose, content }) {
  return (
    <div>
      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText style={{ color: "#151719", fontWeight: "500" }}>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            tag="a"
            color="light"
            wideMobile
            style={{ color: "white", backgroundColor: "green" }}
          >
            <a href="https://www.meraevents.com/ticketWidget?eventId=245484&ucode=organizer&wcode=9063CD-9063CD-333333-9063CD-&theme=1">
              Pay
            </a>
          </Button>
          <Button
            tag="a"
            color="light"
            wideMobile
            onClick={handleClose}
            style={{ color: "green" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
