export async function searchImage(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://pixabay.com/api?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}

export async function searchVideo(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://pixabay.com/api/videos?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
