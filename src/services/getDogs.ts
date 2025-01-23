import { Dog } from "../types/Dog";
import api from "./apiConfig";
export default async function getDogs(resultIds: [string]): Promise<[Dog]> {
    const response = await api.post('/dogs', resultIds);
    return response.data;
  }