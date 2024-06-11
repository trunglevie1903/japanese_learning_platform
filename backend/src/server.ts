import App from "./app";

export const createServer = (): void => {
  const app = new App([], 3000);
  app.listen();
};