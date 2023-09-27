const marie = {
  firstName: "Marie",
  name: "Bichard",
  birthday: 2002,
  mail: "mariebichard@gmail.com",
};
const mark = {
  firstName: "Mark",
  name: "Poire",
  birthday: 1999,
  mail: "markpoire@gmail.com",
};

const caclAge = (birthday) => {
  age = 2023 - birthday;
  return age;
};

const adherantsFirstName = [marie.firstName, mark.firstName];
const adherantsName = [marie.name, mark.name];
const adherantsbirthday = [caclAge(marie.birthday), caclAge(mark.birthday)];
const adherantsMail = [marie.mail, mark.mail];
const adherantsDesc = [
  adherantsFirstName,
  adherantsName,
  adherantsbirthday,
  adherantsMail,
];

console.log(adherantsDesc);
