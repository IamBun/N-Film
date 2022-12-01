export const getDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
};

export const getYear = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

export const getRunTime = (runTimeNumber) => {
  const hours = Math.floor(runTimeNumber / 60);
  const minutes = runTimeNumber % 60;
  return `${hours}h ${minutes}m`;
};

export const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
};
