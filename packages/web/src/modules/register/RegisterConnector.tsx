import * as React from 'react';
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@abb/controller";

export class RegisterConnector extends React.PureComponent {
    render() {
        return (
          <React.Fragment>
              <RegisterController>
                  {({submit}) =>  <RegisterView submit={submit}/>}
              </RegisterController>
          </React.Fragment>
        )
    }
}

