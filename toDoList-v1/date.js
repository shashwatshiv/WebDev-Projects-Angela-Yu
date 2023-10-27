module.exports.getDate = getDate;
function getDate() {
  let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-IN", option);
  return day;
}
// module.exports and exports both work the same way
// we can directly assign a function without its name.

exports.getDay = function () {
  let today = new Date();

  let option = {
    weekday: "long",
  };
  // you can directly return the value , without creating the variable
  return today.toLocaleDateString("en-IN", option);
};
