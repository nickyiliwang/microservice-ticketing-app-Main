// importing types for ts-lint
import express, { Request, Response } from "express";
// validationResult will append any error messages within req obj
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    //   middleware for validation & trimming(spaces)
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    // if error occures
    if (!errors.isEmpty()) {
      // sent back as an arr to turn into JSON
      return res.status(400).send(errors.array());
    }

    const { email, password } = req.body;
    console.log("Creating a user...");
    res.send({});
  }
);

export { router as signupRouter };
