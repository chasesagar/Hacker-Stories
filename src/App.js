import React from 'react';
import './App.css';

const welcome = {
  greeting:'Hey',
  title:'Hackers',
}

const list = [
  {
    title:'React',
    url:'https://reactjs.org',
    author:'Jordan Walke',
    num_comments:3,
    points:4,
    objectID:0,
  },
  {
    title:'Sagar',
    url:'http://chasesagar.me/me',
    author:'Sagar Saini',
    num_comments:30,
    points:4,
    objectID:1,
  },

]

function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <hr/>
      <label htmlFor="search">Search : </label>
      <input id="search" type="text" size="50" />
      <hr/>
      <List />
    </div>
  );
}

function List() {
  return (
    <div>
      { list.map(function(item){
        return(
          <div key={item.objectID}>
            <span>
              <a href={item.url} target="blank">{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        )
      })}
    </div>
  );
};

export default App;
