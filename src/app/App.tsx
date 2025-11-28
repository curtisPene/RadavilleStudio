import { AppStore } from "./AppStore";
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
}

export default App;
