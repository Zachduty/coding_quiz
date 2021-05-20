$(document).ready(function () {
  const items = { ...localStorage };

  var newArray = [];
  for (const key in items) {
    if (Object.hasOwnProperty.call(items, key)) {
      const element = items[key];
      newArray.push({ [key]: parseInt(items[key]) });
    }
  }

  newArray.sort((a, b) => {
    return a[Object.keys(a)[0]] > b[Object.keys(b)[0]] ? -1 : 1;
  });

  for (let i = 0; i < newArray.length; i++) {
    var h1 = $("<h1>");
    h1.text(
      Object.keys(newArray[i])[0] +
        " " +
        newArray[i][Object.keys(newArray[i])[0]]
    );

    $("#highScores").append(h1);
  }
});
