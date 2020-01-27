import gql from "graphql-tag";

export default class Queries {
  static get createService() {
    return gql`
    mutation create_service($service: INPUT_SERVICE!) {
      create_service(service: $service) {
        _id
      }
    }
    `;
  }

  static get getServices() {
    return gql`
      query get_services {
        get_services {
        _id
        name{
          en
          ar
        }
        logo
      }
    }
    `;
  }

}






