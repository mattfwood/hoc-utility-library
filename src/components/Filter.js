import PropTypes from 'prop-types';

function Filter(props) {
  try {
    const { search, data } = props;

    if (!Array.isArray(data)) {
      throw new TypeError('Filter prop "data" must be an array');
    }

    if (typeof search !== 'string' && typeof search !== 'number') {
      throw new TypeError('Filter prop "search" must be type "string" or "number"');
    }

    const filteredData = data.filter((item) => {
      const jsonItem = JSON.stringify(item).toLowerCase();
      return jsonItem.includes(search.toLowerCase());
      // const strings = Object.values(item).filter(value => typeof value === 'string' || typeof value === 'number');
      // const match = strings.some(value => value.toLowerCase().includes(search.toLowerCase()));
      // console.log({ strings, match });
      // return match;
    });

    return props.children(filteredData);
  } catch (e) {
    throw e;
  }
};

Filter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.string, PropTypes.object])).required,
}

export default Filter;
