/**
 * 
 * @param phoneNo string phone number 10 digit
 * @returns censor and formatted phone number e.g. 0123456789 => 012-xxx-6789
 */
export function censorPhoneNo(phoneNo: string) {
  const formattedPhoneNumber = phoneNo.replace(
    /^(\d{3})(\d{3})(\d{4})$/,
    "$1-xxx-$3"
  ); // Output: NNN-xxx-NNNN when N = Number
  return formattedPhoneNumber;
}

/**
 * 
 * @param date sign time
 * @returns date format {DD MMM YYYY HH:mm}
 */
export function signAtFormat(date?: Date) {
  const isValid = date instanceof Date && !isNaN(date.getTime())
  if (!isValid) {
    return "Invalid Date"
  }
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  const formattedDate: string = `${String(day).padStart(
    2,
    "0"
  )} ${month} ${year} ${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  return formattedDate;
}
