import express, { Express, Request, Response } from "express";

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/calculate", (req: Request, res: Response) => {
  const expression: string = req.body.expression;

  // Validate the input expression
  if (!expression) {
    res.status(400).json({ error: "Expression is required" });
    return;
  }

  // Implement the calculator
  const result = calculate(expression);

  // Return the result
  res.status(200).json({ result });
});

export function calculate(expression: string): number {
  let stack: number[] = [];
  let currentNumber = 0;
  let currentOperator = "+";
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (!isNaN(Number(char))) {
      currentNumber = currentNumber * 10 + Number(char);
    }
    if (char === "(") {
      const closingParenIndex = findClosingParenthesisIndex(
        expression.substring(i)
      );
      currentNumber = calculate(
        expression.substring(i + 1, i + closingParenIndex)
      );
      i += closingParenIndex;
    }
    if ((isNaN(Number(char)) && char !== " ") || i === expression.length - 1) {
      switch (currentOperator) {
        case "+":
          stack.push(currentNumber);
          break;
        case "-":
          stack.push(-currentNumber);
          break;
        case "*":
          stack.push(stack.pop()! * currentNumber);
          break;
        case "/":
          stack.push(stack.pop()! / currentNumber);
          break;
      }
      currentNumber = 0;
      currentOperator = char;
    }
  }
  return stack.reduce((acc, val) => acc + val, 0);
}

export function findClosingParenthesisIndex(expression: string): number {
  let count = 0;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      count++;
    }
    if (expression[i] === ")") {
      count--;
      if (count === 0) {
        return i;
      }
    }
  }
  throw new Error("No matching closing parenthesis found");
}

app.listen(3000, () => {});
