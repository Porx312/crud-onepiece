import { useState,useEffect } from 'react';

const initialState = {
  id: null,
  name: "",
  recompensa: "",
  image: "",
}
// eslint-disable-next-line react/prop-types
export default function CrudForm({editToData,setEditToData,createData}) {
  const [form,setForm] = useState(initialState);
  useEffect(()=>{
    if(editToData){
      setForm(editToData);
    }else{
      setForm(initialState);
    }
  },[editToData])
  function handleChange(e){
      setForm({
      ...form,
      [e.target.name]: e.target.value
      })
  }
  function handleSubmit(e){
      e.preventDefault()
      if(!editToData){
        createData(form)
      }
  }
  function handleReset(){
    setEditToData(initialState)
    setForm(initialState)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input className="input" type="text" name='name' placeholder="Nombre" value={form.name} onChange={handleChange}/>
    <input className="input" type="text" name='recompensa' placeholder="recompensa"  value={form.recompensa} onChange={handleChange}/>
    <input className="input" type="text" name='image' placeholder="imagen-link"  value={form.image} onChange={handleChange}/>
    <input className='submit' type="submit" value="enviar" />
    <input className='submit' type="reset" value="limpiar" onClick={handleReset} />
    </form>
    </>
    )
}