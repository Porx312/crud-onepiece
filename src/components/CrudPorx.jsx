import { useState } from 'react';

import CrudRender from './CrudRender';
import CrudForm from './crudform';

const onePieceCharacters = [
  {
    id: 1,
    name: "Luffy",
    fruta: "Gomu Gomu no Mi",
    haki: ["Kenbunshoku Haki", "Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/9f/0d/20/9f0d20b3bb9af7a7a0e216be43ec8d7e.jpg",
    recompensa: "150000000"
  },
  {
    id: 2,
    name: "Zoro",
    fruta: null,
    haki: ["Kenbunshoku Haki", "Busoshoku Haki", "Haoshoku Haki"],
    image: "https://i.pinimg.com/564x/e2/64/50/e264503e4088502818ac2d99cebef268.jpg",
    recompensa: "320000000"
  },
  {
    id: 3,
    name: "Nami",
    fruta: null,
    haki: [],
    image: "https://i.pinimg.com/564x/38/cb/75/38cb75bc28ab7342f5513efb22bb9652.jpg",
    recompensa: "16000000"
  },
  {
    id: 4,
    name: "Usopp",
    fruta: null,
    haki: [],
    image: "https://i.pinimg.com/564x/ac/3b/90/ac3b90ffd6cccdba348ba518929083df.jpg",
    recompensa: "30000000"
  },
  {
    id: 5,
    name: "Sanji",
    fruta: null,
    haki: ["Kenbunshoku Haki", "Busoshoku Haki"],
    image: "https://i.pinimg.com/736x/f0/aa/9d/f0aa9db141b89ca7e36008c7a20302fd.jpg",
    recompensa: "177000000"
  },
  {
    id: 6,
    name: "Chopper",
    fruta: null,
    haki: [],
    image: "https://i.pinimg.com/564x/c0/c7/1b/c0c71bcadc86be5ea1c9193e71e3b05a.jpg",
    recompensa: "100"
  },
  {
    id: 7,
    name: "Robin",
    fruta: null,
    haki: [],
    image: "https://i.pinimg.com/736x/c2/7e/ea/c27eea17cb40b765d10d19158584bc69.jpg",
    recompensa: "130000000"
  },
  {
    id: 8,
    name: "Franky",
    fruta: null,
    haki: [],
    image: "https://i.pinimg.com/564x/74/fe/ec/74feecf45f77a64623d128200724d213.jpg",
    recompensa: "94000000"
  },
  {
    id: 9,
    name: "Brook",
    fruta: null,
    haki: [],
    image: "https://i.pinimg.com/564x/d5/80/6e/d5806ecc88f8a396f8aff32b85a52fea.jpg",
    recompensa: "83000000"
  },
  {
    id: 10,
    name: "Jinbe",
    fruta: null,
    haki: ["Kenbunshoku Haki", "Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/b1/54/4b/b1544baf66abd1a4c6f45a16d1c37309.jpg",
    recompensa: "438000000"
  },
  {
    id: 11,
    name: "Ace",
    fruta: "Mera Mera no Mi",
    haki: ["Busoshoku Haki"],
    image: "https://i.pinimg.com/736x/47/ae/12/47ae1254d5107134bdacbc5db1d09559.jpg",
    recompensa: "550000000"
  },
  {
    id: 12,
    name: "Sabo",
    fruta: "Mera Mera no Mi",
    haki: ["Kenbunshoku Haki", "Busoshoku Haki"],
    image: "https://i.pinimg.com/736x/e7/2c/63/e72c6331463d4ca0c2b97fb77282976d.jpg",
    recompensa: "602000000"
  },
  {
    id: 13,
    name: "Law",
    fruta: "Ope Ope no Mi",
    haki: ["Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/47/c3/47/47c3471d4e4f3673e946d5a738ee421b.jpg",
    recompensa: "500000000"
  },
  {
    id: 14,
    name: "Doflamingo",
    fruta: "Ito Ito no Mi",
    haki: ["Kenbunshoku Haki", "Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/83/00/4f/83004fa49e028b0b2e7441992da7e4bb.jpg",
    recompensa: "340000000"
  },
  {
    id: 15,
    name: "Boa Hancock",
    fruta: "Mero Mero no Mi",
    haki: ["Kenbunshoku Haki", "Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/2f/75/b5/2f75b5c2909fb0edccea71557c49317d.jpg",
    recompensa: "80000000"
  },
  {
    id: 16,
    name: "Katakuri",
    fruta: "Mochi Mochi no Mi",
    haki: ["Kenbunshoku Haki", "Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/de/35/33/de353338fad809b82cb4a1959b192f74.jpg",
    recompensa: "1050000000"
  },
  {
    id: 17,
    name: "Big Mom",
    fruta: "Soru Soru no Mi",
    haki: ["Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/57/39/bb/5739bb2f239cc2baa9724366719437be.jpg",
    recompensa: "5000000000"
  },
  {
    id: 18,
    name: "Kaido",
    fruta: "Uo Uo no Mi, Modelo: Yamata no Orochi",
    haki: ["Busoshoku Haki"],
    image: "https://i.pinimg.com/564x/43/7b/d0/437bd0d92b89dba725ab7d625b8c9bd7.jpg",
    recompensa: "4700000000"
  },
  {
    id: 19,
    name: "Blackbeard",
    fruta: "Yami Yami no Mi",
    haki: [],
    image: "https://i.pinimg.com/564x/b2/8a/0e/b28a0ec61baf6cbf539082a98fb3ae92.jpg",
    recompensa: "2200000000"
  },
  {
    id: 20,
    name: "Shanks",
    fruta: null,
    haki: [],
    image: "https://i.pinimg.com/564x/0f/5a/44/0f5a4494ea8194033a8fe6a4074aef02.jpg",
    recompensa: "400000000"
  }
];

export default function CrudPorx() {
  const [db,setDb] = useState(onePieceCharacters)
  const [editToData,setEditToData] = useState(null)
    const createData = (data) =>{
        data.id = Date.now();
        setDb([...db,data])
    }
    
    const deleteData = (id) => {
      let isDelete = confirm(
        `¿estas seguro de eliminar eñl registro con el id id`
      );
  
      if (isDelete) {
        let deleteId = db.filter((el) => el.id !== id);
        setDb(deleteId);
      }
      return;
    };
  
  return (
    <>
    <h1>Marina</h1>
    <CrudForm  editToData={editToData} setEditToData={setEditToData} createData={createData}/>
    <ul className='list-container'>
    <CrudRender setEditToData={setEditToData} deleteData={deleteData} data={db}/>
    </ul>
    </>
    )
}