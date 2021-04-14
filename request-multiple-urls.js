const fetch = require('node-fetch')

function checkStatus(res) {
    if (res.ok) {
        return res.json()
    } else {
        throw Error(res.statusText)
    }
}

function getItems(json) {
    const data = ((json || {}).data || {}).items
    if (data && data.length > 0) {
        return json.data.items.reduce((items, item) => [...items, ...item])
    } else {
        return json
    }
}

/**
 *
 * @param {string[]} urls The urls that will be fetched
 * @returns {Promise} The results from the request
 */
function requestMultipleUrls(urls) {
    return Promise.all(urls.map(v => {
        return fetch(v)
            .then(checkStatus)
            .then(getItems)
    }))
}

module.exports = requestMultipleUrls