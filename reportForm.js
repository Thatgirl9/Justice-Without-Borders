// this function fetches countries from rest countries api 
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    const countrySelect = document.getElementById('country');
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
  })