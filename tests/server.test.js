import Service from "../src/index.js";

const TestService = new Service(2000, "localhost");

TestService.addAction("createUser", async (data) => {
  return {
    status: "success",
    firstName: data.firstName,
    lastName: data.lastName,
    id: "1231231232131",
  };
});

TestService.start((port, host) => {
  console.log(`Server is running on http://${host}:${port}`);
});
