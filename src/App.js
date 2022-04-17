import AtlasCard from "./cards/AtlasCard";
import "./App.css"

function App() {

  return (
    <div className="AtlasCardMain">
      <AtlasCard title="Human - PBMC" urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Color_icon_Light_Cornflower_blue.svg/1024px-Color_icon_Light_Cornflower_blue.svg.png"
        modalities="RNA, ADT" cellsInReference="161,764" species="Human" />
    </div>
  );
}

export default App;
