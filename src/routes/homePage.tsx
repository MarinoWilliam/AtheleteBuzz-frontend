import React, { useEffect, useState } from 'react';
import axios from '../utils/api';
import { Post } from '../types';
import Spinner from '../components/spinner/spinner.component';
import TopNavbar from '../components/topNavbar/topNavbar';


const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      } catch (err) {
        console.log(err)
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='p-0'>
      <TopNavbar/>
      <h1 className="text-3xl font-bold text-blue-500">Home Page</h1>
      {loading ? (
        <Spinner/>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <button onClick={() => {/* Navigate to create post page */}}>
            Create New Post
          </button>
          <ul>
            {posts.map(post => (
              <li key={post._id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <button onClick={() => {/* Navigate to post details page */}}>
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
