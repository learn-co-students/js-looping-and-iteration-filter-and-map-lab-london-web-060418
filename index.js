// Code your solution here:
const driversWithRevenueOver = (arr, str) => {
  return arr.filter( i => {
    return i.revenue > parseInt(str);
  });
};

const driverNamesWithRevenueOver = (arr, str) => {
  return arr.filter( i => {
      return i.revenue > parseInt(str)
    }).map(i => {
      return i.name
      });
};

const exactMatch = (arr, obj) => {
  return arr.filter( driver => {

    for (const key in driver) {
      if (driver[key] === obj[key]){
        return driver
      }
    }
  });
};

const exactMatchToList = (arr, obj) => {
  return arr.filter( driver => {

    for (const key in driver) {
      if (driver[key] === obj[key]){
        return driver
      }
    }
  }).map( driver => {
    return driver.name
  });
};
