import StoryForm from './components/StoryFrom';
import './App.css'
import LanguageSelect from './components/LanguageSelect';
import VideoResult from './components/VideoResult';
import './locales/index';

function App() {
  return (
    <div className="app">
      <LanguageSelect />
      <div className="appMainArea">
        <StoryForm />
        <VideoResult />
      </div>
    </div>
  )
}

export default App
