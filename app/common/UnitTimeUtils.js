/**
 * A unit time is a number from 0-1 that represents any time in a given day.
 */
const UnitTimeUtils = {
  /**
   * Turns a unit time into hour and minute counts. Hours will be on a 0 to 24
   * scale and minutes will be on a 0 to 59 scale.
   */
  unitTimeToHoursAndMinutes(unitTime) {
    const hours = unitTime * 24;
    const minutes = (hours - Math.floor(hours)) * 60;
    return {
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
    };
  },

  /**
   * Creates a new instance of `Date` setting years, months, and days to 0, but
   * setting the hours and minutes to the time represented by our unit time.
   */
  unitTimeToDate(unitTime) {
    const { hours, minutes } = this.unitTimeToHoursAndMinutes(unitTime);
    return new Date(0, 0, 0, hours, minutes);
  },

  /**
   * Get the unit time from a date ignoring years, months, and days only using
   * hour and minute counts.
   */
  dateToUnitTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours + minutes / 60) / 24;
  },

  displayUnitTime(unitTime) {
  },
};

export default UnitTimeUtils;
