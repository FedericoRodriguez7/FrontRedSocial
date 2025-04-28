import React from 'react'
import { useForm } from '../hooks/useForm'

export const Register = () => {

  const { form, changed } = useForm({});

  const saveUser = (e) => {
    e.preventDefault();
    
    let newUser = form;
    console.log(newUser);
  }



  return (
    <>
      <header className="content__header content__header--public">
                <h1 className="content__title">Registro</h1>
                
            </header>

      <div className="content_posts">

          <form className='register-form' onSubmit={saveUser}>

                <div className='form-group'>
                  <label htmlFor='name'>Nombre</label>
                  <input type='text' name='name' onChange={changed}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='surname'>Apellido</label>
                  <input type='text' name='apellido' onChange={changed}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='nick'>Nick</label>
                  <input type='text' name='nick' onChange={changed}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Correo electronico</label>
                  <input type='email' name='email' onChange={changed}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Contraseña</label>
                  <input type='password' name='password' onChange={changed}></input>
                </div>

                <input type='submit' value="Registrate" className='btn btn-success'></input>

          </form>
      </div>
    </>
  )
}
