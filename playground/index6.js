const empty = [];
const emptyArr = [];

const testVideos = [
  {
    id: "v---1",
    title: "JavaScript for Beginners",
    tags: ["Programming", "JavaScript"],
  },
  {
    id: "v---2",
    title: "C# for Beginners",
    tags: ["Programming", "C#"],
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
  },
];

const test = testVideos.filter((videos) => {
  empty.push({
    video: videos.id,
    details: videos.title,
    name: "clement",
  });
  emptyArr.push({
    detail: videos.tags[1],
    learn: "Programming",
  });
});
console.log(emptyArr);
console.log(empty);
