import { DEFAULT_MSG } from "./messages";

export const handler = async ({ queryStringParameters }, _context) => {
  const message = await lazyMessage({
    delay: 1,
    copy: process.env.REPLY_MSG || DEFAULT_MSG,
    shouldFail: queryStringParameters?.fail === "true",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};

const lazyMessage = ({ delay, shouldFail, ...rest }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      shouldFail
        ? reject(new Error("[500] Delayed failure")) // https://www.serverless.com/framework/docs/providers/aws/events/apigateway#using-status-codes
        : resolve(`${rest.copy} (with a delay)`);
    }, delay * 1000)
  );
