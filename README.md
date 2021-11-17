# A Bank Card Number Tokeniser
A small application in nodejs to sanitise bank card numbers.

# Build instructions

1. npm install
2. npm test
3. npm run dev

# Usage instructions

The default port is 3000. 

There are two endpoints. 

/tokenise (note the english spelling) and /detokenise 

Example tokenise request: 

PUT: 

```
[
  "2345-2345-2345-2345",
  "1234-1234-1234-1234"
]
```

Example detokenise request: 

GET:

```
[
  "73d75daa1b6bef69fc31d5afb8ad479b",
  "66632162b552b28989d0ecdc4c05c061"
]
```

Note: You must have tokenised some bank card numbers in order to detokenise them!


