const hediDesc = {
  firstname: "hedi",
  name: "jspXD",
  friends: ["Marie", "Paul", "Steven"],
  //   bestFriend: "Micheal",
  birthday: 1991,

  caclAge() {
    this.age = 2023 - this.birthday;
    return this.age;
  },
};
hediDesc.bestFriend = hediDesc.friends[0];

console.log(hediDesc.caclAge());
console.log(
  `${hediDesc.firstname} has ${hediDesc.friends.length} friends, and his best friend is called ${hediDesc.bestFriend}.`
);
