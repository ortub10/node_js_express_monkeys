const init = () => {
  doApi();
};

const doApi = async () => {
  //Problem cors
  const url = "http://localhost:3020/foods";
  let resp = await axios.get(url);
  console.log(resp.data);
};

init();
