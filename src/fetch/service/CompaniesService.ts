import { Company } from "../CompaniesList";

export class CompaniesService {
    static async getAll(): Promise<Company[]> {
      const response = await fetch('/api/companies');
      if (!response.ok) {
        throw new Error('Failed to fetch companies');
      }
      return response.json();
    }
}