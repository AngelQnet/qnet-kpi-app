// This file uses the oicid config to provide authentication 

import { UserManager, WebStorageStateStore } from 'oidc-client-ts';
import { oidcConfig } from './oidc-config';

const userManager = new UserManager({
  ...oidcConfig,
  userStore: new WebStorageStateStore({
    store: window.localStorage,
  }),
});

export const login = async() => await userManager.signinRedirect();

export const logout = () => userManager.signoutRedirect();

export const getUser = () => userManager.getUser();

export const signinCallback = () => userManager.signinRedirectCallback();

export { userManager };
