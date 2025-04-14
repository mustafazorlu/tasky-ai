import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';

const AuthSyncPage = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded, userId } = useAuth();
  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      if (localStorage.getItem('clerkUserId')) {
        localStorage.removeItem('clerkUserId');
      }

      navigate('/');
      return;
    }

    if (isSignedIn) {
      localStorage.setItem('clerkUserId', userId);
      navigate('/app/today');
    }
  }, [userId, isSignedIn, isLoaded, navigate]);
  return <></>;
};

export default AuthSyncPage;
