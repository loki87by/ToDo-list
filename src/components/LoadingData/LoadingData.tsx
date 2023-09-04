import React from "react";
import { DataLoad } from "../../utils/types";
import Preloader from "../Preloader/Preloader";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function OnLoadingData<T extends DataLoad>(
  Child: React.ComponentType<T>
) {
  return class extends React.Component<DataLoad & T> {
    static displayName = `onLoadingData(${Child.displayName || Child.name})`;
    render() {
      console.log(this.props.isLoading);
      return this.props.isLoading ? (
        <div>
          <h1>Подождите, данные загружаются!</h1>
          <Preloader />
        </div>
      ) : (
        <Child {...this.props} />
      );
    }
  };
}
