import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export function useAdminAuth() {
  const [session, setSession] = useState(undefined); // undefined = loading

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const isLoading = session === undefined;
  const isAuthenticated = !!session;

  return { session, isLoading, isAuthenticated };
}
