import React from 'react'
import './styles/main.css';
import * as Label from '@radix-ui/react-label'
import Input from './Components/Forms/Input';
import useLocalStorage from './Hook/useLocalStorage'

function App() {
  const [country, setCountry] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [cadastro, setCadastro] = useLocalStorage('Cadastro', '');
  const [selected, setSelected] = React.useState("");
  
  function changeSelectOption(event){
    setSelected(event.target.value);
  }

  function saveForm(){
    if (localStorage.cont) {
       localStorage.cont = Number(localStorage.cont)+1;
    } else {
       localStorage.cont = 1;
    }
    
    let cad = document.getElementsByName('paises').value + ';' + document.getElementsByName('cidades').value;
    localStorage.setItem("cad_"+localStorage.cont,cad);
 }
  function handleClick(event){
    saveForm();
    setCadastro(event.innerText);
  }


  React.useEffect( () => {
    fetch('https://amazon-api.sellead.com/country')
    .then((response) => response.json())
    .then((json) => setCountry(json));

    fetch('https://amazon-api.sellead.com/city')
    .then((response) => response.json())
    .then((json) => setCity(json));
  })

  if(country && city)
    return (
    <div className="max-w-lg max-h-[120] p-6 relative mx-auto my-20 items-center bg-zinc-700 rounded-md">
      <div className="mx-auto">
        <h2 className="text-white text-4xl font-semibold text-center">Ally Destino | Cadastro</h2>
        <div className="text-white">
          <form className="mt-8 flex flex-col gap-4">
            <div className='flex flex-col gap-2'>
              <Label.Root htmlFor='Nome'>Nome do usuário</Label.Root>
              <Input 
                id="nome" 
                name="nome"
                placeholder="Seu nome completo"/>
            </div>
            <div className="flex flex-col gap-2">
              <Label.Root htmlFor='email'>Email</Label.Root>
              <Input 
                id="email" 
                name="email" 
                placeholder="usario123@meuhost.com"/>
            </div>
          
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label.Root htmlFor="cpf">CPF</Label.Root>
                <Input 
                  id="cpf" 
                  name="cpf"  
                  placeholder="xxx.xxx.xx-xx"></Input>
              </div>

              <div className="flex flex-col gap-2">
                <Label.Root htmlFor="fone">Telefone</Label.Root>
                <Input 
                  id="fone" 
                  name="fone" 
                  placeholder="+x (xx) x xxxx-xxxx"></Input>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <Label.Root htmlFor="paises">Países</Label.Root>
                <select 
                    name="paises" 
                    className="bg-zinc-500 py-3 px-4 
                    rounded text-sm
                    placeholder-zinc-500"
                    required>
                    {country.map((countries) =>{
                      return (
                        <option key={countries.name}>{countries.name_ptbr}</option>
                      )
                    })}
                </select>
              </div> 
              <div className='flex flex-col gap-2'>
                <Label.Root htmlFor="cidade">Cidades</Label.Root>
                <select 
                    name="cidade"
                    onChange={changeSelectOption}
                    className="bg-zinc-500 py-3 px-4 
                    rounded text-sm
                    placeholder-zinc-500"
                    required
                    placeholder="Selecione uma cidade">
                    {city.map((cities, index) =>{
                      return (
                        <option key={index}>{cities.name_ptbr}</option>
                      )
                    })}
                </select>
              </div>   
            </div>
            <div className='relative self-center'>
              <button 
                type="submit" 
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 rounded-sm shadow-md flex flex-col py-2 px-8">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default App
