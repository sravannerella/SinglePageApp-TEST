import { registerApplication, start } from 'single-spa';

registerApplication(
    // Application Name
    'home',
    // Loading Function
    () => {},
    // Activity Function
    (location) => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/home')
);

start();