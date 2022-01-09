import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { pmoActions } from "../../../store/pmo-slice";

import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,

  "&>*": {
    display: "block",
    margin: "2em auto",
  },
};

export default function BuyNowModal({ buyNowModalOpen, setBuyNowModalOpen }) {
  //   const { updateModal } = useSelector((state) => state.pmo);
  //   const dispatch = useDispatch();

  const onOkHandle = () => {
    setBuyNowModalOpen(false);
    // dispatch(pmoActions.setUpdateModal());
    // dispatch(pmoActions.redirectToProjectList());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={buyNowModalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={buyNowModalOpen}>
          <Box sx={style}>
            <Typography
              variant="h6"
              style={{ textAlign: "center" }}
              data-test="modal-successful-message"
            >
              Thank you for your interest !!!
              <br /> <p>for more details</p>
              <small>please call on 8920310622</small>
            </Typography>
            <Button variant="contained" color="primary" onClick={onOkHandle}>
              Ok
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
