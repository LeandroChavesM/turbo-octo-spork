function onCheckboxCheck(checkbox, objective) {
  checkbox.addEventListener("change", () => {
    objective.status = "Concluido";
  });
}
