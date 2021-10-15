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

export default function LatestFour() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  const { innerWidth: width, innerHeight: height } = window;

  if (width >= 800) {

    return (
      <div style={{ backgroundColor: "black"}}>

        <div className="container my-5" style={{ backgroundColor: "black" }}>
          <div className="row">
            
            {data.category.blogs.slice(-4).reverse().map(blog => (
              <div className="col-6" style={{ marginBottom: "80px"}}>
                <div key={blog.id} className="blog-card">

                  <div className="card" 
                    style={{ margin: "auto", width: "600px", backgroundColor: "#212529", borderStyle: "solid", borderColor: "#8854C8", padding: "0px" }}>
                    <img src={blog.image[0].name} className="card-img-top" alt="cozine"
                      style={{ height: "300px", width: "598px" }} />
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
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        

      </div>
    )

  } else {
    return (
      <div>
        
        {data.category.blogs.slice(-4).reverse().map(blog => (
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

        

      </div>
    )
  }


}