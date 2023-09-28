import React from 'react'
import { useState, useEffect, useRef } from 'react'
import styles from "./Register.module.css";



const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [datanascimento, setdatanascimento] = useState("")
  const [genero, setGenero] = useState("")
  const [cpf, setCpf] = useState("") 
  const [rgrne, setRG] = useState("")
  const [unidade, setUnidade] = useState("")
  const [tipo, setTipo] = useState("")
  const [anoIngresso, setAnoIngresso] = useState("")
  const [anoEgresso, setAnoEgresso] = useState("")
  
  const [error, setError] = useState("")



 

  //const { createUser, error: authError, loading } = useAuthentication();
  const allFormRef = useRef(null);


  const handleScrollToForm = () => {
    allFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    

    const user = {
      displayName, sobrenome, email, datanascimento, genero,  cpf,
      rgrne,unidade,tipo,anoEgresso,anoIngresso
      
    }    

    //const res = await createUser(user)
    console.log(user)
  };

  
  return (


    <div className={styles.register}>
      <div className={styles.space}></div>
      <div class={styles.imgformatura}>
      <img src='formatura.png' alt="Logo" />
        <div class={styles.text}>
          <h1>Estamos construindo o Portal de Egressos da UNIFESP</h1>
          <h3>O primeiro passo é se cadastrar na plataforma:</h3>
          <button class={styles.textbtn} onClick={handleScrollToForm}>Cadastre-se aqui</button>
        </div>
      </div>
      <div className={styles.ferramentas}>
        <h1>Futuras Ferramentas e Vantagens</h1>
        <div className={styles.ferramentaslist}>
          <div className={styles.icons}>

            <img src="icon1.png" alt="Ícone 1" />

            <p>Tudo em um só lugar</p>
          </div>
          <div className={styles.icons}>

            <img src="icon2.png" alt="Ícone 2" />

            <p>Oportunidades de Emprego</p>
          </div>
          <div className={styles.icons}>

            <img src="icon3.png" alt="Ícone 3" />

            <p>Acesso a biblioteca</p>
          </div>
          <div className={styles.icons}>

            <img src="icon4.png" alt="Ícone 4" />

            <p>Atualizações</p>
          </div>
          <div className={styles.icons}>

            <img src="icon5.png" alt="Ícone 5" />

            <p>Encontre colegas de turma</p>
          </div>
        </div>
        <p>E muito mais...</p>
      </div>

      <div className={styles.allform} ref={allFormRef}>
        <h1>Cadastro</h1>
        <p>Crie seu usuário para prosseguir</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input
              type='text'
              name='displayName'
              required
              placeholder='Nome do usuário'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>Sobrenome: </span>
            <input
              type='text'
              name='displayName'
              required
              placeholder='Sobrenome'
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </label>
          <label>
            <span>E-mail Institucional: </span>
            <input
              type='email'
              name='email'
              required
              placeholder='E-mail do usuário'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>Data de Nascimento: </span>
            <input
              type='text'
              name='data'
              required
              placeholder='Data de Nascimento'
              value={datanascimento}
              onChange={(e) => setdatanascimento(e.target.value)}
            />
          </label>

          <label>
            <span>Gênero: </span>
            <input
              type='text'
              name='text'
              required
              placeholder='Gênero'
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </label>
          <label>
            <span>CPF: </span>
            <input
              type='number'
              name='number'
              required
              placeholder='CPF'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </label>
          <label>
            <span>RG ou RNE: </span>
            <input
              type='number'
              name='number'
              required
              placeholder='RG ou RNE'
              value={rgrne}
              onChange={(e) => setRG(e.target.value)}
            />
          </label>

          <h3>Qual foi sua ultima formação na UNIFESP?</h3>

          <label>
            <span>Unidade: </span>
            <input
              type='text'
              name='text'
              required
              placeholder=''
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
            />
          </label>

          <label>
            <span>Tipo: </span>
            <input
              type='text'
              name='text'
              required
              placeholder=''
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
          </label>

          <label>
            <span>Ano de Ingresso: </span>
            <input
              type='number'
              name='number'
              required
              placeholder=''
              value={anoIngresso}
              onChange={(e) => setAnoIngresso(e.target.value)}
            />
          </label>

          <label>
            <span>Ano de Egresso: </span>
            <input
              type='number'
              name='number'
              required
              placeholder=''
              value={anoEgresso}
              onChange={(e) => setAnoEgresso(e.target.value)}
            />
          </label>
         <button className="btn" >Cadastrar</button>
          {/* {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}  */}
          {error && <p className="error">{error}</p>}
        </form></div>
    </div>
  )
}

export default Register