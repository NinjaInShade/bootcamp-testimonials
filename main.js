const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Enable use of slider with keyboard right and left arrows
document.body.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    return previousBtn.focus();
  }

  if (event.key === 'ArrowRight') {
    return nextBtn.focus();
  }

  return;
});

previousBtn.addEventListener('click', function () {
  return console.log('Previous btn clicked');
});

nextBtn.addEventListener('click', function () {
  return console.log('Next btn clicked');
});
