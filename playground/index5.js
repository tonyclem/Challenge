const infoData = [
  {
    id: "person-1",
    gender: "Male",
    occupation: "Web Developer",
  },
];

const details = [
  {
    address: "Weer",
    phone: "0601010101",
    country: "Nigeria",
  },
  {
    address: "Amsterdam",
    phone: "0601010101",
    country: "Chine",
  },
  {
    address: "Rome",
    phone: "0601010101",
    country: "Italy",
  },
];

const dtFunction = (personIn = []) => {
  personIn.forEach((person) => {
    infoData.push({
      address: address,
    });
  });
  return personIn;
};
console.log(dtFunction(details));
console.log(infoData);
