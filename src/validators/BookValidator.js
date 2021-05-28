const requireKey = (payload, key) => Object.prototype.hasOwnProperty.call(payload, key);

const validatePage = (payload) => {
  if (!Object.prototype.hasOwnProperty.call(payload, 'readPage') || !Object.prototype.hasOwnProperty.call(payload, 'pageCount')) {
    return false;
  }
  const { readPage, pageCount } = payload;
  if (readPage > pageCount) return false;
  return true;
};

module.exports = { requireKey, validatePage };
