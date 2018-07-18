function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function (driver){
      return driver.name
    })
}

function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute)
  return drivers.filter(driver => driver[key] === attribute[key])
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function (driver){
    return driver.name
  })

}
