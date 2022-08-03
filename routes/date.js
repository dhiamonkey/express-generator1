var express = require("express");
var router = express.Router();

let justTime = new Date();

const transformTime = (e) => {
  let storeTime = new Date(e);
  storeTime.setDate(storeTime.getDate() - 1);
  return storeTime;
};

let justYesterdayTime = transformTime(justTime);

const getStartEndOfDay = (e) => {
  let start = e.setHours(0, 0, 0, 0);
  let end = e.setHours(23, 59, 59, 99);
  let d0 = new Date(0);
  d0.setSeconds(start / 1000);
  let d1 = new Date(0);
  d1.setSeconds(end / 1000);
  return [d0, d1];
};
getStartEndOfDay(justTime);

router.get("/", function (req, res, next) {
  res.render("date", {
    title: "Jon DateZ",
    justTime: justTime,
    justYesterdayTime: justYesterdayTime,
    d0WIB: getStartEndOfDay(justTime)[0].toString(),
    d1WIB: getStartEndOfDay(justTime)[1].toString(),
    d0UTC: getStartEndOfDay(justTime)[0].toUTCString(),
    d1UTC: getStartEndOfDay(justTime)[1].toUTCString(),
  });
});

// router.get("/", function (req, res, next) {
//   res.render("date", { title: "Jon DateZ", justTimeYesterday: justTime });
// });

module.exports = router;
