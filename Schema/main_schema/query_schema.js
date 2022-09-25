import { userQueriesSchema } from "../users";

export const querySchema = `
    type Query {
        ${userQueriesSchema}
    }
`