import { Router, Request, Response, NextFunction } from "express";

import Interface_Controller from "@/utils/Interface.Controller";
import HttpException from "@/utils/HttpException";

class DummyController implements Interface_Controller {
  public path = "/";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      `${this.path}`,
      this.get
    )
  };

  private get = (
    req: Request, res: Response, next: NextFunction
  ): void => {
    res.status(200).json({
      message: "OK!"
    });
  };
}

export default DummyController;