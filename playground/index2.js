// function sortArr(sortA, sortB) {
//   return sortA - sortB;
// }
// [2, 3, 4, 8, 6, 9, 10].sort(sortArr);
// console.log(sortArr);
// const sortArrA = [2, 3, 4, 8, 6, 9, 10];
// const sortArrB = [18, 13, 11, 89, 26, 19, 100];
// const newArrEle = sortArr(sortArrA, sortArrB);

// console.log(newArrEle);

// Example
const videos = [
  {
    id: "video1",
    title: "JavaScript for Beginners",
    tags: ["Programming", "JavaScript"],
  },
  {
    id: "video2",
    title: "C# for Beginners",
    tags: ["Programming", "C#"],
  },
  {
    id: "video3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
  },
];

const target = (tVideo = [], search = "") => {
  const searchString = search.toLowerCase();
  return tVideo.filter((video) => {
    return (
      video.title.toLowerCase().includes(searchString) ||
      video.tags.some((tag) => tag.toLowerCase().includes(searchString))
    );
  });
};

console.log(target(videos, "Program"));
