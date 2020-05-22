# deno-pixabay

https://deno.land/x/deno_pixabay

search image and video from pixabay in deno

```ts
import { searchImage, searchVideo } from "https://deno.land/x/deno_pixabay/mod.ts";

or

import { searchImage, searchVideo } from "https://denopkg.com/yeukfei02/deno-pixabay/mod.ts";
```

## searchImage

```ts
const params = {
  key: "apiKey",
  q: "dog",
};

// page and perPage are optional, default page = 1, per_page = 20
const params = {
  key: "apiKey",
  q: "dog",
  page: 1,
  per_page: 3
};

const image = await searchImage(params);

// image
{
 total: 19578,
 totalHits: 500,
 hits: [
  {
    id: 647528,
    pageURL: "https://pixabay.com/illustrations/dog-wolf-yelp-moon-tree-night-647528/",
    type: "illustration",
    tags: "dog, wolf, yelp",
    previewURL: "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_150.jpg",
    previewWidth: 150,
    previewHeight: 84,
    webformatURL: "https://pixabay.com/get/50e4d246485ab10ff3d8992cc62d307b1638d8e24e5074417c267fd09048cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 359,
    largeImageURL: "https://pixabay.com/get/50e4d246485ab108f5d0846096293279103cd9e3544c704c7d2672d0934ac050_1280.jpg",
    imageWidth: 4919,
    imageHeight: 2763,
    imageSize: 3467200,
    views: 592983,
    downloads: 132180,
    favorites: 1260,
    likes: 1530,
    comments: 195,
    user_id: 526143,
    user: "Pezibear",
    userImageURL: "https://cdn.pixabay.com/user/2019/03/28/14-46-04-252_250x250.jpg"
   },
   ...
]
}
```

## searchVideo

```ts
const params = {
  key: "apiKey",
  q: "dog",
};

// page and perPage are optional, default page = 1, per_page = 20
const params = {
  key: "apiKey",
  q: "dog",
  page: 1,
  per_page: 3
};

const video = await searchVideo(params);

// video
{
  total: 103,
  totalHits: 103,
  hits: [
    {
      id: 5631,
      pageURL: "https://pixabay.com/videos/id-5631/",
      type: "film",
      tags: "dog, drinking, pet",
      duration: 12,
      picture_id: "593165292",
      videos: [Object],
      views: 56115,
      downloads: 24640,
      favorites: 110,
      likes: 130,
      comments: 14,
      user_id: 1281706,
      user: "Coverr-Free-Footage",
      userImageURL: "https://cdn.pixabay.com/user/2015/10/16/09-28-45-303_250x250.png"
    },
    ...
]
}
```