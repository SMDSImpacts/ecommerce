'use client'

import React, { useState } from "react";

const ComputerAndAccessories = () => {

  const [hoveredItem, setHoveredItem] = useState(null);
  const yourArray = [
    { id: 1, title: 'item1', list: ['Option 1', 'Option 2', 'Option 3'] },
    { id: 2, title: 'item2', list: ['Option A', 'Option B', 'Option C'] }
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 mt-40">
      {yourArray.map((item:any) => (
        <div
          key={item.id}
          className= {`hover-container ${hoveredItem === item.id ? 'hovered' : '' }` } 
          onMouseEnter= {() => setHoveredItem(item.id)}
          onMouseLeave= {() => setHoveredItem(null)}
        >
          <div className="item-title text-red-600">{item.title}</div>
          {hoveredItem === item.id && (
            <ul className="additional-list">
              {item.list.map((option:any, optionIndex:any) => (
                <li key={optionIndex}>{option}</li>
              ))}              
            </ul>
          )}
        </div>
      ))
      }
    </div>
  )
};

export default ComputerAndAccessories;
