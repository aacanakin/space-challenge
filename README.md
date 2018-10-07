# space-challenge
This is a poc on how to atomic design, typescript, react-redux with ad-cli.

## Getting Started
- Clone the repo
```sh
git clone git@github.com:aacanakin/space-challenge.git
```
- Install dependencies on  repository root folder
```sh
cd space-challenge
npm install
```
- Build
```sh
rm -rf coverage && npm run build
```
- Serve the app
```sh
npm install -g serve
serve -s build
```
- Navigate to [http://localhost:5000](http://localhost:5000)

## Tests
To run tests, perform the following command on repository root folder;
```sh
npm test
npm test -- --coverage # to see coverage report
```

## Future Improvements
- More tests
- LaunchDetailsPage & LaunchMissionDetailsPage should be unified with a mode option on container
- Infinite scroll initially requests more than 1 request
    - offset: 0, count: 10,
    - offset: 10, count: 10
    - It should be only 1 request
- LaunchImage
    - LaunchImage should lazily load images using an image loader library
