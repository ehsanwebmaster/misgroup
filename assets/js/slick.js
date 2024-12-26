jQuery(document).ready(function () {
  // Initialize the main gallery slider
  $(".gallerysection").slick({
    infinite: true, // Enable infinite scrolling
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Disable navigation arrows
  });

  // Add click event for thumbnails
  $("#gallerythumb > section").click(function () {
    const index = $(this).index(); // Get the index of the clicked thumbnail
    $(".gallerysection").slick("slickGoTo", index); // Navigate to the corresponding slide
  });
});
// zoomin
// Apply zoom effect to all images with the class 'zoomin' in the gallery
$(document).ready(function () {
  $(".zoomin").each(function () {
    $(this).extm({
      squareOverlay: true,
      position: "right",
      rightPad: 10,
      lazy: true,
      zoomSize: 2000,
    });
  });
});
