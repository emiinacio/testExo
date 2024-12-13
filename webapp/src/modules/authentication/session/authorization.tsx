
/**
 * Generated by ExoCoding 0.0.1
 */

import React from 'react';
import useSession from '@/hooks/useSession';

type AuthorizationProps = {
  allowedRoles?: string[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Class that checks the authenticated user's roles
 */
export const Authorization = (props: AuthorizationProps) => {

  const [loading, session] = useSession();

  if (loading) return null;
  if (!session.isLoggedIn || !session.account) return <>{props.fallback ?? null}</>;

  const loggedUserRoles = session.account.roles;
  let canAccess = true;

  canAccess = loggedUserRoles.some((role) => props.allowedRoles?.includes(role));

  return <>{canAccess ? props.children : props.fallback ?? null}</>;
};
