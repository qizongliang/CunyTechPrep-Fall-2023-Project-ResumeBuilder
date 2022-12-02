const LOCALHOST_URL = "http://localhost:8000/api";

export async function getProfile(user_id) {
  return await fetch(`${LOCALHOST_URL}/user/profile/${user_id}`).then((res) =>
    res.json()
  );
}

export async function addComment(data) {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1dHRlcnJpb2x1QGZha2VtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2NzAwMTQ2NDR9.oCez3tN0ySXOaOYXn-a5fGx09inaQe6gUvP53xX8FOE";
  const ADD_COMMENT_URL = `${LOCALHOST_URL}/resume/create-comment`;
  const response = await fetch(ADD_COMMENT_URL, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}
