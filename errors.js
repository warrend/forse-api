class BaseError extends Error{
    constructor(statusCode, internalCode, message, details){
      super(message);
      this.statusCode = statusCode;
      this.internalCode = internalCode;
      this.error = message || "";
      this.details = details || "";
    }
  }
  
  class NotFound extends BaseError{
    constructor(message, details){
      super("404", "N1", message, details);
    }
  }
  
  class ServerError extends BaseError{
    constructor(message, details){
      super("500", "E1", message, details);
    }
  }
  
  class BadRequest extends BaseError{
    constructor(message, details){
      super("400", "B1", message, details);
    }
  }
  
  
  module.exports = {
    BaseError,
    NotFound,
    ServerError,
    BadRequest
  }