function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}

//takes the values from the first function that returns true and
//returns an array of all matching drivers names as string
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
      return driver.name;
    });
}

// mathcher is {key: value}
//filters an array:
function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = [];
    for (const key in matcher) {
      if (driver[key] === matcher[key]){
        matches.push(driver[key])
      }
    }
    if (matches.length > 0) {
      return matches;
    }
  });
}

//from filtered array returns all drivers names as strings:
function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher).map(function (driver) {
      return driver.name;
    });
}
