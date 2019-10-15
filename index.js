import { render } from './renderer';
import * as data from './data.json';

function getThingTemplate(thing) {
    return `<li><b>${thing.name}</b> - ${thing.description} - ${thing.laps}</li>`;
}

function sortMyStuff(first, second){
 if(parseInt(first.laps) > parseInt(second.laps)){
     return -1;
 } else if (parseInt(first.laps) < parseInt(second.laps)){
     return 1;
 } else {
     return 0;
 }
}
console.log(data.results);

const things = data.results.sort(sortMyStuff);
let content = "<ul>";

for(let i=0; i < things.length; i++){
    console.log(things[i]);
    content += getThingTemplate(things[i]);
}

content += '</ul>'

// const things = ['Silverstone', 'Hockenheim', 'Albert Park', 'Interlagos'];
                              
render(content);