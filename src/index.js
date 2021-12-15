import { createHeader } from "./header";
import { createDisplay } from "./display";
import { createAddButton } from "./addbutton";
import './style.css';

const header = document.querySelector('.header');
createHeader(header);

const addButton = document.querySelector('.add-button');
createAddButton(addButton);

const display = document.querySelector('.display');
createDisplay(display);