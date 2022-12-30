import logo from './logo.svg';
import './App.css';
import { TabPage, TabController } from './TabController/TabController';

function App() {
  return (
    <div className="App">
      <TabController>
        <TabPage name="News">
          <div>News Content</div>
        </TabPage>
        <TabPage name="Storage">
          <div>Storage Content</div>
        </TabPage>
      </TabController>
    </div>
  );
}

export default App;
