document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".array-input-wrapper").forEach(wrapper => {
    const container = wrapper.querySelector("#array-input-container");
    const template = container.querySelector(".array-input-item.template");
    const fieldName = wrapper.dataset.name;

    if (!container || !template) return;

    // Инициализация SortableJS
    new Sortable(container, {
      handle: ".drag-handle",
      animation: 150,
      ghostClass: "sortable-ghost"
    });

    // Добавление нового поля
    const addBtn = wrapper.querySelector(".add-array-input");
    if (addBtn) {
      addBtn.addEventListener("click", e => {
        e.preventDefault();

        const newField = template.cloneNode(true);
        newField.classList.remove("template");
        newField.style.display = "flex";

        const input = newField.querySelector("input[type=text]");
        if (input) {
          input.name = fieldName + "[]";
          input.value = "";
          input.focus();
        }

        container.appendChild(newField);
      });
    }

    // Удаление поля
    container.addEventListener("click", e => {
      if (e.target.closest(".remove-array-input")) {
        e.preventDefault();
        const item = e.target.closest(".array-input-item");
        if (item && !item.classList.contains("template")) {
          item.remove();
        }
      }
    });
  });
});
