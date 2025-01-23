import { Dog } from './Dog';

export interface DogResponse {
  dogs: [Dog];
  total: number;
}