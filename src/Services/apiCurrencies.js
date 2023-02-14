const url = `https://api.nbp.pl/api/exchangerates/rates/a/`;

const fetchCurrency = (currency) => {
    return fetch(url + currency)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
export {fetchCurrency};
