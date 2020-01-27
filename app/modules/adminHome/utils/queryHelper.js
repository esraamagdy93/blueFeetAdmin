import gql from "graphql-tag";

export default class Queries {
  static get createOwner() {
    return gql`
    mutation create_owner($owner: INPUT_OWNER!) {
      create_owner(owner: $owner) {
        _id
        role
      }
    }
    `;
  }
  static get getOwnersWithThemCourts() {
    return gql`
  query get_owners{
    get_owners{
      profile{
        _id
        username
        name{
          first
          last
        }
        phone
        fees
      }
      courts{
        _id
        name{
          en
        }
        available{
          from
          to
        
        }
        price{
          day
        }
      }
        
  }
  }`
  }
  static get createCourt() {
    return gql`
    mutation create_court($court: INPUT_COURT!) {
      create_court(court: $court) {
        _id
        
      }
    }
    `;
  }
  static get editOwner() {
    return gql`
    mutation edit_owner($owner: INPUT_OWNER_UPDATE!) {
      edit_owner(owner: $owner) {
      
      }
    }`
    ;
  }


}