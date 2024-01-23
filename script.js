$(document).ready(function () {
    // Initialize the Bootstrap carousel
    $('#customCarousel').carousel();
  
    // Define the index of the currently displayed slide
    var currentIndex = 0;
  
    // Set the interval for changing the carousel every 2 seconds
    var interval = setInterval(function () {
      currentIndex = (currentIndex + 3) % 6; // Rotate the carousel by 3 items (3 images at a time)
      $('#customCarousel').carousel(currentIndex);
    }, 2000);
  
    // Stop the interval when the page is closed or the carousel is not in view
    $(window).on('beforeunload', function () {
      clearInterval(interval);
    });
  
    // Handle manual carousel navigation
    $('#customCarousel').on('slide.bs.carousel', function (e) {
      currentIndex = e.to;
      clearInterval(interval); // Stop the interval when manually navigating the carousel
    });
  });
  $(document).ready(function () {
    var imageSet = [
      'images/minnal.jpeg',
      'images/lucifer.jpeg',
      'images/bahubali.jpeg',
      'images/bahubali.jpeg',
      'images/minnal.jpeg',
      'images/lucifer.jpeg',
      'images/lucifer.jpeg',
      'images/bahubali.jpeg',
      'images/minnal.jpeg'
    ];
  
    var carouselInner = document.getElementById('carousel-inner');
  
    // Loop through the image set and create carousel slides
    for (var i = 0; i < imageSet.length; i += 3) {
      var slide = document.createElement('div');
      slide.className = 'carousel-item' + (i === 0 ? ' active' : ''); // Set the first slide as active
  
      var imageContainer = document.createElement('div');
      imageContainer.className = 'd-flex justify-content-center';
  
      for (var j = i; j < i + 3; j++) {
        if (j < imageSet.length) {
          var customImageContainer = document.createElement('div');
          customImageContainer.className = 'custom-image-container';
  
          var customImage = document.createElement('img');
          customImage.className = 'custom-image';
          customImage.src = imageSet[j];
  
          customImageContainer.appendChild(customImage);
          imageContainer.appendChild(customImageContainer);
        }
      }
  
      slide.appendChild(imageContainer);
      carouselInner.appendChild(slide);
    }
  
    // Initialize the Bootstrap carousel
    $('#customCarousel').carousel();
  });
  
  