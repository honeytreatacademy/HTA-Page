import { React } from 'react';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className='main'>Welcome to our website!</h1>
      
      <Footer />
    </div>
  )
}