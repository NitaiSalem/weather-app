export const formatDate = (dateString?: string) => {
  const date = dateString ? new Date(dateString) : new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const formattedDate = formatter.format(date);
  return `${formattedDate}`;
};
