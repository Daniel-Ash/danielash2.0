export interface ProjectModel { 
  id: number,
  name: string,
  about: string[],
  links: ButtonLinkModel[],
  tags?: LabelledContentModel,
  keyLearnings: string[],
}

export interface ButtonLinkModel {
  id: number,
  buttonText: string,
  href: string,
}

export interface LabelledContentModel {
  label: string,
  contents: string[],
  bullets?: string[]
}