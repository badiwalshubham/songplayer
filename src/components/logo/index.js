// "use client"
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from 'next/image'

// const Logo = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "favicon.png" }) {
//         childImageSharp {
//           fixed(width: 72, height: 72, quality: 100) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Image
//       fixed={data.placeholderImage.childImageSharp.fixed}
//       objectFit="cover"
//     />
//   )
// }

// export default Logo
