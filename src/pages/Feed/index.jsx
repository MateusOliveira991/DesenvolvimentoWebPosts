import HeaderMain from "../../components/HeaderMain";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6542e20001b5e279de1fb100.mockapi.io/posts")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  function deletePost(id) {
    axios.delete(`https://6542e20001b5e279de1fb100.mockapi.io/posts/${id}`);
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.titulo}</h2>
                </header>
                <div className="line"></div>

                <p>{post.descricao}</p>

                <div className="btns">
                  <div className="btn-edit">
                    <Link to={`/update/${post.id}`}>
                      <button>Editar</button>
                    </Link>
                  </div>

                  <div className="btn-readmore">
                    <Link to={`/more/${post.id}`}>
                      <button>Ler mais</button>
                    </Link>
                  </div>

                  <div className="btn-delete">
                    <button onClick={() => deletePost(post.id)}>Apagar</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
