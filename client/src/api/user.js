const LOCALHOST_URL = "http://localhost:8000/api/";

export async function getProfile(user_id) {
  return await fetch(`${LOCALHOST_URL}user/profile/${user_id}`).then((res) =>
    res.json()
  );
}
