import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const blogS = gql`
  query Getblogs {
    blogs {
      title,
      body,
      author,
      id,
      slug,
      image{
        url,
        name,
      },
      published,
      categories {
        id,
        title
      }
    }
  }
`

export default function Homepage() {
  const { loading, error, data } = useQuery(blogS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      <div className="container my-5">
        <div className="row" >
          {data.blogs.map(blog => (
            <div className="col-4" style={{marginBottom: "80px"}}>
              <div key={blog.id} className="blog-card">
                <img width={300} height={150} className="h-10 w-10 rounded-full" src={blog.image[0].name} />
                <br /><br />
                {blog.categories.map(c => (
                  <small key={c.id}><span style={{ fontSize: "10px", padding: "5px", backgroundColor: "#E2E3E5", borderRadius: "5px", }}>{c.title}</span> </small>
                ))}
                <div style={{ height: "7px" }}></div>
                <p style={{ fontSize: "15px", maxWidth: "300px" }}>{blog.title} <span className="text-muted" style={{ fontSize: "8px"}}>[{blog.published}]</span></p>
                <hr width={300} />
                <p className="text-muted" style={{ fontSize: "10px", maxWidth: "300px" }}>{blog.body.substring(0, 150)}...<Link to={`/details/${blog.id}`}>Read more</Link></p>
              
                <table align="right">
                   <tr >
                     <td >
                     <p className="text-muted" align="right" style={{ fontSize: "11px", width: "200px" }}>{blog.author} Utturwar &nbsp;<br/><span style={{ fontSize: "9px",  }}>Technical Co-head&nbsp;&nbsp;&nbsp;</span></p>   

                     </td>
                     <td>
                     <img style={{ borderRadius: "50%", marginBottom: "20px", marginLeft: "5px", marginRight: "120px"}} height="25px" width="25px" src="https://i.imgur.com/P4d2So0.jpg" />
                     </td>
                   </tr>
                   </table>  
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )


}