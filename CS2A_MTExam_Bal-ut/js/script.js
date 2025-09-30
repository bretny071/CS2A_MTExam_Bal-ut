document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add").forEach(addBtn => {
    addBtn.addEventListener("click", () => {
      addBtn.classList.add("hidden");

      const removeBtn = addBtn.nextElementSibling;
      if (removeBtn && removeBtn.classList.contains("remove")) {
        removeBtn.classList.remove("hidden");
      }

      const productCard = addBtn.closest(".product-item");
      const productName = productCard ? productCard.querySelector("h2").textContent : "product";

      alert(`Added "${productName}" to cart.`);
    });
  });

  document.querySelectorAll(".remove").forEach(removeBtn => {
    removeBtn.addEventListener("click", () => {

      removeBtn.classList.add("hidden");

      const addBtn = removeBtn.previousElementSibling;
      if (addBtn && addBtn.classList.contains("add")) {
        addBtn.classList.remove("hidden");
      }

      const productCard = removeBtn.closest(".product-item");
      const productName = productCard ? productCard.querySelector("h2").textContent : "product";

      alert(`Removed "${productName}" from cart.`);
    });
  });
});