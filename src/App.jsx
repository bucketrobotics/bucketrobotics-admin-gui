import './App.css';
import { TabPage, TabController } from './TabController/TabController';
import { News } from './News/News';
import { Storage } from './Storage/Storage';

function App() {
  return (
    <div className="App">
      <TabController>
        <TabPage name="News">
          <News />
        </TabPage>
        <TabPage name="Storage">
          <Storage />
        </TabPage>
      </TabController>
    </div>
  );
}

export default App;
