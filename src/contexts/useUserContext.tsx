export type TUser = {
  firstname: string;
  lastname: string;
  phoneNo: string;
  signAt?: Date;
};

export const users: TUser[] = [
  {
    firstname: "John",
    lastname: "Doe",
    phoneNo: "1234567890",
    // signAt: new Date("2023-10-23T10:30:00Z"),
  },
  {
    firstname: "Alice",
    lastname: "Smith",
    phoneNo: "9876543210",
    // signAt: new Date("2023-10-23T11:15:00Z"),
  },
  {
    firstname: "Bob",
    lastname: "Johnson",
    phoneNo: "1112223333",
    signAt: new Date("2023-10-23T12:00:00Z"),
  },
  {
    firstname: "Emma",
    lastname: "Brown",
    phoneNo: "5556667777",
    signAt: new Date("2023-10-23T13:20:00Z"),
  },
  {
    firstname: "Michael",
    lastname: "Davis",
    phoneNo: "3338889999",
    signAt: new Date("2023-10-23T14:45:00Z"),
  },
  {
    firstname: "Olivia",
    lastname: "Clark",
    phoneNo: "7774445555",
    // signAt: new Date("2023-10-23T15:10:00Z"),
  },
  {
    firstname: "Daniel",
    lastname: "Wilson",
    phoneNo: "2223331111",
    signAt: new Date("2023-10-23T16:30:00Z"),
  },
  {
    firstname: "Sophia",
    lastname: "Moore",
    phoneNo: "6669990000",
    // signAt: new Date("2023-10-23T17:20:00Z"),
  },
  {
    firstname: "Elijah",
    lastname: "Jones",
    phoneNo: "8887776666",
    // signAt: new Date("2023-10-23T18:10:00Z"),
  },
  {
    firstname: "Grace",
    lastname: "Anderson",
    phoneNo: "4445556666",
    signAt: new Date("2023-10-23T19:00:00Z"),
  },
  {
    firstname: "Aiden",
    lastname: "Parker",
    phoneNo: "2223334444",
    signAt: new Date("2023-10-23T20:15:00Z"),
  },
  {
    firstname: "Mia",
    lastname: "Baker",
    phoneNo: "9998887777",
    signAt: new Date("2023-10-23T21:30:00Z"),
  },
];