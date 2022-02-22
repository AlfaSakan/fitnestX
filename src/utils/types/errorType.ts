export function instanceOfErrorDuplicateEmail(object: any): object is ErrorDuplicateEmail {
  return 'code' in object.result;
}

export interface ErrorDuplicateEmail {
  result: Result;
  status: number;
}

export interface Result {
  code: number;
  index: number;
  keyPattern: KeyPattern;
  keyValue: KeyValue;
}

export interface KeyPattern {
  email: number;
}

export interface KeyValue {
  email: string;
}
