# Servicer.js

### Installation

`yarn add servicerjs`

### Server Example

```javascript
import Service from "servicerjs";

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
`
```

### Client Example

```javascript
import Service from "servicerjs";

const TestService = new Service(2000, "localhost");

TestService.callAction(
  "createUser",
  { firstName: "Elon", lastName: "Musk" },
  function (responseData) {
    console.log(responseData);
  }
);
`
```
