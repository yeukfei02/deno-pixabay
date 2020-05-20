export async function searchImage(
  apiKey: string,
  query: string,
  page?: number,
  perPage?: number,
) {
  let result = null;

  let params = {
    key: apiKey,
    q: query,
    page: "1",
    per_page: "20",
  };
  if (page) {
    let obj = {
      page: page,
    };
    params = Object.assign(params, obj);
  }
  if (perPage) {
    let obj = {
      per_page: perPage,
    };
    params = Object.assign(params, obj);
  }
  const queryString = new URLSearchParams(params).toString();

  const response = await fetch(
    `https://pixabay.com/api?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}

export async function searchVideo(
  apiKey: string,
  query: string,
  page?: number,
  perPage?: number,
) {
  let result = null;

  let params = {
    key: apiKey,
    q: query,
    page: "1",
    per_page: "20",
  };
  if (page) {
    let obj = {
      page: page,
    };
    params = Object.assign(params, obj);
  }
  if (perPage) {
    let obj = {
      per_page: perPage,
    };
    params = Object.assign(params, obj);
  }
  const queryString = new URLSearchParams(params).toString();

  const response = await fetch(
    `https://pixabay.com/api?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
