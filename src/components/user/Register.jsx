import React from 'react'

export const Register = () => {
  return (
    <>
      <header className="content__header content__header--public">
                <h1 className="content__title">Registro</h1>
                
            </header>

      <div className="content_posts">

          <form className='register-form'>

                <div className='form-group'>
                  <label htmlFor='name'>Nombre</label>
                  <input type='text' name='name'></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='surname'>Apellido</label>
                  <input type='text' name='apellido'></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='nick'>Nick</label>
                  <input type='text' name='nick'></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Correo electronico</label>
                  <input type='email' name='email'></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Contraseña</label>
                  <input type='password' name='password'></input>
                </div>

                <input type='submit' value="Registrate" className='btn btn-success'></input>

          </form>
      </div>
    </>
  )
}
