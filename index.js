// 物件屬性篩選器

const filterProps = obj => list => {
  const keys = Object.keys(obj);
  const filterProps = list;
  return keys.reduce((prev, curr) => {
    if (filterProps.find(i => i === curr)) {
      return { ...prev, [curr]: obj[curr] };
    }
    return prev;
  }, {})
};

// test function
const list = ['a', 'b'];
const obj = { 'a': 1, 'b': 1, 'd': 1 };
const newObj = filterProps(obj)(list);