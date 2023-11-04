import React from 'react';
import Header from '../../components/Header';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';

const validationPost = yup.object().shape({
  titulo: yup.string().required("Preencha o título").max(40, "Até 40 caract."),
  descricao: yup
    .string()
    .required("Preencha a descrição")
    .max(100, "Até 100 caract."),
  conteudo: yup
    .string()
    .required("Preencha o conteúdo")
    .max(300, "Até 300 caract."),
});

export default function Update() {

  let navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors }, reset } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {
    axios.get(`https://6542e20001b5e279de1fb100.mockapi.io/posts/${id}`)
      .then(response => {
        reset(response.data);
      }).catch(() => {
        console.log("Deu errado !");
      });
  }, []);

  const addPost = (data) => {
    axios
      .put(`https://6542e20001b5e279de1fb100.mockapi.io/posts/${id}`, data)
      .then(() => {
        console.log('Deu certo!');
        navigate('/');
      })
      .catch(() => {
        alert('Deu errado!');
      });
  };

  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
          <h1>Criar postagem</h1>
          <hr />
          <div className="card-body-post">
            <form action="#" onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label htmlFor="titulo">Titulo</label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  {...register("titulo")}
                />
                <p className="error-message">{errors.titulo?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="descricao">Descrição</label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  {...register("descricao")}
                />
                <p className="error-message">{errors.descricao?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="conteudo">Conteúdo</label>
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  id="conteudo"
                  {...register("conteudo")}
                ></textarea>
                <p className="error-message">{errors.conteudo?.message}</p>
              </div>

              <div className="btn-post">
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}