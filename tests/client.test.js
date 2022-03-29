import Service from "../src/index.js";

const TestService = new Service(2000, "localhost");

TestService.callAction(
  "createUser",
  { firstName: "Emre", lastName: "Önal" },
  function (responseData) {
    console.log("x", responseData);
  }
);
