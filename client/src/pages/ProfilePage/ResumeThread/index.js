import { display } from "@mui/system";
import Comments from "./Comments";
import ResumeBox from "./ResumeBox";

export default function ResumeThread({ resumeThread }) {
  const { resume_url } = resumeThread.post;

  return (
    <>
      <ResumeBox url={resume_url} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginInline: "2rem"
        }}>
        <Comments comments={resumeThread.comments} />
      </div>
    </>
  );
}
