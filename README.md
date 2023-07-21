# Code challenges

## Task 1

### Background

We have a service that receives events. Each event consists of a fixture record, which is a JSON object representing a sporting event (e.g., a football match) for a specific language (therefore one sporting event will have many fixture records).

For example:

```
{
  fixtureId: "xyzen",
  name: "Benfica v Bayern Munich",
  languageCode: "en",
  competitions: [
    {
      competitionId: "abcen",
      languageCode: "en",
      competitionName: "English League"
    },
    {
      competitionId: "abcde",
      languageCode: "de",
      competitionName: "Englische Liga"
    },
    ...
  ]
},
{
  fixtureId: "xyzde",
  name: "Benfica v Bayern München",
  languageCode: "de",
  competitions: [
    {
      competitionId: "abcen",
      languageCode: "en",
      competitionName: "English League"
    },
    {
      competitionId: "abcde",
      languageCode: "de",
      competitionName: "Englische Liga"
    },
    ...
  ]
},
...
```

As you can see, each fixture record also contains a list of competition objects, one for each language that the competition is available.

Each competition object contains a competition ID, a language code and the translated competition name.

There may be a competition name matching the language of the fixture, but there is always an English translation.

### The Task

You should implement a function that accepts a fixture record, and returns a FixtureWithTranslation object.

This object should contain the Fixture Id, Fixture Name and the Fixture's language code; As well as the competitionId and the matching translated Competition Name.

If there isn't a matching translation, the English Competition name should be used. 

You should also implement any interfaces that are necessary, referring to the unit tests.

All Unit tests in `task-1.test.ts` should pass.

### Commands

 * Install dependancies: `npm ci`
 * Run tests once: `npm test`
 * Keep running tests as code changes: `npm run test-watch`
