const addDays = require("date-fns/addDays");
const getDateAfterXDays = (n) => {
  const date = addDays(new Date(2020, 7, 22), n);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = getDateAfterXDays;
