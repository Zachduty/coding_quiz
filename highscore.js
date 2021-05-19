$(document).ready(function () {
  const items = { ...localStorage };
  console.log("???", items);

  var newArray = [];
  for (const key in items) {
    if (Object.hasOwnProperty.call(items, key)) {
      const element = items[key];
      // $("#highScores").append(element, key)
      newArray.push({ [key]: parseInt(items[key]) });
    }
  }

  console.log("Array we just made", newArray);

  console.log("Keys!!!", Object.keys(newArray[0]));

  newArray.sort((a, b) => {
    return a[Object.keys(a)[0]] > b[Object.keys(b)[0]] ? -1 : 1;
  });

  console.log("Sorted ???", newArray);

  for (let i = 0; i < newArray.length; i++) {
    var h1 = $("<h1>");
    console.log("object kets ??", Object.keys(newArray[i])[0]);

    console.log("object kets ??", newArray[i][Object.keys(newArray[i])[0]]);

    h1.text(
      Object.keys(newArray[i])[0] +
        " " +
        newArray[i][Object.keys(newArray[i])[0]]
    );

    $("#highScores").append(h1);
  }
});
