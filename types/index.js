// @flow
export type GetInitialProps = {
  pathname: string,
  query: any,
  req?: any,
  res?: any,
  jsonPageRes?: any,
  err?: any,
  ctx?: any,
  Component: {
    getInitialProps?: (ctx: any) => void,
  },
};
