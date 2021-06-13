import { Component } from 'react';
import './App.css';
import Cake from './components/Cake';
import Header from './components/Header';
import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from "@sberdevices/assistant-client";

let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTI3NTUxNTg3ZTFjYjc5YmZmY2FkNzBhN2Y5YzAxMDJhOThjMGRlNmU1OWM1MmU0ZDkzYTNhYTA4MzA5ZTlmZjI4ZjU3NjFjODA0M2IyMiIsImF1ZCI6IlZQUyIsImV4cCI6MTYyMzY4MDA0MywiaWF0IjoxNjIzNTkzNjMzLCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiZWY5M2Y3M2MtZDM2NS00YWM1LWIyN2ItZTVlMDUxYzA0NDA4Iiwic2lkIjoiOGMzNjBmZDgtNTc5My00NGViLTk3ZTQtOTIwYTEyMGQ0YjJkIn0.skH7vFJLtE9w8iDam9W5pymWsD7HV2Lv2BgqXXAORmY_8wyfv8U3_uzwuGmPoUMkEAK9DHYHpEps_CSBqND0uY3rY-caA0RqMUCUFMRgKuf6ZFsTz9Mplht_pbj10pXs2DPVI7c-FVj7tVn5nA2-FLdu7lUM1WohD1xNFEZIxQg3PfIc_2QiONmfuntXPkr9O04qOUzJth27bimym87WgCTbRvQwBG0ZunlGv7_wsVBA5w0VaJpdj1ZdvccojB8hxVliYiHvGYQ1WXfOeCTFVbyg0AHU3b0ndRc4RC7NpwhJKfYX22gcwG-ym7fKJD9b4ynK1cbyXWUAwYT4KTv0846kf2QscnHEGacq58tZqiznVhyBVJeKnOX_gTXthxnWhhWsmVs2-TdcbTgFC9W5Z_ZbUjVfdr8Tu1U2Yx5Y1_B1UjGZhfi8VLpMeAtTXro2aYFLA-0k3B064RAABZzKd_Y1jJGksJ-CJAWNEr11DHRlEc0qbVvNccbkvqIG3x2pPT3OGXPiznwhZQHqFkQ5CtJ9ZR3mlUTHuQZHZUn9Kf8EgpQs3-J-bI1-SSf6MzDQ26pi0f4KgGsX5iUqM8AoMZL84j1p_oFfOdmX3lZc_LktjQgVXRaqS7y60vKEPq30tvsC5C8Phr9NOoBNt4D_MZGiPzUpTKK-SFSsD3twqJA';  
let initPhrase = 'Включи Моя любимая пекарня'; 

const initializeAssistant = (getState/* any*/) => {
  if (process.env.NODE_ENV === "development") {
      return createSmartappDebugger({
      token: token ?? "",
      initPhrase: initPhrase,
      getState,
      });
  }

  return createAssistant({ getState });
};

export default class App extends Component{
  constructor(props) {
    super(props);
    console.log('constructor');

    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("data", (event/*: any*/) => {
      console.log(`assistant.on(data)`, event);
      const { action } = event
      this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });
  }

  getStateForAssistant () {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        /*items: this.state.notes.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
        */},
    };
    console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      /*switch (action.type) {
        case 'add_note':
          return this.add_note(action);

        case 'done_note':
          return this.done_note(action);

        case 'delete_note':
          return this.delete_note(action);

        default:
          throw new Error();
      }*/
    }
  }

  render(){
    return(
        <div>
        <Header/>
        <div className="CakeContent">
          <Cake/>
        </div>
      </div> 
    );
  }
}