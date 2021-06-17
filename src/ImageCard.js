import React, { useState } from "react";
import "./ImageCard.css";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

// function getModalStyle() {
//   const top = 30;
//   const left = 20;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 200,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     height:400,
//     objectFit:"contain",
//   },
// }));

function ImageCard({ detail }) {
  //   console.log(detail.img_src);
  // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="card">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div  className="card__modal">
          <img src={detail.img_src} alt="" />
        </div>
      </Modal>

      <div className="card__img" onClick={handleClick}>
        <img src={detail.img_src} alt="" />
      </div>
      <div className="card__details">
        <p>Earth Date: {detail.earth_date}</p>
        <p>Taken by : {detail.rover.name}</p>

        {/* <p>Status : {detail.rover.status}</p> */}
      </div>
    </div>
  );
}

export default ImageCard;
