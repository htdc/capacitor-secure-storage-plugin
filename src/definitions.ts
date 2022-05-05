/** @format */

export interface SecureStoragePluginPlugin {
  get(options: {
    serviceKey?: string;
    key: string;
  }): Promise<{ value: string }>;
  set(options: {
    serviceKey?: string;
    key: string;
    value: string;
  }): Promise<{ value: boolean }>;
  remove(options: {
    serviceKey?: string;
    key: string;
  }): Promise<{ value: boolean }>;
  clear(options: { serviceKey?: string }): Promise<{ value: boolean }>;
  keys(options: { serviceKey?: string }): Promise<{ value: string[] }>;
  getPlatform(): Promise<{ value: string }>;
}
