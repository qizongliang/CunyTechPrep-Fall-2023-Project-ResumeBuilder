import { useState, useEffect } from "react";
import Comments from "./Comments";
import ResumeBox from "./ResumeBox";
import { getProfile } from "../../../api/user";

export default function ResumeThread() {
  const [resumeThread, setResumeThread] = useState(null);

  async function loadProfile() {
    await getProfile(1)
      .then((res) => {
        setResumeThread(res.current_resume);
      })
      .catch(console.error);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return !!resumeThread ? (
    <>
      <ResumeBox url={resumeThread.post.resume_url} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginInline: "2rem",
          alignItems: "center",
          width: "min(100vw,800px)",
        }}
      >
        <Comments
          comments={resumeThread.comments}
          postId={resumeThread.post.id}
          retrieveProfile={loadProfile}
        />
      </div>
    </>
  ) : (
    <>Loading</>
  );
}
