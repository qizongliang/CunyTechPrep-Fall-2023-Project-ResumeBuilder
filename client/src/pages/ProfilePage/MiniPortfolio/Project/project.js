import * as React from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Stack from "@mui/joy/Stack";
import ProjectItem from "./projectItem";

export default function Project(props) {
  let displayedProjects = props.projects;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  let displayProjectItem = displayedProjects.map((item) => {
    return <ProjectItem key={item.id} info={item} />;
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginInline: "1rem",
        }}
      >
        <Typography variant="h5" align="center">
          Projects
        </Typography>
        <div
          style={{
            flexGrow: 1,
            height: "2px",
            backgroundColor: "#60A5FA",
          }}
        />
        <Button onClick={handleOpen} endIcon={<AddIcon />}>
          Add Project
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {displayProjectItem}
      </div>
      <Modal
        aria-labelledby="close-modal-title"
        open={open}
        onClose={(event, reason) => {
          if (reason && reason === "backdropClick") return;
          setOpen(false);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="outlined" />

          <Typography
            component="h2"
            id="Modaltitle"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
          >
            Add Project
          </Typography>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                label="Brief"
                fullWidth
                variant="standard"
              />
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="start_month"
                    label="Start Month"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="start_year"
                    label="Start Year"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="start_month"
                    label="End Month"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="start_year"
                    label="End Year"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <hr />
              <Grid container>
                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Description"
                    style={{ width: "100%", height: 200 }}
                  />
                </Grid>
              </Grid>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
