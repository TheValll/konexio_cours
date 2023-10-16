const dataCalc = () => {
  const results = currentUser.dates.map((dates) => {
    let todayDiff = new Date() - new Date(dates);
    let result = Math.floor(todayDiff / (1000 * 60 * 60 * 24));
    if (result < 1) {
      return "Today";
    }
    if (result === 1) {
      return "Yesterday";
    }
    if (result > 1) {
      return result + " days ago";
    }
  });

  return results;
};

const currentUser = {
  dates: ["03/10/2022", "12/10/2022", "10/16/2023"],
};

console.log(dataCalc());
