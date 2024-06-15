import { useLoaderData } from 'react-router-dom'
import './App.css'
import UpBanner from './components/UpBanner';
import AppBanner from './components/AppBanner';
import AppFeatures from './components/AppFeatures';
import AppCardSection from './components/AppCardSection';

function App() {

  const coffeeData = useLoaderData();

  return (
    <div>
      <UpBanner />
      <AppBanner />
      <AppFeatures />
      <AppCardSection coffeeData={coffeeData}/>
    </div>
  )
}

export default App
