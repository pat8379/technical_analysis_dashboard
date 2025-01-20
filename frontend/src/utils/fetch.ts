export const getJwtToken = (): string | false =>
  window.localStorage.getItem("auth_o") || false;

export const fetchHeaders = (jwt) => ({
  Authorization: `Bearer ${jwt}`,
});

export const fetchJsonHeaders = (jwt) => ({
  Authorization: `Bearer ${jwt}`,
  "Content-Type": "application/json",
});

export const fetchTextHeaders = (jwt) => ({
  Authorization: `Bearer ${jwt}`,
  "Content-Type": "text/plain",
});

const header_map = (jwt, type) => {
  const map = {
    json: fetchJsonHeaders(jwt),
    none: fetchHeaders(jwt),
    text: fetchTextHeaders(jwt),
  };
  return map[type];
};

export const fetchData = async (
  url,
  params = {},
  instant = false,
  replaceJwt = false,
  type = "none"
) => {
  const jwt = replaceJwt ? replaceJwt : getJwtToken();

  const res = await fetch(url, {
    ...params,
    headers: header_map(jwt, type),
  });

  if (instant) {
    return res;
  }

  if (!res.ok) throw await res.json();

  try {
    const data = await res.json();
    if (data) {
      return data;
    }
    return null;
  } catch {
    return {};
  }
};
