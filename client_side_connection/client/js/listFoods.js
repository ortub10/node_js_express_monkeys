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

    console.log(objBody);
  });
};

const doApi = async () => {
  //Problem cors
  const url = "http://localhost:3020/foods";
  let resp = await axios.get(url);
  console.log(resp.data);
  createFoodList(resp.data);
};

const createFoodList = (_ar) => {
  _ar.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<li>${item.name} - ${item.price} nis</li>`;
    document.querySelector("#id_list").append(li);
  });
};
init();
