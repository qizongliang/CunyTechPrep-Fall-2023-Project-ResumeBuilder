import { useState } from "react";
import {
  Typography,
  Button,
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
import { addProject } from "../../../../api/user";

export default function Project(props) {
  let displayedProjects = props.projects;
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    brief: "",
    start_month: 1,
    start_year: 2023,
    end_month: null,
    end_year: null,
    bullets: [],
    tools_used: [],
  });

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
          marginInline: "0.5rem",
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

          <Typography component="h2" id="Modaltitle" level="h4" fontWeight="lg">
            Add Project
          </Typography>

          <form
            onSubmit={async (event) => {
              event.preventDefault();
              await addProject(newProject)
                .catch(() => {
                  console.error("couldn't upload project");
                })
                .finally(async () => {
                  setOpen(false);
                  await props.refreshProfile(props.userId);
                });
            }}
          >
            <Stack spacing={2}>
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setNewProject({
                    ...newProject,
                    title: e.target.value,
                  });
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Brief"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setNewProject({
                    ...newProject,
                    brief: e.target.value,
                  });
                }}
              />
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="start_month"
                    label="Start Month"
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 12 } }}
                    defaultValue={1}
                    variant="outlined"
                    onChange={(e) => {
                      setNewProject({
                        ...newProject,
                        start_month: parseInt(e.target.value),
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="start_year"
                    label="Start Year"
                    type="number"
                    InputProps={{
                      inputProps: { min: 1600, max: new Date().getFullYear() },
                    }}
                    defaultValue={new Date().getFullYear()}
                    variant="outlined"
                    onChange={(e) => {
                      setNewProject({
                        ...newProject,
                        start_year: parseInt(e.target.value),
                      });
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="start_month"
                    label="End Month"
                    variant="outlined"
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 12 } }}
                    onChange={(e) => {
                      setNewProject({
                        ...newProject,
                        end_month: parseInt(e.target.value),
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="start_year"
                    label="End Year"
                    InputProps={{
                      inputProps: { min: new Date().getFullYear(), max: 2030 },
                    }}
                    variant="outlined"
                    onChange={(e) => {
                      setNewProject({
                        ...newProject,
                        end_year: parseInt(e.target.value),
                      });
                    }}
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
                    onChange={(e) => {
                      setNewProject({
                        ...newProject,
                        bullets: e.target.value.split("\n"),
                      });
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Tools Used (separate by commas)"
                    style={{ width: "100%", height: 100 }}
                    onChange={(e) => {
                      setNewProject({
                        ...newProject,
                        tools_used: e.target.value
                          .split(",")
                          .map((word) => word.trim()),
                      });
                    }}
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
