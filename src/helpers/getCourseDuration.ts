export const getCourseDuration = (duration: number) => {
  let hours = Math.floor(duration / 60);
  let remainingMinutes = duration % 60;
  let durationString = "";

  if (hours < 10) {
    durationString += "0";
  }
  durationString += hours.toString();

  durationString += ":";

  if (remainingMinutes < 10) {
    durationString += "0";
  }
  durationString += remainingMinutes.toString();

  if (hours === 1) {
    durationString += " hour";
  } else {
    durationString += " hours";
  }

  return durationString;
}