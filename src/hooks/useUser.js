import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
        const [user, setUser] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [isLoggedIn, setIsLoggedIn] = useState();

        useEffect(() => {
                const unsubscribe = onAuthStateChanged(getAuth(), (updatedUser) => {
                        setUser(updatedUser);
                        setIsLoading(false);

                        if (updatedUser) {
                                setIsLoggedIn(true);
                        }

                });

                return unsubscribe;
        }, []);

        return { user, isLoading, isLoggedIn };
}

export default useUser;