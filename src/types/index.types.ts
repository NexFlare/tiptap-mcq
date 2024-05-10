export interface ResponseObject<T> {
  response: T;
  error: string | null;
  code: number;
}
