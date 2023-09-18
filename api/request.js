export async function getReq(url) {
  const res = await fetch(url);

  const data = await res.json();
  return data;
}

export async function postReq(url, body) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
}
