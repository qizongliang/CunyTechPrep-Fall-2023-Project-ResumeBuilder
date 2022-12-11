import { Typography } from "@mui/material";
const classes = {
  heading: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
};

export default function Header() {
  return (
    <span style={classes.heading}>
      <Typography variant="h4">Users</Typography>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#60A5FA",
        }}
      />
    </span>
  );
}
