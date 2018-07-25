import React from 'react'
import Link from 'gatsby-link'
import Media from 'react-media'



const Header = () => (
  <div
    style={{
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
     
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        background: '#6F9FD8',
      }}
   >
   
     <h1 style={{margin: 0, textAlign: 'left',fontSize: '18px', background: '#6F9FD8',
     }}>
        <Link to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>

        <Link to="/About-me"
          style={{
            color: 'black',
            textDecoration: 'none',
            padding: '1.45rem 1.0875rem',
          }}
        >
          About
        </Link>
      </h1>
    </div>
  </div>
);

//Might be  seperate component
const Sidebar = (props) => (
  <div
      style={{
        border: '2px solid #FFFFFF',
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px'
      }}
      >
      <strong>{props.title}.</strong> {props.description}
  </div>
  );

  const TemplateWrapper = ({ children }) => (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 980,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "100%"
        }}
      >
        <Media query={{ maxWidth: 848 }}>
          {matches =>
            matches ? (
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: 980,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "25px"
                }}
              >
                <div style={{ flex: 1 }}>{children()}</div>
              </div>
            ) : (
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: 980,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "25px"
                }}
              >
                <div style={{ flex: 2.5, paddingRight: "30px" }}>
                  {children()}
                </div>
  <div style={{ flex: 1 }}>
                  <Sidebar
                    title="Joshua Huie"
                    description="Articles on React and Node.js. All articles are written by Me. Fullstack Web Development."
                  />
                  <Sidebar
                    title="About author"
                    description="I am a Full-stack Web Developer specializing in React and Node.js based in Nigeria."
                  />
                </div>
              </div>
            )
          }
        </Media>
      </div>
    </div>
  );
  export default Header 
/*
import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
*/