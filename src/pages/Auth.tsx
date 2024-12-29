import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <AuthForm 
          mode={isLogin ? 'login' : 'register'} 
          onToggleMode={() => setIsLogin(!isLogin)}
        />
      </div>
    </div>
  );
}