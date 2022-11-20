const classes = {
  resumeContainer: {
    display: "flex",
    justifyContent: "center",
  },
  resumeFrame: {
    aspectRatio: "8 / 11",
    width: "800px",
  },
};

export default function ResumeBox({ url }) {
  return (
    <div style={classes.resumeContainer}>
      <iframe src={`${url}#zoom=95`} style={classes.resumeFrame}>
        Browser not compatible.
      </iframe>
    </div>
  );
}
