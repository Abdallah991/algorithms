// DESCRIPTION:
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:
// For seconds = 62, your function should return
// "1 minute and 2 seconds"
// For seconds = 3662, your function should return
// "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
  //   1- if seconds is 0 return now
   if (seconds === 0) {
      return "now";
    }
  
    // 2- create an array of objects descriping time units
    const timeUnits = [
      { label: "year", duration: 365 * 24 * 60 * 60 },
      { label: "day", duration: 24 * 60 * 60 },
      { label: "hour", duration: 60 * 60 },
      { label: "minute", duration: 60 },
      { label: "second", duration: 1 },
    ];
  
  //   3- declare duration parts array
    const durationParts = [];
  
  //  4- loop timeunits of times
    for (let i = 0; i < timeUnits.length; i++) {
  //     5- deconstruct the time unit
      const { label, duration } = timeUnits[i];
  //    if the seconds passed is larger than the time unit
      if (seconds >= duration) {
  //       6- count the number of time units
        const count = Math.floor(seconds / duration);
  //       7- get the remainder
        seconds %= duration;
        // 8- add the time and unit
        durationParts.push(count === 1 ? `${count} ${label}` : `${count} ${label}s`);
      }
    }
  // 9- construct the string returned
    return durationParts.join(", ").replace(/,([^,]*)$/, " and$1");
  }
  

console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(0)); // "now"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(86400)); // "1 day"
console.log(formatDuration(31536000)); // "1 year"
console.log(formatDuration(31536061)); // "1 year, 1 minute and 1 second"