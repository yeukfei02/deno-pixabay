# deno-pixabay

search image and video from pixabay in deno

```ts
import { searchImage, searchVideo } from "https://deno.land/x/deno_pixabay/mod.ts";

or

import { searchImage, searchVideo } from "https://denopkg.com/yeukfei02/deno-pixabay/mod.ts";
```

## searchImage

```ts
const image = await searchImage(API_KEY: string, query: string);
console.log("image = ", image);

// page and perPage are optional, default page = 1, perPage = 20
const image = await searchImage(API_KEY: string, query: string, page: int, perPage: int);

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
const video = await searchVideo(API_KEY: string, query: string);
console.log("video = ", video);

// page and perPage are optional, default page = 1, perPage = 20
const video = await searchVideo(API_KEY: string, query: string, page: int, perPage: int);

// video
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
    webformatURL: "https://pixabay.com/get/50e4d246485ab10ff3d8992cc62d307b1638d8e24e5074417c267fd09048cc_640.jpg",
    webformatWidth: 640,
    webformatHeight: 359,
    largeImageURL: "https://pixabay.com/get/50e4d246485ab108f5d0846096293279103cd9e3544c704c7d2672d0934ac051_1280.jpg",
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