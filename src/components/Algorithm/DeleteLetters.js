const removingLetters = (data, save) => {
    const splitted = data.split('');
    splitted.pop();
    const joined = splitted.join('');

    save(joined);
  };

  export default removingLetters;