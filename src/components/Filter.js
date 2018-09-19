const Filter = (props) => {
  const { search, data } = props;

  const filteredData = data.filter((item) => {
    const jsonItem = JSON.stringify(item).toLowerCase();
    return jsonItem.includes(search.toLowerCase());
    // const strings = Object.values(item).filter(value => typeof value === 'string' || typeof value === 'number');
    // const match = strings.some(value => value.toLowerCase().includes(search.toLowerCase()));
    // console.log({ strings, match });
    // return match;
  });

  return props.children(filteredData);
};

export default Filter;
