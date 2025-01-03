import styles from "./Add.module.css";
import { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Button,
} from "@mui/material";

const Add = () => {
  const [newPoke, setNewPoke] = useState({
    name: "",
    img: "",
    types: [],
    species: "",
    hight: 0,
    weight: 0,
    abilities: "",
    gender: "",
    egg_groups: "",
    egg_cycle: 0,
    moves: [],
    hp: 50,
    attack: 50,
    defense: 50,
    special_attack: 50,
    special_defense: 50,
    speed: 50,
    evolves_from: "",
    base_happiness: 0,
    capture_rate: 0,
  });

  const savePoke = () => {
    if (!newPoke.name || !newPoke.img || newPoke.types.length === 0) {
      alert("Please fill in the required fields: Name and Image URL.");
      return;
    } else {
      const pokedex = JSON.parse(localStorage.getItem("pokedex")) || [];
      pokedex.push(newPoke);
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
      alert("Pokémon saved!");
    }
  };

  const handSelectChange = (event, values) => {
    const { value } = event.target;
    setNewPoke((prev) => ({
      ...prev,
      [values]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPoke((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.addContainer}>
      <h1
        style={{
          color: "#1976d2",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          fontWeight: "bold",
          fontSize: "2.5rem",
          marginBottom: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Add a Pokémon!
      </h1>
      <form action="" className="form-container">
        <h2>Basic fields</h2>
        <TextField
          sx={{ marginBottom: "20px" }}
          label="Name"
          name="name"
          value={newPoke.name}
          onChange={handleInputChange}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="types-label">Types</InputLabel>
          <Select
            labelId="types-label"
            name="types"
            multiple
            value={newPoke.types}
            onChange={(ev) => {
              handSelectChange(ev, "types");
            }}
            renderValue={(selected) => selected.join(", ")}
          >
            {["Grass", "Fire", "Water", "Electric", "Rock", "Ice"].map(
              (type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        <TextField
          label="Img-url"
          name="img"
          value={newPoke.img}
          onChange={handleInputChange}
        />
        <h2>All data</h2>
        <TextField
          label="Species"
          name="species"
          value={newPoke.species}
          onChange={handleInputChange}
        />
        <TextField
          label="Height"
          name="hight"
          value={newPoke.hight}
          onChange={handleInputChange}
        />
        <TextField
          label="Weight"
          name="weight"
          value={newPoke.weight}
          onChange={handleInputChange}
        />
        <TextField
          label="Abilities"
          name="abilities"
          value={newPoke.abilities}
          onChange={handleInputChange}
        />
        <TextField
          label="Gender"
          name="gender"
          value={newPoke.gender}
          onChange={handleInputChange}
        />
        <TextField
          label="Egg Groups"
          name="egg_groups"
          value={newPoke.egg_groups}
          onChange={handleInputChange}
        />
        <TextField
          label="Egg Cycle"
          name="egg_cycle"
          value={newPoke.egg_cycle}
          onChange={handleInputChange}
        />
        <h2>Base stat</h2>
        <label htmlFor="hp">hp</label>
        <Slider
          name="hp"
          value={newPoke.hp}
          onChange={handleInputChange}
          valueLabelDisplay="on"
        />
        <label htmlFor="attack">Attack</label>
        <Slider
          name="attack"
          value={newPoke.attack}
          onChange={handleInputChange}
          valueLabelDisplay="on"
        />
        <label htmlFor="defense">Defense</label>
        <Slider
          name="defense"
          value={newPoke.defense}
          onChange={handleInputChange}
          valueLabelDisplay="on"
        />
        <label htmlFor="special-attack">Special attack</label>
        <Slider
          name="special_attack"
          value={newPoke.special_attack}
          onChange={handleInputChange}
          valueLabelDisplay="on"
        />
        <label htmlFor="special-defense">Special defense</label>
        <Slider
          name="special_defense"
          value={newPoke.special_defense}
          onChange={handleInputChange}
          valueLabelDisplay="on"
        />
        <label htmlFor="speed">Speed</label>
        <Slider
          name="speed"
          value={newPoke.speed}
          onChange={handleInputChange}
          valueLabelDisplay="on"
        />
        <h2>Evolution Chain</h2>
        <TextField
          label="Evolves From:"
          name="evolves_from"
          value={newPoke.evolves_from}
          onChange={handleInputChange}
        />
        <TextField
          label="Base Happiness:"
          name="base_happiness"
          value={newPoke.base_happiness}
          onChange={handleInputChange}
        />
        <TextField
          label="Capture Rate:"
          name="capture_rate"
          value={newPoke.capture_rate}
          onChange={handleInputChange}
        />
        <h2>Moves</h2>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="moves-label">Moves</InputLabel>
          <Select
            labelId="moves-label"
            name="moves"
            multiple
            value={newPoke.moves}
            onChange={(ev) => {
              handSelectChange(ev, "moves");
            }}
            renderValue={(selected) => selected.join(", ")}
          >
            {[
              "Tackle",
              "Thunderbolt",
              "Flamethrower",
              "Hydro Pump",
              "Earthquake",
              "Dragon Claw",
              "Water Gun",
              "Vine Whip",
              "Ember",
              "Quick Attack",
              "Solar Beam",
              "Hyper Beam",
              "Iron Tail",
              "Shadow Ball",
              "Blizzard",
              "Psychic",
              "Surf",
              "Fire Blast",
              "Thunder",
              "Brick Break",
            ].map((move) => (
              <MenuItem key={move} value={move}>
                {move}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={savePoke} className="add-pokemon">
          Add poke
        </Button>
      </form>
    </div>
  );
};

export default Add;
