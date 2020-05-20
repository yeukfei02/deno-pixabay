import { searchImage, searchVideo } from "./mod.ts";
import { assert } from "./deps.ts";

Deno.test("searchImage", async () => {
  const result = await searchImage(
    "15753767-8bbb44885683e7d79aa1c14c1",
    "dog",
  );
  assert(result);
});

Deno.test("searchImageWithPage", async () => {
  const result = await searchImage(
    "15753767-8bbb44885683e7d79aa1c14c1",
    "dog",
    1,
    3,
  );
  assert(result);
});

Deno.test("searchVideo", async () => {
  const result = await searchVideo(
    "15753767-8bbb44885683e7d79aa1c14c1",
    "dog",
  );
  assert(result);
});

Deno.test("searchVideoWithPage", async () => {
  const result = await searchVideo(
    "15753767-8bbb44885683e7d79aa1c14c1",
    "dog",
    1,
    3,
  );
  assert(result);
});
