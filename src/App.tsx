import './styles/global.css';
import { Heading } from './components/Heading';
import { Form } from './components/Form';
import { FooterForm } from './components/FooterForm';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <Heading/>
      <Form/>
      <FooterForm/>
    </div>
  )
}

export default App
