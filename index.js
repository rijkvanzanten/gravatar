const md5 = require('md5');

module.exports = function createGravatarLink(email, options = {}) {
  if (!email) {
    throw new Error('Gravatar: missing parameter `email`');
  }

  const defaultOptions = {
    size: 40,
    default: 'identicon',
    rating: 'g',
    forcedefault: 'n'
  };

  const optionsWithDefaults = Object.assign({}, defaultOptions, options);

  return `https://gravatar.com/avatar/${md5(email)}.jpg?size=${optionsWithDefaults.size}&d=${optionsWithDefaults.default}&rating=${optionsWithDefaults.rating}&forcedefault=${optionsWithDefaults.forcedefault}`;
}

