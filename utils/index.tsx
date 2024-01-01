export async function fetchCars() {

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '93b90a0758mshf3aebacfba36b82p1ecb68jsn7e5d43a21b74',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };
  

  
    const response = await fetch(url, options);
    const result = await response.json();
  
    return result;
  }
  export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1;
    const ageFactor = 0.05; 

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };