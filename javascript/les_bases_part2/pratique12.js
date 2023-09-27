const hediDesc = {
  firstname: "Hedi",
  name: "jspXD",
  friends: ["Marie", "Paul", "Steven"],
  birthday: 1991,
  driversLicence: false,
  caclAge() {
    this.age = 2023 - this.birthday;
    return this.age;
  },
  getSummary() {
    return `${
      hediDesc.firstname
    }  is a ${hediDesc.caclAge()}  years old teacher, and ${driversLicenceCheck()}.`;
  },
};
hediDesc.bestFriend = hediDesc.friends[0];

const driversLicenceCheck = () => {
  if (hediDesc.driversLicence === true) {
    return `he has a driver's licence`;
  } else {
    return `he hasn't a driver's licence`;
  }
};

console.log(hediDesc.getSummary());
