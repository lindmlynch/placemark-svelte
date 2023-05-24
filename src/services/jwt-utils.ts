import jwtDecode from "jwt-decode";

export function getToken() {
    return localStorage.getItem("token");
}

export function setToken(token: string) {
    localStorage.setItem("token", token);
}

export function removeToken() {
    localStorage.removeItem("token");
}

export function decodeToken(token: string) {
    try {
        return jwtDecode<{ id: string; email: string }>(token);
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
}

export function isAuthenticated() {
    const token = getToken();
    if (token) {
        const decodedToken = decodeToken(token);
        if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
            // Token is valid and not expired
            return true;
        }
    }
    return false;
}

export function getUserId() {
    const token = getToken();
    if (token) {
        const decodedToken = decodeToken(token);
        if (decodedToken) {
            return decodedToken.id;
        }
    }
    return null;
}
