import { useState, useEffect } from "react";
import { getPokemons, createPokemon, deletePokemon } from "../../services/PokemonService";
import styles from './PokemonCreator.module.css';
import { toast } from 'react-toastify';
import { FaPlus, FaTrash } from 'react-icons/fa';

export const PokemonCreator = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [pokemons, setPokemons] = useState([]);

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
      toast.warn("Preencha o nome e o tipo do Pokémon!");
      return;
    }

    const newPokemon = { name, type };

    try {
      const response = await createPokemon(newPokemon);
      setPokemons((prev) => [...prev, response.data]);
      toast.success("Pokémon criado com sucesso!");
      setName("");
      setType("");
    } catch (err) {
      toast.error("Erro ao criar Pokémon");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePokemon(id);
      setPokemons((prev) => prev.filter((p) => p.id !== id));
      toast.success("Pokémon removido com sucesso!");
    } catch (err) {
      toast.error("Erro ao deletar");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Criar Pokémon</h1>

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
          <FaPlus style={{ marginRight: '5px' }} /> Gerar
        </button>
      </form>

      <h2 className={styles.subtitle}>Pokémons cadastrados</h2>

      <div className={styles.cardGrid}>
        {pokemons.map((p) => (
          <div key={p.id} className={styles.card}>
            <p className={styles.cardName}>{p.name}</p>
            <span className={styles.cardType}>{p.type}</span>
            <button className={styles.deleteButton} onClick={() => handleDelete(p.id)}>
              <FaTrash style={{ marginRight: '5px' }} /> Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
