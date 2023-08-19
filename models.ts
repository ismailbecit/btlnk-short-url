export type IBtlnkError = {
  description: string,
  data: null | string | object
}

export type IBtlnkNewLink = {
  url: string,
  destinationUrl: string
}

export type IBtlnkFetchLinks = {
  Records: IBtlnkLnk[]
  From: number,
  To: number,
  CountOfTotalItems: number
}

export type fetchLinkReport = {
  Records: IBtlnkReport[]
  From: number,
  To: number,
  CountOfTotalItems: number
}

export type IBtlnkLnk = {
  ID: number,
  CreatedAt: Date,
  UpdatedAt: Date,
  DeletedAt: null,
  name: string,
  userId: number,
  url: string,
  destinationUrl: string,
  identifier: string,
  count: number,
  description: string,
  type: number,
  state: number
}

export type IBtlnkReport = {
  ID: number,
  CreatedAt: Date,
  UpdatedAt: Date,
  DeletedAt: null,
  linkId: number,
  link: string,
  userAgent: string,
  platform: string,
  ip: string,
  country: string,
  countryCapital: string,
  countryCode: string,
  city: string,
  referrer: string
}