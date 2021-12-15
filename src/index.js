import { toDoList } from "./app";
import { createHeader } from "./header";
import './style.css';

const header = document.querySelector('.header');
header.appendChild(createHeader(header));

console.log(toDoList.list);