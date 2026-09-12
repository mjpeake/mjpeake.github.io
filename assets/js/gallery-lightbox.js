(function () {
  var modal = document.getElementById("image-fullscreen");
  var modalImg = document.getElementById("image-fullscreen-content");
  var caption = document.getElementById("image-fullscreen-caption");
  var counter = document.getElementById("image-fullscreen-counter");

  if (!modal || !modalImg || !caption || !counter) {
    return;
  }

  var closeButton = modal.querySelector("[data-gallery-close]");
  var prevButton = modal.querySelector("[data-gallery-prev]");
  var nextButton = modal.querySelector("[data-gallery-next]");
  var triggers = Array.prototype.slice.call(document.querySelectorAll(".image-fullscreen-target"));
  var activeIndex = 0;
  var activeTrigger = null;

  if (!closeButton || !prevButton || !nextButton || !triggers.length) {
    return;
  }

  function getImageData(index) {
    var trigger = triggers[index];
    return {
      src: trigger.getAttribute("data-gallery-src"),
      alt: trigger.getAttribute("data-gallery-alt"),
      type: trigger.getAttribute("data-gallery-type"),
      description: trigger.getAttribute("data-gallery-description")
    };
  }

  function setActiveImage(index) {
    activeIndex = (index + triggers.length) % triggers.length;
    var image = getImageData(activeIndex);
    modalImg.src = image.src;
    modalImg.alt = image.alt;
    caption.textContent = image.type + " - " + image.description;
    counter.textContent = (activeIndex + 1) + " / " + triggers.length;
  }

  function openModal(index, trigger) {
    activeTrigger = trigger;
    setActiveImage(index);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("gallery-modal-open");
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("gallery-modal-open");
    modalImg.removeAttribute("src");

    if (activeTrigger) {
      activeTrigger.focus();
    }
  }

  function showPrevious() {
    setActiveImage(activeIndex - 1);
  }

  function showNext() {
    setActiveImage(activeIndex + 1);
  }

  triggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () {
      openModal(index, trigger);
    });
  });

  closeButton.addEventListener("click", closeModal);
  prevButton.addEventListener("click", showPrevious);
  nextButton.addEventListener("click", showNext);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (!modal.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "ArrowLeft") {
      showPrevious();
    } else if (event.key === "ArrowRight") {
      showNext();
    }
  });
}());
