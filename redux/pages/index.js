import Api from "@/components/api";
import { Provider } from "react-redux";
import store from "@/app/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Hello</h1>
          <Api />
        </div>
      </Provider>
    </>
  );
}
