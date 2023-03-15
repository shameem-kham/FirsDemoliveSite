import { useState } from 'react';
import './App.css';  // import css file
// import FirstPage from './FirstPage'; // child comp
// import SecondPage from './SecondPage'; // child comp
// import Class_compo from './component/Class_compo';
// import ClassCompo from './component/ClassCompo';
// import ComponentWillMount from './component/ComponentWillMount';
import ApiIntegration from './component/ApiIntegration'
function App() {
  // const[showFirstPage,setShowFirstPage] = useState(false);
  // const[showSecondPage,setShowSecondPage] = useState(false);


  // const userDetails = {
  //   name:'onkar',
  //   city:'pune'
  // };
  // const country = 'India';

  // const className = 'edyoda';

  // const openFstPage = () =>{
  //   setShowFirstPage(true);
  // };

  // const openSndPage = () =>{
  //   setShowSecondPage(true);
  // }
 
  // return (
  //   <>
  //   <div>
  //     <button onClick={openFstPage}>Call First Page</button>
  //     <button onClick={openSndPage}>Call Second Page</button>

  //    </div>
  //   {showFirstPage && <FirstPage 
  //     data ={userDetails}
  //     countryDetails = {country}
  //   />}

  //   {showSecondPage && <SecondPage
  //   classData = {className}
  //   />

  //   }
    //  </>
  // );

  // const[data , setData] = useState('');
  // const[city , setCity] = useState('');

  // const getData =(e)=>{

  //    console.log("e", e.target.id)
  //    if(e.target.id ==='name'){

  //      setData(e.target.value)
  //    }
  //    if(e.target.id === 'city'){
          
  //        setCity(e.target.value)
  //    }
  // }


  return(
    <>
   <div>
   
   <ApiIntegration/>
   </div>
    </>
  );
  

}
export default App;