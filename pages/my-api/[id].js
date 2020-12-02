import Layout from '../../components/layout'
import axios from 'axios'

export default function Post({postData}) {
  console.log(postData,'=========postData');
  return (
    <Layout>
        <h1>{postData.name}</h1>
        <p>ID: {postData.id}</p>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
    console.log(params,'params');
    let postData =  await axios.get(`http://localhost:3000/api/hello/${params.id}`)
    postData = postData.data
    console.log(postData,'============in req postData');
    return {
      props: {
        postData
      }
    }
}