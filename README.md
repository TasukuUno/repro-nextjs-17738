# repro-nextjs-17738
https://github.com/vercel/next.js/issues/17738

## Current behavior

<img width="600" src="https://user-images.githubusercontent.com/4372047/95553057-bffec500-0a48-11eb-9c78-825478ece29a.png" />

## Expected behavior

<img width="600" src="https://user-images.githubusercontent.com/4372047/95553912-4b2c8a80-0a4a-11eb-9cb8-e7416117ec4a.png" />


## To Reproduce

### run 

```
yarn build && yarn start
```

access http://localhost:3000

### getServerSideProps flow

click 'getServerSideProps flow', go through pages and go back.

![gssp](https://user-images.githubusercontent.com/4372047/95566993-4de4ab00-0a5d-11eb-8146-ec2c1cf77c48.gif)


### getStaticProps flow

click 'getServerSideProps flow', go through pages and go back.

![gsp](https://user-images.githubusercontent.com/4372047/95566988-4b825100-0a5d-11eb-8cc9-0c9b52ad310a.gif)
