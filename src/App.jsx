import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormValidation from './FormValidation';
import SubmitComment from './SubmitComment'; // Import the SubmitComment component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormValidation />} />
        <Route path="/submitcomment" element={<SubmitComment />} /> 
      </Routes>
    </BrowserRouter>
  );
}
