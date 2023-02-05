export interface categoryType {
  id: string,
  name: string,
  description: string,
  status: boolean,
}

export interface bookType {
  id: string,
  name: string,
  description: string,
  author: string,
  categories: string[],
  image: string,
  date: string,
  status: boolean,
}