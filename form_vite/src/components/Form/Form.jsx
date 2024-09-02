import "./form.css";
import imgForm from "../../assets/imgForm.jfif";
import { useState } from "react";

const Form = () => {


  // Define o estado inicial do formulário com campos vazios
  const initialState = {
    userName: "",
    email: "",
    passWord: "",
  };

  // Cria o estado do formulário usando o hook useState
  const [formState, setFormState] = useState(initialState);

  // Função chamada quando o valor de um input muda
  const handleInput = (event) => {
    const target = event.currentTarget;
    const { value, name } = target;
    // Atualiza o estado do formulário com o novo valor do input
    setFormState({ ...formState, [name]: value });
  };

  //Enviow
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    //verifica se algum campo está vazio
    if (
      formState.userName === "" ||
      formState.passWord === "" ||
      formState.email === ""
    ) {
      alert("Preencha os campos!"); 
      return;
    }

    // mostrando os dados no console
    console.log("--------------------------");
    console.log("Dados do Usuario: ");
    console.log(formState.userName, formState.email, formState.passWord);

    // muda os campos dos formularios para o estaado inicial
    setFormState({ ...initialState });
  };





  return (
    <div>
      <div className="form-controll">
        <img src={imgForm} alt="" className="imgForm" />

        <form onSubmit={handleSubmit} className="form">
          <h1>Register</h1>

          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            placeholder="User Name"
            id="userName"
            name="userName"
            value={formState.userName}
            onChange={handleInput}
          />

          <label htmlFor="email">Email: </label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInput}
          />

          <label htmlFor="passWord">PassWord: </label>
          <input
            type="password"
            placeholder="PassWord"
            id="passWord"
            name="passWord"
            value={formState.passWord}
            onChange={handleInput}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
export default Form;
