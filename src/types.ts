export interface ProjectModel { 
  id: number,
  name: string,
  about: string[],
  links: ButtonLinkModel[],
  keyLearnings: string[],
}

export interface ButtonLinkModel {
  id: number,
  buttonText: string,
  href: string,
}

export interface StandardSectionModel {
  header: string,
  paragraphs: string[],
  bullets?: string[]
}