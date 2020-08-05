import React, { FC, useState } from "react";
import { Modal, Button } from "@material-ui/core";
import classes from "./ModalWindow.module.scss";
import SignUp from "../sign-up/sign-up.component";

const ModalWindow: FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <SignUp />
    </div>
  );

  return (
    <div>
      <Button href="#text-buttons" onClick={handleOpen} className={classes.btn}>
        Зарегистрироваться
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default ModalWindow;
