import React, { useState } from 'react'
import useAuth from '../hooks/useAuth';
import { Global } from '../helpers/Global';
import { SerializeForm } from '../helpers/SerializeForm';

export const Config = () => {

    const {auth, setAuth} = useAuth();
    const [saved, setSaved] = useState("not-saved");

    const updateUser = async(e) => {
        e.preventDefault();

        //token de autentificacion
        const token = localStorage.getItem("token");

        //recoger datos del formulario
      let newDataUser = SerializeForm(e.target)
      delete newDataUser.file0;

      //actualizar usuario en base de datos
      const request = await fetch(Global.url + "user/update", {
        method: "PUT",
        body: JSON.stringify(newDataUser),
        headers: {
            "Content-type": "application/json",
            "Authorization": localStorage.getItem("token")
        }
      }

      )
      const data = await request.json();

      if(data.status == "success"){
        delete data.user.password 
        setAuth(data.user)
        setSaved("saved")
      }else{
        setSaved("error")
      }


      //subida de imagesnes

      const fileInput = document.querySelector("#file");

      if(data.status == "success" && fileInput.files[0]){

        //recoger imagen a subir
        const formData = new FormData();
        formData.append('file0', fileInput.files[0]);
      

        //peticion para enviar el fichero

        const uploadRequest = await fetch(Global.url + "user/upload", {
          method: "POST",
          body: formData,
          headers: {
            "Authorization": token,

          }
        });
        const uploadData = await uploadRequest.json();

        if (uploadData.status === "success" && uploadData.user) {
          delete uploadData.user.password;
          setAuth(uploadData.user);
          setSaved("saved");
        } else {
          setSaved("error");
        }

      }

    }



  return (
    <>
    <header className="content__header content__header--public">
                <h1 className="content__title">Ajustes</h1>
                
            </header>

            <div className='content__posts'>
            {saved == "saved" ?
        <strong className='alert alert-success'> Usuario actualizado correctamente !! </strong>
        : ''}

        {saved == "error" ?
        <strong className='alert alert-danger'> El usuario no se ha podido actualizar !!</strong>
        : ''}

          <form className='config-form' onSubmit={updateUser}>

                <div className='form-group'>
                  <label htmlFor='name'>Nombre</label>
                  <input type='text' name='name' defaultValue={auth.name}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='surname'>Apellido</label>
                  <input type='text' name='apellido' defaultValue={auth.surname}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='nick'>Nick</label>
                  <input type='text' name='nick' defaultValue={auth.nick}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='bio'>Bio</label>
                  <textarea name='bio' defaultValue={auth.bio}></textarea>
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Correo electronico</label>
                  <input type='email' name='email' defaultValue={auth.email}></input>
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Contraseña</label>
                  <input type='password' name='password' ></input>
                </div>

                <div className='form-group'>
                    <label htmlFor="file0">Avatar</label>
                     {auth.image != "default.png" &&  <img src={Global.url + "user/avatar/" + auth.image} className="container-avatar__img" alt="Foto de perfil" />}
                     {auth.image == "default.png" &&  <img src={avatar} className="container-avatar__img" alt="Foto de perfil" />}

                              <br />                 
                    <input type="file" name='file0' id='file' />

                </div>
                <br />
                <input type='submit' value="Actualizar" className='btn btn-success'></input>


          </form>
          <br />
            </div>
    
    
    </>
  )
}
