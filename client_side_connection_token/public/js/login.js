//login js file

const init = () => {
  declareEvents();
};

const declareEvents = () => {
  let id_form = document.querySelector("#id_form");
  id_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let bodyObj = {
      email: document.querySelector("#id_email").value,
      password: document.querySelector("#id_password").value,
    };

    let url = "http://localhost:3002/users/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
        } else {
          alert("User or password wrong");
        }
      });
  });
};
init();
