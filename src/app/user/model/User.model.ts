export interface User {
  user: {
    id: number,
    username: string,
    role: {
      id: number,
      name: string,
      type: string,
      created: string,
      updated: string
    }
  },
  auth: {
    token: string,
    expiry: string
  }
}
