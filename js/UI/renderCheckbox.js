
function renderCheckbox(lugar, data, callback) {
  const checkbox = document.createElement("input");
  callback(checkbox, data);
  lugar.appendChild(checkbox);
}

export default renderCheckbox;
