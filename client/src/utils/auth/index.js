import React, { createContext, useReducer, useContext, useEffect } from "react";
import * as AuthService from "./auth-service";
import { ERROR, LOGIN_SUCCESS, LOGOUT, PENDING } from "./actions";

export * from "./auth-service";

const initialAuthState = {
  isLoggedIn: false,
  user: null,
  isPending: false,
  error: ""
};

const defaultAuthValue = {
  ...initialAuthState,
  login: () => {},
  logout: () => {},
  signup: () => {}
};

const AuthContext = createContext(defaultAuthValue);

const authReducer = (state, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.error,
        isPending: false
      };
    case PENDING:
      return {
        ...state,
        isPending: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        error: "",
        isPending: false
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isPending: false,
        user: null
      };
    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
};

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const logout = () => {
    AuthService.logout();
    dispatch({ type: LOGOUT });
  };

  // initialize auth state when auth provider is first mounted
  const initAuth = () => {
    if (AuthService.isLoggedIn()) {
      dispatch({ type: PENDING });
      AuthService.user()
        .then(user => dispatch({ type: LOGIN_SUCCESS, user }))
        .catch(error => {
          console.log(error);
          logout();
        });
    }
  };
  useEffect(initAuth, []);

  const login = (email, password) => {
    dispatch({ type: PENDING });
    return AuthService.login(email, password)
      .then(() => AuthService.user())
      .then(user => dispatch({ type: LOGIN_SUCCESS, user }))
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR,
          error: "Invalid email or password. Try again."
        });
      });
  };

  const signup = (email, password) => {
    dispatch({ type: PENDING });
    AuthService.signup(email, password)
      .then(() => login(email, password))
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR,
          error: "Invalid email and password or account already exists."
        });
      });
  };

  const value = {
    ...state,
    login,
    logout,
    signup
  };

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
