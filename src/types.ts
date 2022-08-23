export interface ProjectModel { 
  id: number,
  name: string,
  about: string[],
  links: ButtonLinkModel[],
  bullets?: string[],
}

export interface ButtonLinkModel {
  id: number,
  buttonText: string,
  href: string,
}