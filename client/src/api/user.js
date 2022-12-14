const LOCALHOST_URL = "http://localhost:8000/api";

export async function getAllUsers() {
  return await fetch(`${LOCALHOST_URL}/user/all`).then((res) => res.json());
}

export async function getProfile(user_id) {
  return await fetch(`${LOCALHOST_URL}/user/profile/${user_id}`).then((res) =>
    res.json()
  );
}

const BUTTERRIOLU_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1dHRlcnJpb2x1QGZha2VtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2NzAwMTQ2NDR9.oCez3tN0ySXOaOYXn-a5fGx09inaQe6gUvP53xX8FOE";

export async function addComment(data) {
  const ADD_COMMENT_URL = `${LOCALHOST_URL}/resume/create-comment`;
  const response = await fetch(ADD_COMMENT_URL, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BUTTERRIOLU_TOKEN}`,
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function addProject(data) {
  const ADD_COMMENT_URL = `${LOCALHOST_URL}/projects/create`;
  const response = await fetch(ADD_COMMENT_URL, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BUTTERRIOLU_TOKEN}`,
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      project: data,
    }),
  });

  return response.json();
}
