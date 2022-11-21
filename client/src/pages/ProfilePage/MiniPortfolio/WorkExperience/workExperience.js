import * as React from "react";
import { Typography, Modal, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import WorkExperienceItem from "./workExperienceItem";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function WorkExperience(props) {
  let workExpItems = props.workItems;
  let displayWorkItem = workExpItems.map((item) => {
    return <WorkExperienceItem key={item.id} info={item} />;
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography variant="h5">Work Experience</Typography>
      <Button onClick={handleOpen} sx={{ m: 2 }} endIcon={<AddIcon />}>
        Add Experience
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {displayWorkItem}
    </>
  );
}
