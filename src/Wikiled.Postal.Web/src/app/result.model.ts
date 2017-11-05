
enum ResponseType {
  Ok = 0,
  Error = 1
}

export class ApiResponse<T> {
  status: string;
  code: number;
  responseType: ResponseType;
  result: T;
}
