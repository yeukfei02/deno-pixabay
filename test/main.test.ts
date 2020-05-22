import { searchImage, searchVideo } from "../src/main.ts";
import { assert } from "../deps.ts";

Deno.test("searchImage", async () => {
  const params = {
    key: "15753767-8bbb44885683e7d79aa1c14c1",
    q: "dog",
  };
  const result = await searchImage(params);
  assert(result);
});

Deno.test("searchImageWithPage", async () => {
  const params = {
    key: "15753767-8bbb44885683e7d79aa1c14c1",
    q: "dog",
    page: 1,
    per_page: 3,
  };
  const result = await searchImage(params);
  assert(result);
});

Deno.test("searchVideo", async () => {
  const params = {
    key: "15753767-8bbb44885683e7d79aa1c14c1",
    q: "dog",
  };
  const result = await searchVideo(params);
  assert(result);
});

Deno.test("searchVideoWithPage", async () => {
  const params = {
    key: "15753767-8bbb44885683e7d79aa1c14c1",
    q: "dog",
    page: 1,
    per_page: 3,
  };
  const result = await searchVideo(params);
  assert(result);
});
