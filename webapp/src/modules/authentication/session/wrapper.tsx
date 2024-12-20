
/**
 * Generated by ExoCoding 0.0.1
 */

import React from 'react';
import { Account } from '@/modules/authentication/types';
import SessionContext from '.';
import { logout } from '../api/AuthController';

type AuthorizationProps = {
  children: React.ReactNode;
};

export const SessionWrapper = (props: AuthorizationProps) => {
  const [isLoggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<Account | null>(null);

  const performLogout = async () => {
    await logout();
    setLoggedIn(false);
    setAccount(null);
  };

  return (
    <SessionContext.Provider value={{ isLoggedIn, setLoggedIn, account, setAccount, logout: performLogout }}>
      {props.children}
    </SessionContext.Provider>
  );
};
