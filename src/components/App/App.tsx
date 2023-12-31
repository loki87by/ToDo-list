import React, { ReactElement, useState, useEffect } from "react";
import axios from "axios";
import { AppState } from "../../utils/types";
import { OnLoadingData } from "../LoadingData/LoadingData";
import { dataUpdater } from "../../utils/helpers";
import Content from "../Content/Content";

function App(): ReactElement {
  const DataLoading = OnLoadingData(Content);

  const [appState, setAppState] = useState<AppState>({
    loading: true,
    data: null,
  });

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    axios.get(apiUrl).then((resp) => {
      const data = dataUpdater(resp.data);
      setAppState({
        loading: false,
        data: data,
      });
    });
  }, [setAppState]);

  return (
    <>
      <DataLoading isLoading={appState.loading} data={appState.data} />
    </>
  );
}

export default App;
