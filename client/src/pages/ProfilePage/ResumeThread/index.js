import { useState, useEffect } from "react";
import Comments from "./Comments";
import ResumeBox from "./ResumeBox";
import { getProfile } from "../../../api/user";

export default function ResumeThread({ userId }) {
  const [resumeThread, setResumeThread] = useState(null);

  async function loadProfile() {
    await getProfile(userId ?? 1)
      .then((res) => {
        setResumeThread(res.current_resume);
      })
      .catch(console.error);
  }

  useEffect(() => {
    loadProfile();
    // eslint-disable-next-line
  }, []);

  return !!resumeThread && !!resumeThread.post ? (
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
    <>No resume</>
  );
}
