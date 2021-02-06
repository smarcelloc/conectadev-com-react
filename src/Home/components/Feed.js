import { makeStyles } from "@material-ui/styles";
import PostCard from '../../components/PostCard';

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Rodrigo Neves',
      username: 'rodneves',
      avatar: '/images/avatars/default.png'
    },
    title: "Criando um App do zero utilizando React.js",
    date: "April 7, 2020",
    description: "Fala pessoal! QUal o framework favorito de vcs?",
    hashtags: ['dotnet', 'javascript', 'reactjs', 'developer'],
    image: "/images/posts/post1.png"
  },
  {
    id: 2,
    author: {
      id: 1,
      name: 'Rodrigo Neves',
      username: 'rodneves',
      avatar: '/images/avatars/default.png'
    },
    title: "Comparativo entre React.js e Vue.js - Performance",
    date: "April 1, 2020",
    description: "Quero criar um bootcamp gratuito para passar um pouco da minha experiência",
    hashtags: ['dotnet', 'javascript', 'reactjs', 'developer'],
    image: '/images/posts/post2.png'

  }
];

const useStyle = makeStyles((theme) => ({
  root: {
  }

}));

function Feed() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;