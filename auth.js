function login(username, password) {
    if (username === "locked") {
        return false;
    }

    if (!username || !password) {
        return false;
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
        return false;
    }

    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
