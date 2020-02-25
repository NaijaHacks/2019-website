/**
 * Converts a ms date timestamp to XX:XX AM|PM.
 * @param dateInMs the date in milliseconds to get the time of
 */
export const getTimeFromDate = (dateInMs: number) => {
  const epoch = new Date(dateInMs);

  return epoch.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
