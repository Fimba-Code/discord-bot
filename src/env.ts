const { NODE_ENV } = process.env
export const __TEST__ = NODE_ENV === "test"
export const __PROD__ = !__TEST__
