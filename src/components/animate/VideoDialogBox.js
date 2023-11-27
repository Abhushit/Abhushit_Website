import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import Intro from "../../images/intro.mp4";
import { ClosedCaptionButton, ControlBar, Player } from "video-react";
import 'video-react/dist/video-react.css';

const VideoDialogBox = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} maxWidth="lg" fullWidth={true} onClose={handleClose}>
        <Player playsInline src={Intro} autoPlay>
          <ControlBar autoHide={false}>
            <ClosedCaptionButton order={7} />
          </ControlBar>
        </Player>
      </Dialog>
    </>
  );
};

export default VideoDialogBox;
