import React,{useState,useEffect} from 'react'
import axios from "axios";

const Fetchdata = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://newsdata.io/api/1/news?apikey=pub_56529ea898b5186f70d12d790ad204d74824&q=blockchain AND cryptocurrency').then((res) => {
            console.log(res)
            const finalData = res.data.results;
            setPosts(finalData);
        }).catch((err) => {
            console.log(err)
        });
    },[])

    return (
        <div>   
            <ul>   
              {posts.map(post => (
              <li key={post.id}>{post.title} </li>
          ))}
          </ul>
        </div>

    )
}

export default Fetchdata
