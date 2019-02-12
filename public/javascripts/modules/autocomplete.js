const autocomplete = (input, latInput, lngInput) => {
  // skip this fn from running if there is not input on the page
  if(!input) {
    return;
  }

  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });

  // if someone hits enter on the address field, don't submit the form
  input.on('keydown', event => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });
};

export default autocomplete;
