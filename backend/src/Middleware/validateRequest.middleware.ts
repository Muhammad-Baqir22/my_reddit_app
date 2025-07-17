import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodRawShape } from "zod";

const validaterequest = (schema: ZodObject<ZodRawShape>) =>
    (req: Request, res: Response, next: NextFunction): void => {
        try {
            schema.parse({ body: req.body, query: req.query, params: req.params });
            return next();

        } catch (error: any) {
            res.status(400).json({ success: false, message: "Validation error", error: error.message });
            return;
        }
    }
export default validaterequest;