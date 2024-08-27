Fancybox.bind(document.getElementById("gallery-wrap-a"), "[data-fancybox]", {
    // Your custom options
    wheel: "slide"
  });

  // Second gallery
  Fancybox.bind(document.getElementById("gallery-wrap-b"), "[data-fancybox]", {
    // Your custom options
    wheel: "close"
  });

  // document.getElementById("boc-project").addEventListener('click', function () {
  //   var photoContainer = document.getElementById('gallery-wrap-a');
  //   if (photoContainer.style.display === 'none') {
  //     photoContainer.style.display = 'block'; 
  // } else {
  //     photoContainer.style.display = 'none';
  // }
  // });
