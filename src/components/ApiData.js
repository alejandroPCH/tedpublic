

const BASE_URL = 'https://my-json-server.typicode.com/alejandropch/tedpublic';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {

        // hey, if you're seeing this, try to uncomment one of these and see what happen :D

        // return []
        // throw new Error("Oh gosh, we do not know what is happening")

        return callApi('/badges');
    },
    create(badge) {

      //un comment this and see what happen :D
      // throw new Error("Your form was not summited, sorry my friend")

      return callApi(`/badges`, {
        method: 'POST',
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // delete it's a reserve JS word, so i just called remove
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;