export const fetchGet = async (url: string | undefined) => {
  if (!url) {
    throw new Error("fetchGet");
  }
  const res = await fetch(url);
  const jsonRes = await res.json();

  return jsonRes;
};

export const fetchPost = async (url: string | undefined, requestBody: any) => {
  if (!url) {
    throw new Error("fetchPost");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });
  const jsonRes = await res.json();

  return jsonRes;
};
