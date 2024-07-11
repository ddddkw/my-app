import Gallery from "./app/pages/Gallery.js"
import './App.css';
// 这里应该是类似于vue中的App.vue文件，主要修改应该是在这里，然后通过组件的形式主键丰富该文件
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Gallery></Gallery>
      </header>
    </div>
  );
}

export default App;
