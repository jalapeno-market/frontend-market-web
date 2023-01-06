export const fetchGet = async (url: string | undefined, cookie?: string) => {
  if (!url) {
    throw new Error("fetchGet");
  }
  const headers = cookie ? { Cookie: cookie } : undefined;
  const res = await fetch(url, {
    headers: headers,
    method: "GET",
    credentials: "include",
  });
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
    credentials: "include",
  });
  const jsonRes = await res.json();

  return jsonRes;
};

export const fetchDelete = async (url: string | undefined) => {
  if (!url) {
    throw new Error("fetchDelete");
  }

  const res = await fetch(url, {
    method: "DELETE",
    credentials: "include",
  });

  const jsonRes = await res.json();

  return jsonRes;
};
