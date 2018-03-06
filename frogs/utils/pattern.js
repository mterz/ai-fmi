// All pattern related functions

const generateNextPattern = (pattern) => {
  // in result we store all the possible patterns that we can get to from pattern
  let result = [];
  let [left, right] = pattern.split('_');
  // temporary variables
  let temp, blank;


  if (left[left.length - 1] === '>') {
    temp = left.substr(0, left.length - 1);
    result.push(temp + '_>' + right);
  }

  if (left[left.length - 2] === '>') {
    temp = left.substr(0, left.length - 2);
    result.push(temp + '_' + left[left.length - 1] + '>' + right);
  }

  if (right[0] === '<') {
    temp = right.substr(1, right.length - 1);
    result.push(left + '<_' + temp);
  }

  if (right[1] === '<') {
    // substr doesn't change the original string
    temp = right.substr(2, right.length - 2);
    result.push(left + '<' + right[0] + '_' + temp);
  }
  return result;
};


create_pattern = (n) => {
    // function that creates the start pattern
    const start_pattern = '>'.repeat(n) + '_' + '<'.repeat(n);
    const end_pattern = '<'.repeat(n) + '_' + '>'.repeat(n);
    return {
      start_pattern,
      end_pattern
    };
  };

  module.exports = {
      create_pattern,
      generateNextPattern
  }