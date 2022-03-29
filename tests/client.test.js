import Service from "../src/index.js";

const TestService = new Service(2000, "localhost");

TestService.callAction(
  "createUser",
  { firstName: "Elon", lastName: "Musk" },
  function (responseData) {
    console.log(responseData);
  }
);
