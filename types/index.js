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

export type Resource = {
  name: string,
  url: string,
};

export type AppSource = {
  windows?: string,
  ios?: string,
  macos?: string,
  anrdroid?: string,
  website?: string,
};

export type Offer = {
  label: string,
  url: string,
};

export type App = {
  name: string,
  image: string,
  sources: AppSource,
  url: string,
  offer: Offer,
};

export type ChecklistResource = {
  id: string,
  title: string,
  description: string,
  apps?: ?Array<App>,
  resources?: ?Array<Resource>,
};
