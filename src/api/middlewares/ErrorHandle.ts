import { NextFunction, Response, Request } from "express";

export default class ErrorHandle {
  public static handle(
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Response {
    if (err instanceof Error && err.stack) {
      return res.status(+err.stack).send(err.message);
    }
    return res.status(500).json({ message: 'Erro não identificado' });
  }
}