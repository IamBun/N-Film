//get Date/Month/Year
export const getDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
};

//get Year
export const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

//lay thoi luong phim theo gio phut
export const getRunTime = (runTimeNumber) => {
  const hours = Math.floor(runTimeNumber / 60);
  const minutes = runTimeNumber % 60;
  return `${hours}h ${minutes}m`;
};

//cat mang string dai
export const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
};
