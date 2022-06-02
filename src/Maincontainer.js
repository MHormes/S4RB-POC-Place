import React, { useEffect, useState } from "react";
import './container.css';
import * as func from './ChosenColor.js';

const Maincontainer = () => {

    useEffect(() => {
        document.body.appendChild(grid);
    }, [])

    const [chosenColor, setChosenColor] = useState("white");

    const clickableGrid = (rows, cols, callback) => {
        var i = 0;
        var grid = document.createElement('table');
        grid.className = 'grid';
        for (var r = 0; r < rows; ++r) {
            var tr = grid.appendChild(document.createElement('tr'));
            for (var c = 0; c < cols; ++c) {
                var cell = tr.appendChild(document.createElement('td'));
                i++;
                cell.addEventListener('click', (function (el, i) {
                    return function () {
                        callback(el, i);
                    }
                })(cell, i), true);
            }
        }
        return grid;
    }

    var grid = clickableGrid(20, 60, function (el, i) {
        console.log(chosenColor) 
        console.log("You clicked on element:", el);
        //console.log("You clicked on item #:", i);
        el.className = func.getColor();
        console.log(el.className);
    });

    const buttonClick = (color) => {
        func.setColor(color);
        setChosenColor(color);
    }

    return (
        <>
            <h1>Choose color</h1>
            <div className="buttons">
                <button onClick={() => buttonClick("red")}>Red</button>
                <button onClick={() => buttonClick("green")}>Green</button>
                <button onClick={() => buttonClick("blue")}>Blue</button>
                <button onClick={() => buttonClick("yellow")}>Yellow</button>
                <button onClick={() => buttonClick("black")}>Black</button>
                <button onClick={() => buttonClick("white")}>White</button>
            </div>
            <h1>Currently chosen: {chosenColor}</h1>
        </>
    )
}

export default Maincontainer