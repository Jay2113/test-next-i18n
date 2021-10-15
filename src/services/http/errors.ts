export class HttpFetchError extends Error {
    public readonly name: string;
    public readonly req: Request;
    public readonly res?: Response;
  
    constructor(
      message: string,
      name: string,
      public readonly request: Request,
      public readonly response?: Response,
      public readonly body?: any
    ) {
      super(message);
      this.name = name;
      this.req = request;
      this.res = response;
  
      // captureStackTrace is only available in the V8 engine, so any browser using
      // a different JS engine won't have access to this method.
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, HttpFetchError);
      }
    }
  }