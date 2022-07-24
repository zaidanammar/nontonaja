import React from "react";
import { Fade, Modal } from "@mui/material";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  image: string;
  title: string;
};

const OPopupImage = ({ isOpen, setIsOpen, image, title }: Props) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen} onClose={handleClose} closeAfterTransition>
      <Fade in={isOpen}>
        <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <img src={image} alt={title} className="w-[360px] rounded-md" />
        </div>
      </Fade>
    </Modal>
  );
};

export default OPopupImage;
