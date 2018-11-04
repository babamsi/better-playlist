import React, { Component } from 'react';

import './App.css';

let defaultStyle = {
  color: '#fff'
}
const fakeServerData = {
  user: {
    name: 'Suhayb',
    playlists: [
      {
        name: 'Caafimaad',
        lessons: [{name: 'cycology', duration: 2334}, { name:'physiology', duration: 924}]
      },
      {
        name: 'Chemistry',
        lessons: [{name: 'Form1', duration: 733}, {name: 'Form2', duration: 3364}, {name: 'Form3', duration: 7634}, {name:'Form4', duration: 2374}]
      },
      {
        name: 'Biology',
        lessons: [{name:'Fom3', duration: 934}, {name: 'Form4', duration: 1143}]
      },
      {
        name: 'Math',
        lessons: [{name:'Fom2', duration: 2387}, {name:'Form3', duration: 2439}, {name:'Form4', duration: 29342}]
      },
      {
        name: 'Physics',
        lessons: [{name:'Form1', duration:1920 }, {name: 'Form2', duration: 2400}, {name: 'Form3', duration: 2580}, {name:'Form4', duration: 3000}]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render () {
    return (
      <div style={{...defaultStyle, width: '40%', display:'inline-block'}}>
      <h2>{this.props.playlists.length} playlists</h2>
      </div>
    )
  } 
}
class HoursListCounter extends Component {
  render () {
    let lessons = this.props.playlists.reduce((lessons, eachPlaylist)=> {
      return lessons.concat(eachPlaylist.lessons)
    },[]);
    let duration = lessons.reduce((sum, eachLesson)=>{
      return sum + eachLesson.duration
    },0)
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.floor(duration/60)} Hours</h2>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
      <img />
      <input type="text" />
      Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
      <img />
      <h3>Playlist</h3>
      <ul>
      <li>
      Song1
      </li>
      <li>
      Song2
      </li>
      <li>
      Song3
      </li>
      </ul>
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {}
    }
  }
componentDidMount() {
  setTimeout(() => {
    this.setState({serverData: fakeServerData})
  }, 1000)
  
}
  render() {
    console.log('from render method')
    return (
      <div className="App">
       {this.state.serverData.user ?
        <div>
         <h1 style={{...defaultStyle, fontSize: '54px'}}>

        {this.state.serverData.user.name}'s Playlist
        </h1>
       
        
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursListCounter playlists={this.state.serverData.user.playlists}/>
        
      
       <Filter />
       <Playlist />
       <Playlist />
       <Playlist />
       <Playlist />
       </div>: <h1>Loading....</h1>
       }
      </div>
    );
  }
}

export default App;
