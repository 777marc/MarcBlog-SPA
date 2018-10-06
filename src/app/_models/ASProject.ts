export class ASProject {
  constructor(
      public id: number,
      public projectName: string,
      public description: string,
      public githubLink: string,
      public liveSiteLink: string,
      public dateCreated: Date
  ) {}
}
