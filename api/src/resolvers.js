const data = require("./db.js");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
  Query: {
    user: async (a, { id }, context) => {
      const user = data.users.find(u => u.id === parseInt(id));
      const domains = user.domains.map(domId =>
        data.domains.find(domain => domain.id === domId)
      );
      await sleep(1500);
      return { ...user, domains };
    },
    domains: (a, { language }, context) => {
      const domains = data.domains;
      if (language) {
        return domains.filter(domain => domain.language === language);
      }
      return domains;
    }
  }
};
