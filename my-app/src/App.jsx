
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react'

export default function Main() {
  console.log("here\n");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/test/');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("error fetching data:",error);
      }
      };
    fetchData();
  }, [])
  return (
    <div>
      <h1>Data from API:</h1>
      {/* ❌ No checking, this may throw an error if `message` is undefined */}
      <h1>{data.message}</h1>
    </div>
  );

  // return (
  //   <Fragment >
  //     {/* <div className='welcome'> */}
  //     <h1 className='welcome'> choose </h1>
  //     {/* </div> */}
  //     <button className='signupOption'>
  //       <h1>Sign up</h1>
  //     </button>
  //     <button className='signinOption'>
  //       <h1>Sign in</h1>
  //     </button>
  //   </Fragment>
  // );
}


