import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

// admin
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './admin/Login';
import { Dashboard } from './admin/Dashboard';

export default function App() {
  function PrivateRoute({ children }: { children: JSX.Element }) {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/admin/login" replace />;
  }

  const home = (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <div className="space-y-20">
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </div>
      </div>
      <Footer />
      <ChatWidget />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={home} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}