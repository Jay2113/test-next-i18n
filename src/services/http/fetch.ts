import { HttpFetchError } from './errors';

const JSON_CONTENT = /^(application\/(json|x-javascript)|text\/(x-)?javascript|x-json)(;.*)?$/;

type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

type FetchOptions = {
  headers?: Record<string, any>;
  body?: any;
};

type FetchOptionsWithMethod = FetchOptions & {
  method: HttpMethod;
};

type FetchResponse<TBody = any> = {
  request: Request;
  response: Response;
  body: TBody;
};

type HttpHandler = <TResponseBody = any>(
  path: string,
  options?: FetchOptions
) => Promise<FetchResponse<TResponseBody>>;

export class Fetcher {
  public readonly delete = this.shorthand('DELETE');
  public readonly get = this.shorthand('GET');
  public readonly post = this.shorthand('POST');
  public readonly put = this.shorthand('PUT');

  private fetch = async <TResponseBody>(
    path: string,
    options: FetchOptionsWithMethod
  ): Promise<FetchResponse<TResponseBody>> => {
    const request = this.createRequest(path, options);
    let response: Response;
    try {
      response = await fetch(request);
    } catch (err) {
      throw new HttpFetchError(err.message, err.name ?? 'Error', request);
    }

    const contentType = response.headers.get('Content-Type') || '';
    let body = null;
    try {
      if (JSON_CONTENT.test(contentType)) {
        body = await response.json();
      } else {
        const text = await response.text();
        try {
          body = JSON.parse(text);
        } catch (err) {
          body = text;
        }
      }
    } catch (err) {
      throw new HttpFetchError(err.message, err.name ?? 'Error', request, response, body);
    }

    if (!response.ok) {
      throw new HttpFetchError(response.statusText, 'Error', request, response, body);
    }

    return { request, response, body };
  };

  private createRequest(path: string, options: FetchOptionsWithMethod): Request {
    const { method, body, headers } = options;
    return new Request(path, {
      method,
      body,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
  }

  private shorthand(method: HttpMethod): HttpHandler {
    return (path: string, options: FetchOptions = {}) => {
      return this.fetch(path, {
        method,
        ...options,
      });
    };
  }
}