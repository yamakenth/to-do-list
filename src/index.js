import { createHeader } from "./header";
import { createDisplay } from "./display";
import './style.css';

const header = document.querySelector('.header');
createHeader(header);

const display = document.querySelector('.display');
createDisplay(display);