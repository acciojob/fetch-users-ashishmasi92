import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  let [data, setData] = useState(null)
  let [flag, setFlag] = useState(false)

  console.log(data);

  async function fetchData() {

    let response = await fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    })
    let data = await response.json()
    setData(data.data)



  }



  useEffect(() => {
if(flag){
  fetchData()

}


  }, [flag])



  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Blue Whales</h2>
        <button className="btn" onClick={() => {
          setFlag((prev) => !prev)
        }} style={{ height: "30px", backgroundColor: "goldenrod", border: "none" }}>Get User list</button>
      </div>
      <div style={{ width: "100%" }}>
        <table  style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>

            <tr  style={{ backgroundColor: "black", color: "white", border: "2px solid black" }}  >
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody style={{ width: "100%" }}>

            {flag ?

              data && data.map((v,i) => {
                return <tr key={i} style={{ border: "1px solid black", textAlign: "center" }}>
                  <td>{v.first_name}</td>
                  <td>{v.last_name}</td>
                  <td>{v.email}</td>
                  <td><img src={v.avatar} width="50" /></td>
                </tr>
              })
              
              :
              (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>No data found</td>
                </tr>
              )}

            </tbody>

        </table>
      </div>
    </div>
  )
}

export default App
