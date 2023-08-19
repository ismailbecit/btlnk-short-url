import { IBtlnkFetchLinks, IBtlnkNewLink, fetchLinkReport } from './models';

export function createBtlnkService(options: { apiKey: string, isSSL?: boolean }): BtlnkService;

export interface BtlnkService {
  newLink(params: { url: string }): Promise<IBtlnkNewLink>;
  fetchLinks(params: { page: number }): Promise<IBtlnkFetchLinks[]>;
  fetchLinkReport(params: { id: number, page: number }): Promise<fetchLinkReport[]>;
}