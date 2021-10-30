const form = document.getElementById("login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  login(e.target.children.email.value, e.target.children.password.value);
});

class Api {
  constructor(apiUrl) {
    this.api = apiUrl;
    this.defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  get = async (route, headers = this.defaultHeaders) => {
    return await this.request("GET", route, null, headers);
  };

  post = async (route, body = {}, headers = this.defaultHeaders) => {
    return await this.request("POST", route, body, headers);
  };

  request = async (method, route, body, headers) => {
    const response = await fetch(this.api + route, {
      method,
      headers,
      body: body && JSON.stringify(body),
    });

    return await response.json();
  };
}

const url = "https://api-do-note.herokuapp.com";

const api = new Api(url);

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const login = (email, password) => {
  api
    .post("/login", { email, password })
    .then((res) => console.log("response", res))
    .catch((err) => console.log("error", err));
};
