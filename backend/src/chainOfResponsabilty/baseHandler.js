class Handler {
    setNext(handler) {
      this.next = handler;
      return handler;
    }
  
    async handle(request) {
      if (this.next) {
        return this.next.handle(request);
      }
      return true;
    }
  }
  
  module.exports = Handler;
  
