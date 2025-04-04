// import React, { useEffect, useState } from 'react';
// import Card from './Card';

// const Newsapp = () => {
//   const [search, setSearch] = useState("india");
//   const [newsData, setNewsData] = useState(null)
//   const API_KEY = "9e9ee4341d24486aba9a89c088d91988";
//   const getData = async () => {
//     const response = await fetch(`https://newsapi.org/v2/everything?q=india&apikey=${API_KEY}`);
//     const jsonData = await response.json();
//     console.log(jsonData.articles);
//     setNewsData(jsonData.articles)
//   }

//   useEffect(()=>{
//     getData()
//   },[])

//   const handleInput = (e) =>{
//     console.log(e.target.value);
//     setSearch(e.target.value)
//   }
//   const userInput = (event) =>{
//     setSearch(event.target.value)
//   }
//   return (
//     <div>
//       <nav>
//         <div>
//           <h1>Trendy news</h1>
//         </div>
//         <ul>
//           <button>All News</button>
//           <button>Trending</button>
//         </ul>
//         <div className="searchBar">
//           <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
//           <button onClick={getData}>Search</button>
//         </div>
//       </nav>
//       <div>
//         <p className="head">Stay Update with TrendyNews</p>
//       </div>

//       <div className="categoryBtn">
//         <button onClick={userInput}value="sports">Sports</button>
//         <button onClick={userInput}value="politics">Politics</button>
//         <button onClick={userInput}value="entertainment">entertainment</button>
//         <button onClick={userInput}value="health">Fitness</button>
//         <button onClick={userInput} value="fitness">fitness</button>
//       </div>
//       <div>
//         {newsData? <card data={newsData}/> :null}
//         <Card data={newsData} />
//       </div>

//     </div>
//   );
// }

// export default Newsapp;


import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,10)
        setNewsData(dt)
        
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>taaza khabar
                  make by MUKUL CHAUHAN
                </h1>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with taaza khabar</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>
    </div>
  )
}

export default Newsapp
