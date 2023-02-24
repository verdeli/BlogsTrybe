export default class IdNotFoundError extends Error {
  construtor(message: string) {
    super(message);
    this.name = 'IdNotFoundError';
    this.stack = '404';
  }
}