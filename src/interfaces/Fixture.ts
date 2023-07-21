export interface Fixture {
  fixtureId: string;
  name: string;
  languageCode: LanguageCode;
  competitions: CompetitionNameTranslation[];
}

export type LanguageCode = string;

export interface CompetitionNameTranslation {
  competitionId: string;
  languageCode: LanguageCode;
  competitionName: string;
}
