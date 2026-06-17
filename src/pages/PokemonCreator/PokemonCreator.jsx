import { useEffect, useState } from "react";
import { getPokemons, createPokemon, deletePokemon } from "../../services/PokemonAPI/pokemonAPI";
import styles from './PokemonCreator.module.css';

export const PokemonCreator = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(null);
  

  const showToast = (message, type = "success") => {
  setToast({ message, type });

  setTimeout(() => {
    setToast(null);
  }, 3000);
};

  useEffect(() => {
    getPokemons()
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => console.error(err));
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

     if (name.trim() === "" || type.trim() === "") {
    showToast("Preencha o nome e o tipo do Pokémon!", "error");
    return;
      }


    const newPokemon = {
      name,
      type,
    };

    try {
      const response = await createPokemon(newPokemon);

      setPokemons((prev) => [...prev, response.data]);

       showToast("Pokémon criado com sucesso!", "success");

    setName("");
    setType("");

    } catch (err) {
        showToast("Erro ao criar Pokémon", "error");
      }
  };

    const handleDelete = async (id) => {
    try {
        await deletePokemon(id);
        setPokemons((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
        console.error(err);
    }
};


return (
  <div className={styles.container}>
    <h1 className={styles.title}> Criar Pokémon</h1>
   
    {toast && (
   <div className={`${styles.toast} ${styles[toast.type]}`}>
    {toast.message}
   </div>
    )}

    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        placeholder="Nome do Pokémon"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Gerar
      </button>
    </form>

    <h2 className={styles.subtitle}>Pokémons cadastrados</h2>

    <div className={styles.cardGrid}>
      {pokemons.map((p) => (
        <div key={p.id} className={styles.card}>
          <p className={styles.cardName}>{p.name}</p>
          <span className={styles.cardType}>{p.type}</span>
          <button className={styles.deleteButton} onClick={() => handleDelete(p.id)}>
            Remover
          </button>
        </div>
      ))}
    </div>
  </div>
);
}