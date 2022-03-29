import http from "http";

class Service {
  constructor(port, host) {
    this.port = port || 80;

    this.host = host || "localhost";

    this.server = http.createServer((req, res) =>
      this.requestListener(req, res, this.actions)
    );

    this.actions = {};
  }

  addAction(name, callback) {
    this.actions[name] = callback;
  }

  callAction(name, data, callback) {
    const options = {
      hostname: this.host,
      port: this.port,
      path: `/${name}`,
      method: "POST",
    };

    const req = http.request(options, async (res) => {
      res.on("data", (d) => {
        callback(JSON.parse(d.toString()));
      });
    });

    req.write(JSON.stringify(data));

    req.end();
  }

  start(callback) {
    this.server.listen(this.port, this.host, callback(this.port, this.host));
  }

  requestListener(req, res, actions) {
    res.setHeader("Content-Type", "application/json");

    let data = [];

    req
      .on("data", (chunk) => {
        data.push(chunk);
      })
      .on("end", async () => {
        data = Buffer.concat(data).toString();

        if (data) {
          data = JSON.parse(data);

          res.end(JSON.stringify(await actions[req.url.substring(1)](data)));
        }
      });
  }
}

export default Service;
