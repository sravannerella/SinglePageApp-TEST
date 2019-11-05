import { registerApplication, start } from 'single-spa';

registerApplication(
    'edit',
    () => import('./src/edit/edit.app').then(module => module.edit),
    () => true
)

registerApplication(
    // Application Name
    'home',
    // Loading Function
    () => import('./src/home/home.app.js'),
    // Activity Function
    (location) => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/home')
);

start();