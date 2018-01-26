import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from "graphql";

import { UserResponseType } from "../types/UserType";

const login = {
  type: UserResponseType,
  args: {
    email: { type: new NonNull(StringType) }
  },
  resolve: (value, { id }) =>
    // If user is not registered, send confirmation (and login) mail
    // else send login mail
    ({
      ok: false,
      user: null,
      errors: ["Not implemented"]
    })
};

export default login;
