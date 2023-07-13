//Home page

import { useEffect, useState } from "react"
import { Card } from "../components/Card";

export const Home = () => {

  const [data, setData] = useState([]);              //to store data fetched from API
  const [searchData, setSearchData] = useState([]);  // to filter searched name's data
  const [show, setShow] = useState(true);            //to toggle between list of all profile and searched profile
  const [msg, setMsg] = useState("");                //msg when data is not fetched or searched


  //calling API and getting data whenever page is rendered
  useEffect(() => {
    async function getData() {

      try {
        const res = await fetch("https://reqres.in/api/users?page=2");  //call API
        const ans = await res.json();
        setData(ans.data);      //Store data in state
      }
      catch (error) {
        setMsg(error);  //error when API call cannot be accomplished
      }

    }

    getData();
  }, [])


  //Search when anythind entered in textbox
  function handleSubmit(e) {

    e.preventDefault(); //prevent form to reload

    //filter profile from data state whose first name matches given input
    const searched = data.filter((profile) => (profile.first_name.toUpperCase() === e.target.search.value.toUpperCase()));

    //if found
    if (searched.length !== 0) {
      setMsg("");
      setSearchData(searched[0]);
      setShow(false)
    }
    //not found
    else {
      setMsg("Can not found !!!");
      setSearchData([]);
      setShow(true);
    }
  }


  //Clear search box and back to initial data
  function handleClear() {
    document.getElementById('search').value = "";
    setSearchData([]);
    setMsg("");
    setShow(true);
  }


  return (

    <main className="md:m-24 m-10 my-24 md:px-36 min-h-full">

      {/* searching box and clear button  */}
      <div className="text-center my-5 md:w-96 m-auto">

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 justify-center">
          <input className="rounded-lg text-lg p-1 w-64  border-2 outline-none" type="text" name="search" id="search" autoComplete="off" required />
          <button className="bg-blue-500 p-2 rounded-lg text-base text-white font-semibold">Search</button>
        </form>

        <button onClick={handleClear} className="bg-red-500 py-2 px-4 rounded-lg text-base text-white font-semibold my-2">Clear</button>

      </div>

      {/* display msg div only when msg state contain some text  */}
      <div className="text-center text-xl font-bold">
        {msg && <div>{msg}</div>}
      </div>

      {/* display after data is fetched from API and stored in data state */}
      <div className={`flex flex-wrap md:gap-5 gap-10 md:p-10 p-5 justify-evenly ${!show && "hidden"}`}>
        {data && data.map((profile) => (<Card key={profile.id} profile={profile} />))}
      </div>

      {/* display when searched value is found  */}
      <div className={`flex flex-wrap md:gap-5 gap-10 md:p-10 p-5 justify-evenly ${show && "hidden"}`}>
        {searchData && <Card profile={searchData} />}
      </div>
    </main>

  )
}
