import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class loggerMiddleware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction) {
        console.log("middleware applied", req.method);
        next()
    }
}