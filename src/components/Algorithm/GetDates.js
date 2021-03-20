const GetDates = (commits, saveValues, saveMonths, setDays) => {
  const arr = [];

  let months = {
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0,
  };

  

  commits.map(data => {
    const month = new Date(data.creado).getMonth();
    switch (month) {
      case 0:
        months.jan++;
        break;
      case 1:
        months.feb++;
        break;
      case 2:
        months.mar++;
        break;
      case 3:
        months.apr++;
        break;
      case 4:
        months.may++;
        break;
      case 5:
        months.jun++;
        break;
      case 6:
        months.jul++;
        break;
      case 7:
        months.aug++;
        break;
      case 8:
        months.sep++;
        break;
      case 9:
        months.oct++;
        break;
      case 10:
        months.nov++;
        break;
      case 11:
        months.dec++;
        break;
    }

    // day = new Date(data.creado).getDay()

});

  saveValues(Object.values(months));
  saveMonths(months)
};

export default GetDates;
