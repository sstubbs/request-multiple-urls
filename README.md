## Request Multiple URLs
1. Error handling
- Error is returned for use by caller function and not altered so there is no loss of information.
2. Testing
- `jest` has been used
- Only unit tests with mocks and no integration tests have been added as only public urls are available which could change
3. Documentation
- JSDoc has been used for documentation generation, and committed to the `out` folder
4. Dependencies
- Initially I was going to use `axios` or `isomorphic-fetch` and allowing this to work for web as well as nodejs 
  however the endpoints do not have open cors policies to allow this, so I ended up using `node-fetch` as this will
  only be running on nodejs.
- I know there quite a few options to compare objects in the tests, I chose `deep-compare` for simplicity  