import gql from "graphql-tag";

export default class Queries {
  static get login() {
    return gql`
      query login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          _id
          email
          phone
          role
          profilePicture

        }
      }
    `;
  }

}