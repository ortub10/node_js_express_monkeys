const init = () => {
  doApi();
  declareViewEvents();
};

const declareViewEvents = () => {
  let id_form = document.querySelector("#id_form");
  id_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let objBody = {
      name: document.querySelector("#id_name").value,
      cal: document.querySelector("#id_cals").value,
      price: document.querySelector("#id_price").value,
      img: document.querySelector("#id_img").value,
    };

    if (objBody.name.length < 2) {
      return alert("Name too short");
    } else if (objBody.cal < 1) {
      return alert("Enter valid calories");
    } else if (objBody.price < 1) {
      return alert("Enter valid price");
    }
    doPostApi(objBody);
  });
};

const doPostApi = async (_body) => {
  const url = "http://localhost:3020/foods";
  try {
    let resp = await axios({
      url,
      method: "POST",
      data: _body,
    });

    console.log(resp.data);
    if (resp.data._id) {
      doApi();
    }
  } catch (err) {
    console.log(err);
    alert("There is problem try again later");
  }
};
const doApi = async () => {
  try {
    const url = "http://localhost:3020/foods";
    let resp = await axios.get(url);
    console.log(resp.data);
    createFoodList(resp.data);
  } catch (err) {
    console.log(err);
    alert("There is problem try again later");
  }
};

const createFoodList = (_ar) => {
  document.querySelector("#id_list").innerHTML = "";
  _ar.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<li>${item.name} - ${item.price} nis</li>`;
    document.querySelector("#id_list").append(li);
  });
};
init();
