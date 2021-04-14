const requestMultipleUrls = require("request-multiple-urls")
const mockData = require("../__mocks__/mock-data")
const deepCompare = require('deep-compare')

test("check single url", () => {
    const urls = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'
    ]
    return requestMultipleUrls(urls).then(result => {
        const mockResult = mockData[urls[0]].data.items
        expect(deepCompare(result, mockResult)).toEqual(true)
    })
})

test("check multiple urls", () => {
    const urls = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    ]
    return requestMultipleUrls(urls).then(result => {
        const mockResult = Object.keys(mockData)
            .map(k => mockData[k].data.items)
            .reduce((items, item) => [...items, ...item])
        expect(deepCompare(result, mockResult)).toEqual(true)
    })
})