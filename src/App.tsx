import { useState } from "react";
import "./App.css";
import { Button, Grid, MenuItem, TextField } from "@mui/material";

function App() {
  const [text, setText] = useState("");
  const voices = speechSynthesis.getVoices();
  const [currentVoiceIndex, setCurrentVoiceIndex] = useState(3);
  return (
    <Grid container direction="column">
      <TextField onChange={(e) => setText(e.target.value)} />
      <TextField
        select
        value={currentVoiceIndex}
        onChange={(e) => setCurrentVoiceIndex(+e.target.value)}
      >
        {voices.map(({ name, lang }, i) => (
          <MenuItem key={i} value={i}>
            {name}({lang})
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        onClick={() => {
          const message = new SpeechSynthesisUtterance();
          message.lang = voices[currentVoiceIndex].lang;
          message.text = text;
          message.voice = voices[currentVoiceIndex];
          speechSynthesis.speak(message);
        }}
      >
        произнеси текст
      </Button>
    </Grid>
  );
}

export default App;
