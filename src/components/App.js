
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  let [data, setData] = useState(null)
  let [flag, setFlag] = useState(false)

  console.log(data);

  async function fetchData() {

    let response = await fetch("	https://reqres.in/api/users", {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    })
    let data = await response.json()
    setData(data.data)



  }



  useEffect(() => {

    fetchData()


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
        <table style={{ display: "flex", justifyContent: "space-between", width: "100%", flexDirection: "column", alignItems: "center" }}>
          <thead style={{ width: "100%", display: "flex", justifyContent: "space-between", }}  >

            <tr style={{ backgroundColor: "black", color: "white", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", border: "2px solid black" }}  >
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody style={{ width: "100%" }}>

            {flag ?

              data && data.map((v) => {
                return <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", border: "2px solid black" }} >
                  <td>{v.first_name}</td>
                  <td>{v.last_name}</td>
                  <td>{v.email}</td>
                  <td><img src={v.avatar} /></td>
                </tr>
              })

              :
              <h2 style={{textAlign:"center"}}>NO DATA FOUND</h2>
            }


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
