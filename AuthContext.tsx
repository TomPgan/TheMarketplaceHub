import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({
    isSignIn: false,
    signIn: () => {},
    signOut: () => {}
});

export const AuthProvider = ({ children }: { children: any }) => {
    const [isSignIn, setIsSignIn] = useState(false);

    const signIn = () => {
        setIsSignIn(true);
    }

    const signOut = () => {
        setIsSignIn(false);
    }

    return (
        <AuthContext.Provider value={ {isSignIn, signIn, signOut} }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);