// Click to remove

// wait for the DOM to finish loading

document.addEventListener("DOMContentLoaded", () => {
  // getting the parent element that contains all the cards.
  const container = document.querySelector("#container");

  // adding an event delegation to the parent element
  container.addEventListener("click", function(event) {
    // checking if the clicked element is a close button

    if (event.target.classList.contains("remove-button")) {
      // removing the parent element of the clicked close button

      const pane = event.target.closest(".pane");
      if (pane) {
        pane.remove();
      }
    }
  });
});
