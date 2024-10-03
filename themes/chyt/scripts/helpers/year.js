hexo.extend.helper.register("getAnimalIcon", function (year) {
  var index = parseInt(year) % 12;
  var icon = {
    0: "chyt-colorful-icon-monkey",
    1: "chyt-colorful-icon-rooster",
    2: "chyt-colorful-icon-dog",
    3: "chyt-colorful-icon-boar",
    4: "chyt-colorful-icon-rat",
    5: "chyt-colorful-icon-ox",
    6: "chyt-colorful-icon-tiger",
    7: "chyt-colorful-icon-rabbit",
    8: "chyt-colorful-icon-dragon",
    9: "chyt-colorful-icon-snake",
    10: "chyt-colorful-icon-horse",
    11: "chyt-colorful-icon-goat",
  };
  return icon[index];
});
