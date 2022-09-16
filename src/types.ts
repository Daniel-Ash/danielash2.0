export interface ProjectModel { 
  id: number,
  name: string,
  imageLink: string,
  about: string[],
  links: ButtonLinkModel[],
  tags?: LabelledContentModel,
  keyLearnings: string[],
}

export interface ButtonLinkModel {
  id: number,
  buttonText: string,
  href: string,
  newTab: boolean,
}

export interface LabelledContentModel {
  label: string,
  contents: string[],
  bullets?: string[]
}