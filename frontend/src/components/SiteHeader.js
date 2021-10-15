import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'



const CATEGORIES = gql`
  query GetCategories {
    categories {
      title,
      id
    }
  }
`

export default function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) return <p>Loading categories...</p>
  if (error) return <p>Error fetching categories</p>


  const { innerWidth: width, innerHeight: height } = window;

  if (width >= 800) {

    return (

      <div className="site-header">
        
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ margin: "0px", backgroundColor: "black" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="../assets/decrypt-logo-5.png" alt="CSI"
                style={{ height: "58px", width: "197.8px", margin: "8px" }}
                className="d-inline-block align-text-top logox" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ marginRight: "15px", fontSize: "20px" }}>
                  <a className="nav-link active  hover-up" aria-current="page" href="../home.html"
                    style={{ fontSize: "18px", fontWeight: "300" }}>Home</a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300" }}>
                  <a className="nav-link active" aria-current="page" href="../members.html">Members</a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300", textUnderlineOffset: "10px", }}>
                  <a className="nav-link active glow" aria-current="page" href="../category/1"><u>Blogs</u></a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300" }}>
                  <a className="nav-link active" aria-current="page" href="../magazines.html">Magazines</a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300" }}>
                  <a className="nav-link active" aria-current="page"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfNJOPOzVSevs6ANqISHJ0XcFHQRt1DiYknA0kHTTba2VaNIA/viewform">Write</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>

        <div class="container-fluid banner2" style={{ padding: "20px" }}>

          <div class="row">
            <div style={{ height: "100px" }}></div>
            <div class="col-10" style={{ marginTop: "10%" }}>
              <h1 style={{ fontSize: "9.033vw", fontFamily: "termina", color: "white" }}>Blogs</h1>
            </div>
            <div style={{ height: "100px" }}></div>

          </div>


        </div>

        <div className="row" style={{ padding: "20px", marginTop: "3  0px" }}>

          <div className="container row justify-content-md-center">

            {data.categories.map(category => (
              <Link className="btn-lg hover-up" style={{ marginRight: "25px", marginBottom: "10px", textAlign: "center", textDecoration: "none", backgroundColor: "#8854C8", color: "white", fontSize: "17px", borderRadius: "2vw", border: "none", width: "auto", minWidth: "120px" }} key={category.id} to={`/category/${category.id}`}>
                {category.title + " " + " "}
              </Link>

            ))}

          </div>

        </div>

        <hr style={{ backgroundColor: "white" }} />


        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.imgur.com/WIqGnJs.png"  alt="" width="30" height="30" className="d-inline-block align-text-top " />
            &nbsp; Decrypt
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {data.categories.map(category => (
                <Link className="nav-link active" aria-current="page" href="#" key={category.id} to={`/category/${category.id}`}>
                  {category.title + " " + " "}
                </Link>
              ))}

              <a href="../members .html" className="btn btn-primary">button</a>
            </ul>

          </div>
        </div>
      </nav> */}



      </div>
    )

  } else {

    return (

      <div className="site-header">
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ margin: "0px", backgroundColor: "black"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="../assets/decrypt-logo-5.png" alt="CSI"
                style={{ height: "38.666px", width: "131.866px", margin: "8px" }}
                className="d-inline-block align-text-top logox" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{backgroundColor: "#212529", padding: "10px", borderRadius: "4vw"}}>
                <li className="nav-item" style={{ marginRight: "15px", fontSize: "20px" }}>
                  <a className="nav-link active  hover-up" aria-current="page" href="../home.html"
                    style={{ fontSize: "18px", fontWeight: "300" }}>Home</a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300" }}>
                  <a className="nav-link active" aria-current="page" href="../members.html">Members</a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300", textUnderlineOffset: "10px", }}>
                  <a className="nav-link active glow" aria-current="page" href="../category/1"><u>Blogs</u></a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300" }}>
                  <a className="nav-link active" aria-current="page" href="../magazines.html">Magazines</a>
                </li>
                <li className="nav-item hover-up"
                  style={{ marginRight: "15px", fontSize: "18px", fontWeight: "300" }}>
                  <a className="nav-link active" aria-current="page"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfNJOPOzVSevs6ANqISHJ0XcFHQRt1DiYknA0kHTTba2VaNIA/viewform">Write</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>

        <div class="container-fluid  banner2" style={{ padding: "20px"}}>
          
          <div class="row">
            <div style={{ height: "100px" }}></div>
            <div class="col-10" style={{ marginTop: "10%" }}>
              <h1 style={{ fontSize: "9.033vw", fontFamily: "termina", color: "white" }}>Blogs</h1>
            </div>
            {/* <div style={{ height: "250px" }}></div> */}

          </div>


        </div>

        <div className="row" style={{ padding: "20px", marginTop: "50px" }}>

          <div className="container row justify-content-md-center">

            {data.categories.map(category => (
              <Link className="btn-lg hover-up col" style={{ marginRight: "10px", marginBottom: "10px", textAlign: "center", textDecoration: "none", backgroundColor: "#8854C8", color: "white", fontSize: "9px", borderRadius: "5vw", border: "none", width: "auto", height: "auto", minWidth: "60px", padding: "5px" }} key={category.id} to={`/category/${category.id}`}>
                {category.title + " " + " "}
              </Link>

            ))}

          </div>

        </div>

        <hr style={{ backgroundColor: "white" }} />


        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.imgur.com/WIqGnJs.png"  alt="" width="30" height="30" className="d-inline-block align-text-top " />
            &nbsp; Decrypt
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {data.categories.map(category => (
                <Link className="nav-link active" aria-current="page" href="#" key={category.id} to={`/category/${category.id}`}>
                  {category.title + " " + " "}
                </Link>
              ))}

              <a href="../members .html" className="btn btn-primary">button</a>
            </ul>

          </div>
        </div>
      </nav> */}



      </div>
    )

  }
}