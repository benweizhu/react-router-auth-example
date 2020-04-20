export function authenticate(cb: any) {
    setTimeout(() => {
        localStorage.setItem('isAuthenticated', 'true');
        cb()
    }, 500);
}

export function signout(cb: any) {
    localStorage.setItem('isAuthenticated', 'false');
    setTimeout(cb, 100);
}