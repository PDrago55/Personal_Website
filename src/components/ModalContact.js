import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./ModalContact.css";
function ModalContact() {
  //useState for my Forms
  const [open, setOpen] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName,
        lName,
        email,
        subject,
      }),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data, "success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* //build modal with material UI */}

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Contact
      </Button>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`Contact :)`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hey! If you want to book a meeting for consulting or just want to
            chat, let me know below! I'll get back to you ASAP!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="f_name"
            label="First Name"
            type="text"
            value={fName}
            onChange={(ev) => setfName(ev.target.value)}
          ></TextField>
          <TextField
            margin="dense"
            id="l_name"
            label="Last Name"
            type="text"
            value={lName}
            onChange={(ev) => setlName(ev.target.value)}
          ></TextField>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            fullWidth
          ></TextField>
          <TextField
            margin="normal"
            id="subject"
            label="Subject"
            type="text"
            value={subject}
            onChange={(ev) => setSubject(ev.target.value)}
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button
            // onClick={handleClickClose}
            color="primary"
            onClick={(ev) => {
              handleClickClose();
              handleSubmit(ev);
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ModalContact;
