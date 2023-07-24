import { buildFixtureWithTranslation } from "./task-1";

const fixtureInEnglish = {
  fixtureId: "xyz",
  name: "Benfica v Bayern Munchen",
  languageCode: "en",
  competitions: [
    {
      competitionId: "abc",
      languageCode: "en",
      competitionName: "English League"
    },
    {
      competitionId: "abc",
      languageCode: "de",
      competitionName: "Englische Liga"
    }
  ]
};

const fixtureInGerman = {
  fixtureId: "xyz",
  name: "Benfica v Bayern München",
  languageCode: "de",
  competitions: [
    {
      competitionId: "abc",
      languageCode: "en",
      competitionName: "English League"
    },
    {
      competitionId: "abc",
      languageCode: "de",
      competitionName: "Englische Liga"
    }
  ]
};

const fixtureInJapanese = {
  fixtureId: "xyz",
  name: "ベンフィカvバイエルンミュンヘン",
  languageCode: "jp",
  competitions: [
    {
      competitionId: "abc",
      languageCode: "en",
      competitionName: "English League"
    },
    {
      competitionId: "abc",
      languageCode: "de",
      competitionName: "Englische Liga"
    }
  ]
};

describe("buildFixtureWithTranslation", () => {

  describe("When fixture contains a competition matching the language of the fixture", () => {
    it("Returns the translated competition name matching the fixture language", () => {
      const translatedEnglishFixture = buildFixtureWithTranslation(
        fixtureInEnglish
      );
      expect(translatedEnglishFixture.competitionName).toEqual(
        "English League"
      );
      const translatedGermanFixture = buildFixtureWithTranslation(
        fixtureInGerman
      );
      expect(translatedGermanFixture.competitionName).toEqual(
        "Englische Liga"
      );
    });
  });
  
  describe("When fixture does not contain a competition matching the language of the fixture", () => {
    it("Returns the English translated competition name", () => {
      const translatedJapaneseFixture = buildFixtureWithTranslation(
        fixtureInJapanese
      );
      expect(translatedJapaneseFixture.competitionName).toEqual(
        "English League"
      );
    });
    it("Returns the expected format of data", () => {
      const translatedGermanFixture = buildFixtureWithTranslation(
        fixtureInGerman
      );
      expect(translatedGermanFixture).toEqual({
        fixtureId: "xyz",
        languageCode: "de",
        name: "Benfica v Bayern München",
        competitionId: "abc",
        competitionName: "Englische Liga",
      });
    });
  });

});
