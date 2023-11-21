document.addEventListener("DOMContentLoaded", function () {
  const headerOptions = document.querySelectorAll(".brand-header-menu-option");
  let visibleModal = null;

  headerOptions.forEach((button) => {
    button.addEventListener("click", function () {
      const targetModalId = this.getAttribute("aria-controls");
      const targetModal = document.getElementById(targetModalId);

      if (targetModal) {
        const isModalVisible = targetModal.classList.contains("modal-visible");

        if (visibleModal) {
          visibleModal.classList.remove("modal-visible");
          visibleModal.setAttribute("aria-hidden", "true");
          visibleModal.setAttribute("aria-expanded", "false");
          headerOptions.forEach((option) =>
            option.setAttribute("aria-expanded", "false")
          );
          document.body.classList.remove("overflow");
          document.querySelector(".site-frame").classList.remove("backdrop");
        }

        targetModal.classList.toggle("modal-visible", !isModalVisible);
        targetModal.setAttribute("aria-hidden", isModalVisible);
        targetModal.setAttribute("aria-expanded", !isModalVisible);

        this.setAttribute("aria-expanded", !isModalVisible);

        visibleModal = isModalVisible ? null : targetModal;

        if (!isModalVisible) {
          document.body.classList.add("overflow");
          document.querySelector(".site-frame").classList.add("backdrop");
        }
      }
    });
  });
});
