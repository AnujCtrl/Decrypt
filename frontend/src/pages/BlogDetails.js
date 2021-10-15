import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const BLOGDETAILS = gql`
  query Getblog($id: ID!) {
    blog(id: $id) {
      title,
      body,
      published,
      id,
      slug  ,
      image{
        url,
        name,
      },
      categories {
        title,
        id,
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
`

export default function BlogDetails() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(BLOGDETAILS, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>
  console.log(error)
  console.log(data)

  const { innerWidth: width, innerHeight: height } = window;

  if (width >= 800) {
    return (
      <div className="blog-card">

        <div className="container" style={{ backgroundColor: "#212529", borderRadius: "2vw", marginBottom: "50px" }}>

          <div className="row align-items-center" style={{ padding: "20px" }}>
            <div className="col-6">
              <img src={data.blog.image[0].name} width={600} height={300} style={{ borderRadius: "2vw" }} />
            </div>
            <div className="col-6">
              {data.blog.categories.map(c => (
                <small key={c.id}><span style={{ color: "white", fontSize: "15px", padding: "3px", backgroundColor: "#868E96", borderRadius: "5px", }}>{c.title}</span> &nbsp;</small>
              ))}
              <br /><br />
              <h1 style={{ color: "#8854C8" }}>{data.blog.title}</h1>
              <hr style={{ backgroundColor: "white" }} />
              <div className="row">
                <div className="col-6">
                  <p className="card-text" style={{ marginTop: "5%", fontSize: "12px" }}><small className="text-muted">Published: {data.blog.published}</small></p>
                </div>
                {data.blog.authors.map(a => (
                <div className="col-5" style={{ marginTop: "1%" }}>
                  <p align="right" className="text-muted" style={{ marginRight: "20px", fontSize: "10px" }}>{a.name}<br /> {a.post}</p>
                </div>
                   ))}
                   {data.blog.authors.map(a => (
                <div className="col-1">
                  <img src={a.profilephoto[0].name}
                    style={{ borderRadius: "50%", height: "40px", width: "40px", borderStyle: "solid", borderColor: "#8854C8", borderWidth: "1px" }}
                    align="right" />
                </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row text-light" style={{ padding: "40px", fontSize: "20px" }}>
            <ReactMarkdown>{data.blog.body}</ReactMarkdown>

          </div>

        </div>

        {/* <div className="">{data.blog.author}</div>
      <img width={600} height={300} className="h-10 w-10 rounded-full" src={data.blog.image[0].name}   />
      <h2>{data.blog.published}</h2>
      <h2>{data.blog.title}</h2>

      {data.blog.categories.map(c => (
        <small key={c.id}>{c.title}</small>
      ))}

      <ReactMarkdown>{data.blog.body}</ReactMarkdown> */}
      </div>
    )
  } else {
    return (

      <div className="blog-card">

        <div className="card"
          style={{ margin: "auto", width: "325px", backgroundColor: "#212529", borderStyle: "solid", borderColor: "#8854C8", padding: "0px" }}>
          <img src={data.blog.image[0].name} className="card-img-top" alt="cozine"
            style={{ height: "162.5px", width: "324px" }} />
          <div className="card-body">
            <h2 className="card-title" style={{ color: "#8854C8", fontSize: "15px" }}>{data.blog.title} </h2>
            {data.blog.categories.map(c => (
              <small key={c.id}><span style={{ color: "white", fontSize: "8px", padding: "3px", backgroundColor: "#868E96", borderRadius: "5px", }}>{c.title}</span> </small>
            ))}
           
            <hr style={{ backgroundColor: "#8854C8", height: "0.1px", width: "70%", opacity: "100%" }} />

            <div className="row">
              <div className="col-6">
                <p className="card-text" style={{ marginTop: "5%", fontSize: "10px" }}><small className="text-muted">Published: <br />{data.blog.published}</small></p>
              </div>
              {data.blog.authors.map(a => (
              <div className="col-4" style={{ marginTop: "1%" }}>
                <p align="right" className="text-muted" style={{ marginRight: "0px", fontSize: "8px" }}>{a.name}<br /> {a.post}</p>
              </div>
               ))}
               {data.blog.authors.map(a => (
              <div className="col-2">
                <img src={a.profilephoto[0].name}
                  style={{ borderRadius: "50%", height: "30px", width: "30px", borderStyle: "solid", borderColor: "#8854C8", borderWidth: "1px" }}
                  align="right" />
              </div>
               ))}
            </div>

              <br/>

            <p className="card-text" style={{ fontSize: "15px", color: "white" }}>
              {data.blog.body}
            </p>



            
            <br />
            {/* <Link to={`/details/${data.blog.id}`} className="btn btn-sm hover-up" style={{ backgroundColor: "#8854C8" }} >Check out</Link> */}
          </div>
        </div>

        {/* <div className="">{data.blog.author}</div>
        <img width={600} height={300} className="h-10 w-10 rounded-full" src={data.blog.image[0].name}   />
        <h2>{data.blog.published}</h2>
        <h2>{data.blog.title}</h2>
  
        {data.blog.categories.map(c => (
          <small key={c.id}>{c.title}</small>
        ))}
  
        <ReactMarkdown>{data.blog.body}</ReactMarkdown> */}
      </div>

    )
  }
}