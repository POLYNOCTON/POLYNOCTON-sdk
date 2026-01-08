/**
 * Base error class for all POLYNOCTON SDK errors.
 */
export class POLYNOCTONError extends Error {
  code?: string;
  cause?: unknown;
  
  constructor(message: string, code?: string, cause?: unknown) {
    super(message);
    this.name = "POLYNOCTONError";
    this.code = code;
    this.cause = cause;
  }
}

/**
 * Error thrown when an HTTP request fails.
 */
export class HttpError extends POLYNOCTONError {
  status: number;
  
  constructor(status: number, message: string, cause?: unknown) {
    super(message, "HTTP_ERROR", cause);
    this.status = status;
  }
}
