import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      title,
      id,
      blogs {
        test,
        title,
        body,
        published,
        id,
        slug,
        image{
          url,
          name,
        },
        categories {
          id,
          title,
        },
        authors{
          id,
          name,
          post,
          profilephoto{
            name,
            url,
          },
        }
      }
    }
  }
`

export default function Category() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)


  // return (
  //   <div>
  //     <div className="container my-5">
  //       <div className="row">
  //         <h2>{data.category.title} blogs</h2>
  //         <hr/>
  //         <br/>
  //         <br/>
  //         {data.category.blogs.map(blog => (
  //           <div className="col-4" style={{marginBottom: "80px"}}>
  //           <div key={blog.id} className="blog-card">
  //             <img width={300} height={150} className="h-10 w-10 rounded-full" src={blog.image[0].name} />
  //             <br /><br />
  //             {blog.categories.map(c => (
  //               <small key={c.id}><span style={{ fontSize: "10px", padding: "5px", backgroundColor: "#E2E3E5", borderRadius: "5px", }}>{c.title}</span> </small>
  //             ))}
  //             <div style={{ height: "7px" }}></div>
  //             <p style={{ fontSize: "15px", maxWidth: "300px" }}>{blog.title} <span className="text-muted" style={{ fontSize: "8px"}}>[{blog.published}]</span></p>
  //             <hr width={300} />
  //             <p className="text-muted" style={{ fontSize: "10px", maxWidth: "300px" }}>{blog.body.substring(0, 150)}...<Link to={`/details/${blog.id}`}>Read more</Link></p>

  //             <table align="right">
  //                <tr >
  //                  <td >
  //                  <p className="text-muted" align="right" style={{ fontSize: "11px", width: "200px" }}>{blog.author} Utturwar &nbsp;<br/><span style={{ fontSize: "10px",  }}>Technical Co-head&nbsp;&nbsp;&nbsp;</span></p>   

  //                  </td>
  //                  <td>
  //                  <img style={{ borderRadius: "50%", marginBottom: "20px", marginLeft: "5px", marginRight: "120px"}} height="25px" width="25px" src="https://i.imgur.com/P4d2So0.jpg" />
  //                  </td>
  //                </tr>
  //                </table>  
  //           </div>
  //         </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // )

  const { innerWidth: width, innerHeight: height } = window;

  if (width >= 800) {

    return (
      <div style={{ backgroundColor: "black" }}>

        <div className="container my-5" style={{ backgroundColor: "black" }}>
          <div className="row">
            <h2 style={{ color: "white" }}>{data.category.title} Blogs</h2>
            <hr />
            <br />
            <br />
            {data.category.blogs.slice(0).reverse().map(blog => (
              <div className="col-4" style={{ marginBottom: "80px" }}>
                <div key={blog.id} className="blog-card">

                  <div className="card"
                    style={{ width: "400px", backgroundColor: "#212529", borderStyle: "solid", borderColor: "#8854C8", padding: "0px" }}>
                    <img src={blog.image[0].name} className="card-img-top" alt="cozine"
                      style={{ height: "200px", width: "398px" }} />
                    <div className="card-body">
                      <h2 className="card-title" style={{ color: "#8854C8", fontSize: "17px" }}>{blog.title}</h2>

                      {blog.categories.map(c => (
                        <small key={c.id}><span style={{ color: "white", fontSize: "10px", padding: "3px", backgroundColor: "#868E96", borderRadius: "5px", }}>{c.title}</span> </small>
                      ))}

                      <hr style={{ backgroundColor: "#8854C8", height: "0.1px", width: "70%", opacity: "100%" }} />
                      <p className="card-text text-muted" style={{ fontSize: "13px" }}>
                        {blog.body.substring(0, 150)}...
                      </p>


                      <div className="row">
                        <div className="col-6">
                          <p className="card-text" style={{ marginTop: "5%", fontSize: "12px" }}><small className="text-muted">Published: {blog.published}</small></p>
                        </div>
                        {blog.authors.map(a => (
                        <div className="col-5" style={{ marginTop: "1%" }}>
                          <p align="right" className="text-muted" style={{ marginRight: "20px", fontSize: "10px" }}>{a.name}<br /> {a.post}</p>
                        </div>
                          ))}
                          {blog.authors.map(a => (
                        <div className="col-1">
                          <img src={a.profilephoto[0].name}
                            style={{ borderRadius: "50%", height: "40px", width: "40px", borderStyle: "solid", borderColor: "#8854C8", borderWidth: "1px" }}
                            align="right" />
                        </div>
                         ))}
                      </div>

                      <Link to={`/details/${blog.id}`} className="btn btn-sm hover-up" style={{ backgroundColor: "#8854C8" }} >Check out</Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid">
          <h1 style={{ fontSize: "3.033vw", textAlign: "center", fontFamily: "termina", color: "white" }}><i className="fas fa-phone-alt"
            style={{ color: "#8854C8" }}></i>
            &nbsp;Contact
            us</h1>
          <div style={{ height: "100px" }}></div>
          <div className="row">
            <div className="col-3">
              <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8">
                  <a href="http://www.csirait.com"><img src="../assets/csi-logo.png" className="img-fluid"
                    style={{ height: "200px", width: "200px" }} /></a>
                </div>
                <div className="col-2">
                  <div style={{ height: "250px", borderLeft: "2px solid #8854C8" }}>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">

              <div className="row">
                <div className="col-6">
                  <h2 style={{ color: "#8854C8", fontSize: "20px" }}><i className="fas fa-map-marker-alt"></i> &nbsp;Address</h2>
                  <br />
                  <p style={{ fontSize: "20px", color: "white" }}>
                    3rd Floor,<br />
                    CSI Room,<br />
                    Ramrao Adik Institute Of Technology<br />
                    (RAIT),<br />
                    Nerul, Navi Mumbai. &nbsp;&nbsp;<a style={{ textDecoration: "none" }} className="socialmedia"
                      target="_blank"
                      href="https://www.google.com/maps/place/Ramrao+Adik+Institute+of+Technology/@19.0443898,73.0235066,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c3db00160053:0x95e9ca007676b993!8m2!3d19.0443847!4d73.0257006"><i
                        className="fas fa-external-link-alt"></i></a><br />
                  </p>
                </div>

                <img className="col-6" src="../assets/map.png" style={{ borderRadius: "2vw" }} />

              </div>

            </div>
            <div className="col-3">

              <div className="row">
                <div className="col-2">
                  <div style={{ height: "250px", borderLeft: "2px solid #8854C8", marginLeft: "2.67558vw" }}>

                  </div>
                </div>
                <div className="col-1">

                </div>
                <div className="col-9">

                  <h2 style={{ color: "#8854C8", fontSize: "20px" }}><i className="fas fa-share-alt"></i> &nbsp;Social Media</h2>
                  <br />
                  <a style={{ textDecoration: "none", fontSize: "20px" }} href="https://github.com/csi-rait"
                    target="_blank" className="socialmedia hover-up"><i className="fab fa-github"></i>
                    &nbsp;Github</a><br /><div style={{ height: "10px" }}></div>
                  <a style={{ textDecoration: "none", fontSize: "20px" }}
                    href="https://www.linkedin.com/in/csi-rait/" target="_blank"
                    className="socialmedia hover-up"><i className="fab fa-linkedin-in"></i> &nbsp;Linked
                    In</a><br /><div style={{ height: "10px" }}></div>
                  <a style={{ textDecoration: "none", fontSize: "20px" }}
                    href="https://www.instagram.com/csi.rait/" target="_blank"
                    className="socialmedia hover-up"><i className="fab fa-instagram"></i>
                    &nbsp;&nbsp;Instagram</a><br /><div style={{ height: "10px" }}></div>
                  <a style={{ textDecoration: "none", fontSize: "20px" }}
                    href="https://www.facebook.com/csirait.official/" target="_blank"
                    className="socialmedia"><i className="fab fa-facebook"></i> &nbsp;Facebook</a><br /><div style={{ height: "10px" }}></div>
                  <a style={{ textDecoration: "none", fontSize: "20px" }}
                    href="https://www.facebook.com/csirait.official/" target="_blank"
                    className="socialmedia"><i className="fab fa-discord"></i> &nbsp;Discord</a><br /><div style={{ height: "10px" }}></div>
                </div>

              </div>
            </div>
          </div>


          <div style={{ height: "100px" }}></div>
          <div className="container-fluid bg-dark text-muted" style={{ height: "30px", padding: "3px" }}>
            <p style={{ textAlign: "center", fontSize: "15px" }}><i className="far fa-copyright"
              style={{ color: "#8854C8" }}></i>
              &nbsp;Copyright 2021</p>
          </div>


        </div>

      </div>
    )

  } else {
    return (
      <div>
        <h2 style={{ color: "white", textAlign: "center" }} >{data.category.title} Blogs</h2>
        <hr />
        {data.category.blogs.slice(0).reverse().map(blog => (
          <div className="col" style={{ marginBottom: "50px" }}>


            <div key={blog.id} className="blog-card">

              <div className="card"
                style={{ margin: "auto", width: "260px", backgroundColor: "#212529", borderStyle: "solid", borderColor: "#8854C8", padding: "0px" }}>
                <img src={blog.image[0].name} className="card-img-top" alt="cozine"
                  style={{ height: "130px", width: "259px" }} />
                <div className="card-body">
                  <h2 className="card-title" style={{ color: "#8854C8", fontSize: "15px" }}>{blog.title}</h2>

                  {blog.categories.map(c => (
                    <small key={c.id}><span style={{ color: "white", fontSize: "10px", padding: "3px", backgroundColor: "#868E96", borderRadius: "5px", }}>{c.title}</span> </small>
                  ))}

                  <hr style={{ backgroundColor: "#8854C8", height: "0.1px", width: "70%", opacity: "100%" }} />
                  <p className="card-text text-muted" style={{ fontSize: "11px" }}>
                    {blog.body.substring(0, 150)}...
                  </p>



                  <div className="row">
                    <div className="col-5">
                      <p className="card-text" style={{ marginTop: "5%", fontSize: "10px" }}><small className="text-muted">Published: <br />{blog.published}</small></p>
                    </div>
                    {blog.authors.map(a => (
                    <div className="col-5" style={{ marginTop: "1%" }}>
                      <p align="right" className="text-muted" style={{ marginRight: "0px", fontSize: "8px" }}>{a.name}<br /> {a.post}</p>
                    </div>
                    ))}
                    {blog.authors.map(a => (
                    <div className="col-2">
                      <img src={a.profilephoto[0].name}
                        style={{ borderRadius: "50%", height: "30px", width: "30px", borderStyle: "solid", borderColor: "#8854C8", borderWidth: "1px" }}
                        align="right" />
                    </div>
                     ))}
                  </div>
                  <br />
                  <Link to={`/details/${blog.id}`} className="btn btn-sm hover-up" style={{ backgroundColor: "#8854C8" }} >Check out</Link>
                </div>
              </div>

            </div>
          </div>
        ))}

        <div className="container-fluid">
          <h1 style={{fontSize: "8.033vw", textAlign: "center", color: "white"}}><i className="fas fa-phone-alt"
            style={{color:"#8854C8"}}></i>
            &nbsp;Contact
            us</h1>
          <div style={{height: "40px"}}></div>
          <div className="row">

            <div className="col-12">

              <div className="row" style={{padding: "5px"}}>
                <div className="col-6">
                  <h2 style={{color: "#8854C8", fontSize: "20px"}}><i className="fas fa-map-marker-alt"></i> &nbsp;Address
                  </h2>
                  <br />
                  <p style={{fontSize: "15px", color: "white"}}>
                    3rd Floor,<br />
                    CSI Room,<br />
                    Ramrao Adik Institute Of Technology<br />
                    (RAIT),<br />
                    Nerul, Navi Mumbai. &nbsp;&nbsp;<a style={{textDecoration: "none"}} className="socialmedia"
                      target="_blank"
                      href="https://www.google.com/maps/place/Ramrao+Adik+Institute+of+Technology/@19.0443898,73.0235066,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c3db00160053:0x95e9ca007676b993!8m2!3d19.0443847!4d73.0257006"><i
                        className="fas fa-external-link-alt"></i></a><br />
                  </p>
                </div>
                  <img className="col-6" style={{borderRadius: "1vw"}} src="../assets/map2.png"/>
              </div>

            </div>

          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-5">
              <div className="row">

                <div className="col-2">

                </div>
                <div className="col-9">
                  <a href="http://www.csirait.com"><img src="../assets/csi-logo.png" className="img-fluid"
                    style={{height: "80px", width: "80px"}} /></a>

                </div>
                <div className="col-1">

                </div>


              </div>
            </div>
            <div className="col-2">
              <div style={{height: "180px", borderLeft: "2px solid #8854C8", marginLeft: "25px"}}>

              </div>
            </div>
            <div className="col-5">

              <div className="row">


                <h2 style={{color: "#8854C8", fontSize: "16px"}}><i className="fas fa-share-alt"></i> &nbsp;Social Media</h2>
                <br />
                <a style={{textDecoration: "none", fontSize: "16px"}} href="https://github.com/csi-rait"
                  target="_blank" className="socialmedia hover-up"><i className="fab fa-github"></i>
                  &nbsp;Github</a><div style={{height: "9px"}}></div>
                <a style={{textDecoration: "none", fontSize: "16px"}}
                  href="https://www.linkedin.com/in/csi-rait/" target="_blank"
                  className="socialmedia hover-up"><i className="fab fa-linkedin-in"></i> &nbsp;Linked
                  In</a><div style={{height: "9px"}}></div>
                <a style={{textDecoration: "none", fontSize: "16px"}}
                  href="https://www.instagram.com/csi.rait/" target="_blank"
                  className="socialmedia hover-up"><i className="fab fa-instagram"></i>
                  &nbsp;Instagram</a><div style={{height: "9px"}}></div>
                <a style={{textDecoration: "none", fontSize: "16px"}}
                  href="https://www.facebook.com/csirait.official/" target="_blank" className="socialmedia"><i
                    className="fab fa-facebook"></i> &nbsp;Facebook</a><div style={{height: "9px"}}></div>
                <a style={{textDecoration: "none", fontSize: "16px"}}
                  href="https://www.facebook.com/csirait.official/" target="_blank" className="socialmedia"><i
                    className="fab fa-discord"></i> &nbsp;Discord</a><div style={{height: "9px"}}></div>
              </div>
            </div>
          </div>


          <div style={{height: "100px"}}></div>
          <div className="container-fluid bg-dark text-muted" style={{height: "30px", padding: "3px"}}>
            <p style={{textAlign: "center", fontSize: "15px"}}><i className="far fa-copyright"
              style={{color: "#8854C8"}}></i>
              Copyright 2021</p>
          </div>


        </div>

      </div>
    )
  }


}