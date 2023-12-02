document.addEventListener("DOMContentLoaded", function () {
  const headerOptions = document.querySelectorAll(".brand-header-menu-option");
  let visibleModal = null;

  headerOptions.forEach((button) => {
    button.addEventListener("click", function () {
      const targetModalId = this.getAttribute("aria-controls");
      const targetModal = document.getElementById(targetModalId);

      if (targetModal) {
        const isModalVisible = targetModal.classList.contains("modal-visible");

        // check if modal is visible
        if (visibleModal) {
          // hides the visible modal
          visibleModal.classList.remove("modal-visible");
          visibleModal.setAttribute("aria-hidden", "true");
          visibleModal.setAttribute("aria-expanded", "false");

          // removes aria from header options (which removes the shadow of the selected option)
          headerOptions.forEach((option) =>
            option.setAttribute("aria-expanded", "false")
          );

          // removes overflow from body and backdrop from site-frame
          document.body.classList.remove("overflow");
          document.querySelector(".site-frame").classList.remove("backdrop");
        }

        // shows target modal
        targetModal.classList.toggle("modal-visible", !isModalVisible);
        targetModal.setAttribute("aria-hidden", isModalVisible);
        targetModal.setAttribute("aria-expanded", !isModalVisible);

        // adds expanded to header options (which adds the shadow of the selected option)
        this.setAttribute("aria-expanded", !isModalVisible);

        // update to reflect that the modal is visible
        visibleModal = isModalVisible ? null : targetModal;

        if (!isModalVisible) {
          // adds overflow from body and backdrop from site-frame
          document.body.classList.add("overflow");
          document.querySelector(".site-frame").classList.add("backdrop");
        }
      }
    });
  });
});
