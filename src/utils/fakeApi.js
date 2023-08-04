const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
  
    return () => (s = s * a % m) / m;
  };

const getRandomIntBetween = (min, max) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  const range = max - min + 1;

  const randomFraction = Math.random();

  const randomInt = Math.floor(randomFraction * range) + min;

  return randomInt;
}
  
  const fetchAPI = date => {
    const maxHour = getRandomIntBetween(17, 23)
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= maxHour; i++) {
      if(random() < 0.5) result.push(i + ':00');
      if(random() < 0.5) result.push(i + ':30');
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 2000);
    });
  };
  
  const submitAPI = formData => true;
  
  export {
    fetchAPI,
    submitAPI
  };