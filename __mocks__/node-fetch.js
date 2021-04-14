const mockData = require("./mock-data")

function nodeFetch(url) {
    return Promise.resolve({
        ok: true,
        json: () => {
            return mockData[url]
        }
    })
}

module.exports = nodeFetch