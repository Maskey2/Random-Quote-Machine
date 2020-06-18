import React from 'react'
import './../App.css'

class MyApp extends React.Component{
  constructor() {
    super()
    this.state = {
      isLoading: false,
      items: [],
      num: 1
    }

    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState(prevState => {
      return {
        num: prevState.num + 1
      }
    }) 
  }
  componentDidMount() {
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .then(res=>res.json())
  .then(json => {
    this.setState({
      isLoading:true,
      items:json.quotes
    })    
  })  
}  
  render(){
   var {num, items, isLoading} = this.state;
      if (!isLoading){
        return <h1>Loading...</h1>
      }
      return (
        <div id="quote-box" className="center">
          <div id="quote-box" className="box">
          <h2> {items[num].quote} </h2>
          <h5> - {items[num].author} </h5>             
          
          <button id="new-quote" onClick={this.handler} className="cen">
            New Quote
          </button>
          <button id="tweet-quote" className="cen"><a href="https://twitter.com/" target="_blank" rel="nopener" style={{textDecoration:'none', color:'black'}} >Tweet Quote</a></button>
         </div>
        </div>
      )
    }
  }
  
  export default MyApp

 