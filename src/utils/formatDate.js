const formatDate = (dateString, isShort = false) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  const monthShort = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    date
  );
  let sup = 'th';

  if (day % 10 === 1) {
    sup = 'st';
  } else if (day % 10 === 2) {
    sup = 'nd';
  } else if (day % 10 === 3) {
    sup = 'rd';
  }

  return !isShort
    ? `${month} ${day}<sup>${sup}</sup> ${year}`
    : `${monthShort} ${day}, ${year}`;
};

export default formatDate;
