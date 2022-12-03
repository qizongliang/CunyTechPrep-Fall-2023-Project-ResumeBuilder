import * as React from "react";
import { Typography, Modal, Button, Box, Grid } from "@mui/material";
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
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5" align="center">
            Work Experience
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box textAlign="center">
            <Button onClick={handleOpen} endIcon={<AddIcon />}>
              Add Experience
            </Button>
          </Box>
        </Grid>
      </Grid>

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
