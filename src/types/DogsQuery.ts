export interface DogsQuery {
  breeds?: [string];
  zipCodes?: [string];
  ageMin?: number;
  ageMax?: number;
  sortOrder?: string;
  sortBy?: string;
  page?:number;
  size?: number;
}