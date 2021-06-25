import React, {Component} from "react";
import './Cake.css';
import {
    createSmartappDebugger,
    createAssistant,
    AssistantAppState,
} from "@sberdevices/assistant-client";

const init = (getState) => {
  return createAssistant({ getState });
}

let decorationFlag = false;
let decorationCandlesFlag = false;
let decorationTopingFlag = false;
let decorationGlazingFlag100 = false;
let decorationGlazingFlag80 = false;
let decorationGlazingFlag60 = false;
let cakeCount = 0;

let ingredients = [];

export default class Cake extends Component {
    constructor(){
        super()
    
        this.state = {
          notes: []
        }
    
        this.assistant = init(() => this.getState() );
        this.assistant.on("start", (event) => {
          console.log(`assistant.on(start)`, event);
        });
        this.assistant.on("data", (event) => {
          console.log(`assistant.on(data)`, event);
          const { action } = event
          this.dispatchAssistantAction(action);
        });
      }
    
      componentDidMount() {
        console.log('componentDidMount');
      }
    
      getState(){
        const state = {
          item_selector: {
            items: this.state.notes.map(
              ({ id, title }, index) => ({
                number: index + 1,
                id,
                title,
              })
            ),
          },
        };
        console.log('getStateForAssistant: state:', state)
        return state;
      }
    
      dispatchAssistantAction (action) {
        if(action){
          switch(action.type){
            case "addIngredient":
              this.addIngredient(action.note);
              break;
            
            case "removeIngredient":
                this.removeIngredient();
              break;
    
            case "end":
              break;
    
            default:
              console.log("ERROR action.type");
          }
        }
      }


    state_ = {
        chocolateCake: 0, chocolateCake80: 0, chocolateCake60: 0, //количество шоколадных коржей коржей
        strawberryCake: 0, strawberryCake80: 0, strawberryCake60: 0, //количество клубничных коржей 60% размера
        vanillaCake: 0, vanillaCake80: 0, vanillaCake60: 0, //количество ванильных коржей 60% размера
        pinkTopping100: 0, pinkTopping80: 0, pinkTopping60: 0, //посыпка розовая
        chocolateTopping100: 0, chocolateTopping80: 0, chocolateTopping60: 0, //посыпка шоколадная
        candles: 0, candles80: 0, candles60: 0, //свечи
        chocolateGlazing100: 0, chocolateGlazing80: 0, chocolateGlazing60: 0, //глазурь шоколадная
        strawberryGlazing100: 0, strawberryGlazing80: 0, strawberryGlazing60: 0, //глазурь клубничная
        vanillaGlazing100: 0, vanillaGlazing80: 0, vanillaGlazing60: 0, //глазурь ванильная
        pinkFlowers: 0, //розовые цветы
        blueFlowers: 0, //синие цветы
        cakeStand: 0 //подставка под торт
    }


    addIngredient = (ingredient) => {
        let { chocolateCake, chocolateCake80, chocolateCake60, 
            strawberryCake, strawberryCake80, strawberryCake60, 
            vanillaCake, vanillaCake80, vanillaCake60, 
            pinkTopping100, pinkTopping80, pinkTopping60,
            chocolateTopping100, chocolateTopping80, chocolateTopping60, 
            candles, candles80, candles60, 
            chocolateGlazing100, chocolateGlazing80, chocolateGlazing60, 
            strawberryGlazing100, strawberryGlazing80, strawberryGlazing60, 
            vanillaGlazing100, vanillaGlazing80, vanillaGlazing60, 
            pinkFlowers, blueFlowers, 
            cakeStand } = this.state_

        let stateValue;

        switch(ingredient){
            case "chocolateCake":{
                if(!decorationFlag){
                    if(cakeCount === 0){
                        stateValue = chocolateCake;
                        ingredients.push(ingredient);
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({
                            [ingredient]: stateValue >= 0 ? stateValue : 0
                        });
                        break;
                    }
                    if(cakeCount === 1){
                        stateValue = chocolateCake80;
                        ingredients.push("chocolateCake80");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({
                            ["chocolateCake80"]: stateValue >= 0 ? stateValue : 0
                        });
                        break;
                    }
                    if(cakeCount === 2){
                        stateValue = chocolateCake60;
                        ingredients.push("chocolateCake60");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({
                            ["chocolateCake60"]: stateValue >= 0 ? stateValue : 0
                        });
                        break;
                    }
                }
            }
            case "strawberryCake":{
                if(!decorationFlag){
                    if(cakeCount === 0){
                        stateValue = strawberryCake;
                        ingredients.push(ingredient);
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({[ingredient]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                    if(cakeCount === 1){
                        stateValue = strawberryCake80;
                        ingredients.push("strawberryCake80");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({["strawberryCake80"]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                    if(cakeCount === 2){
                        stateValue = strawberryCake60;
                        ingredients.push("strawberryCake60");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({["strawberryCake60"]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                }
                break;
            }
            case "vanillaCake":{
                if(!decorationFlag){
                    if(cakeCount === 0){
                        stateValue = vanillaCake;
                        ingredients.push(ingredient);
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({[ingredient]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                    if(cakeCount === 1){
                        stateValue = vanillaCake80;
                        ingredients.push("vanillaCake80");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({["vanillaCake80"]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                    if(cakeCount === 2){
                        stateValue = vanillaCake60;
                        ingredients.push("vanillaCake60");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({["vanillaCake60"]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                }
                break;
            }
            case "chocolateGlazing":{
                if (cakeCount === 3){
                    if (decorationGlazingFlag60)
                        break;
                    else {
                        stateValue = chocolateGlazing60;
                        decorationGlazingFlag60 = true;
                        ingredients.push("chocolateGlazing60");
                        stateValue +=1;
                        this.setState({["chocolateGlazing60"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
                if (cakeCount === 2){
                    if (decorationGlazingFlag80)
                        break;
                    else {
                        stateValue = chocolateGlazing80;
                        decorationGlazingFlag80 = true;
                        ingredients.push("chocolateGlazing80");
                        stateValue +=1;
                        this.setState({["chocolateGlazing80"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
                if (cakeCount === 1){
                    if (decorationGlazingFlag100)
                        break;
                    else {
                        stateValue = chocolateGlazing100;
                        decorationGlazingFlag100 = true;
                        ingredients.push("chocolateGlazing100");
                        stateValue +=1;
                        this.setState({["chocolateGlazing100"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
            }
            case "strawberryGlazing":{
                if (cakeCount === 3){
                    if (decorationGlazingFlag60)
                        break;
                    else {
                        stateValue = strawberryGlazing60;
                        decorationGlazingFlag60 = true;
                        ingredients.push("strawberryGlazing60");
                        stateValue +=1;
                        this.setState({["strawberryGlazing60"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
                if (cakeCount === 2){
                    if (decorationGlazingFlag80)
                        break;
                    else {
                        stateValue = strawberryGlazing80;
                        decorationGlazingFlag80 = true;
                        ingredients.push("strawberryGlazing80");
                        stateValue +=1;
                        this.setState({["strawberryGlazing80"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
                if (cakeCount === 1){
                    if (decorationGlazingFlag100)
                        break;
                    else {
                        stateValue = strawberryGlazing100;
                        decorationGlazingFlag100 = true;
                        ingredients.push("strawberryGlazing100");
                        stateValue +=1;
                        this.setState({["strawberryGlazing100"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
            }
            case "vanillaGlazing":{
                if (cakeCount === 3){
                    if (decorationGlazingFlag60)
                        break;
                    else {
                        stateValue = vanillaGlazing60;
                        decorationGlazingFlag60 = true;
                        ingredients.push("vanillaGlazing60");
                        stateValue +=1;
                        this.setState({["vanillaGlazing60"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
                if (cakeCount === 2){
                    if (decorationGlazingFlag80)
                        break;
                    else {
                        stateValue = vanillaGlazing80;
                        decorationGlazingFlag80 = true;
                        ingredients.push("vanillaGlazing80");
                        stateValue +=1;
                        this.setState({["vanillaGlazing80"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
                if (cakeCount === 1){
                    if (decorationGlazingFlag100)
                        break;
                    else {                    
                        stateValue = vanillaGlazing100;
                        decorationGlazingFlag100 = true;
                        ingredients.push("vanillaGlazing100");
                        stateValue +=1;
                        this.setState({["vanillaGlazing100"]: stateValue >= 0 ? stateValue : 0});
                        break;}
                }
            }
            case "candles":{
                if(decorationCandlesFlag || cakeCount === 0)
                    break;
                else{
                    if(cakeCount === 1){
                        stateValue = candles;
                        ingredients.push(ingredient);
                        decorationFlag = true;
                        decorationCandlesFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["candles"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                    if(cakeCount === 2){
                        stateValue = candles80;
                        ingredients.push("candles80");
                        decorationFlag = true;
                        decorationCandlesFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["candles80"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                    if(cakeCount === 3){
                        stateValue = candles80;
                        ingredients.push("candles60");
                        decorationFlag = true;
                        decorationCandlesFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["candles60"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                }
            }
            case "chocolateTopping":{
                if(decorationTopingFlag || cakeCount === 0)
                    break;
                else{
                    if(cakeCount === 1){
                        stateValue = chocolateTopping100;
                        ingredients.push("chocolateTopping100");
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["chocolateTopping100"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                    if(cakeCount === 2){
                        stateValue = chocolateTopping80;
                        ingredients.push("chocolateTopping80");
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["chocolateTopping80"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                    if(cakeCount === 3){
                        stateValue = chocolateTopping60;
                        ingredients.push("chocolateTopping60");
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["chocolateTopping60"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                }
            }
            case "pinkTopping":{
                if(decorationTopingFlag || cakeCount === 0)
                    break;
                else{
                    if(cakeCount === 1){
                        stateValue = pinkTopping100;
                        ingredients.push("pinkTopping100");
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["pinkTopping100"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                    if(cakeCount === 2){
                        stateValue = pinkTopping80;
                        ingredients.push("pinkTopping80");
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["pinkTopping80"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                    if(cakeCount === 3){
                        stateValue = pinkTopping60;
                        ingredients.push("pinkTopping60");
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["pinkTopping60"]: stateValue >= 0 ? stateValue : 0
                        });
                        break
                    }
                }
            }
            default: break;
        }
    }

    removeIngredient = () => {
        this.setState({
            ["chocolateCake"]: 0, ["chocolateCake80"]: 0, ["chocolateCake60"]: 0, 
            ["strawberryCake"]: 0, ["strawberryCake80"]: 0, ["strawberryCake60"]: 0, 
            ["vanillaCake"]: 0, ["vanillaCake80"]: 0, ["vanillaCake60"]: 0, 
            ["chocolateGlazing100"]: 0, ["chocolateGlazing80"]: 0, ["chocolateGlazing60"]: 0, 
            ["strawberryGlazing100"]: 0, ["strawberryGlazing80"]: 0, ["strawberryGlazing60"]: 0,
            ["vanillaGlazing100"]: 0, ["vanillaGlazing80"]: 0, ["vanillaGlazing60"]: 0, 
            ["pinkTopping100"]: 0, ["pinkTopping80"]: 0, ["pinkTopping60"]: 0, 
            ["chocolateTopping100"]: 0, ["chocolateTopping80"]: 0, ["chocolateTopping60"]: 0,  
            ["candles"]: 0, ["candles80"]: 0, ["candles60"]: 0, 
            ["pinkFlowers"]: 0, ["blueFlowers"]: 0, 
            ["cakeStand"]: 0
        });
        ingredients.splice(0, ingredients.length);
        cakeCount = 0;
        decorationFlag = false;
        decorationTopingFlag = false;
        decorationCandlesFlag = false;
        decorationGlazingFlag100 = false;
        decorationGlazingFlag80 = false;
        decorationGlazingFlag60 = false;
    }

    cakeContent = () => {
        let cake = [];
        for(let i = 0; i < ingredients.length; i++){
            let buf = ingredients[i];
            let str_buf = window.location.origin + "/assets/" +buf+ ".svg";
            for(let j = 0; j < this.state[buf]; j++){
                if(buf.includes("Glazing")){
                    if(buf.includes("60"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-27%" }}><img src={str_buf}/></div>)
                    if(buf.includes("80"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-36%" }}><img src={str_buf}/></div>)
                    if(buf.includes("100"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-45%" }}><img src={str_buf}/></div>)
                }
                if(buf.includes("Cake")){
                    if(buf.includes("60")){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-15%" }}><img src={str_buf}/></div>)
                    }
                    if(buf.includes("80")){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-19%" }}><img src={str_buf}/></div>)
                    }
                    if(!((buf.includes("60") || buf.includes("80")))){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-20%" }}><img src={str_buf}/></div>)
                    }
                }
                if(buf.includes("Topping")){
                    if(buf.includes("60"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-14%", transform: "scale(80%)" }}><img src={str_buf}/></div>)
                    if(buf.includes("80"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-18%", transform: "scale(80%)" }}><img src={str_buf}/></div>)
                    if(buf.includes("100")){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-22%", transform: "scale(80%)" }}><img src={str_buf}/></div>)
                    }
                }
                if(buf.includes("candles")){
                    if(buf.includes("60"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-24%" }}><img src={str_buf}/></div>)
                    if(buf.includes("80"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-27%" }}><img src={str_buf}/></div>)
                    if(!((buf.includes("60") || buf.includes("80")))){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-22%" }}><img src={str_buf}/></div>)
                    }
                }
            }
        }
        return cake.reverse();
    }

    render() {
        return(
            <>
                <div className="cakeIngredients">
                    <div className = "topSide"> 
                        {this.cakeContent()}
                    </div>
                    <div className = "bottomSide">
                        <img src={window.location.origin + "/assets/cakeStand.svg"}/>
                    </div>
                </div>
                <div className="ingredientsBlock" style={{zIndex: 600}}>
                        <p style={{zIndex: 610}}>Корж</p>
                        <button className="buttons" onClick={() => this.addIngredient("chocolateCake")} style={{zIndex: 610}}>Шоколадный</button>
                        <button className="buttons" onClick={() => this.addIngredient("strawberryCake")} style={{zIndex: 610}}>Клубничный</button>
                        <button className="buttons" onClick={() => this.addIngredient("vanillaCake")} style={{zIndex: 610}}>Ванильный</button>
                        <p style={{zIndex: 610}}>Глазурь</p>
                        <button className="buttons" onClick={() => this.addIngredient("chocolateGlazing")} style={{zIndex: 610}}>Шоколадная</button>
                        <button className="buttons" onClick={() => this.addIngredient("strawberryGlazing")} style={{zIndex: 610}}>Клубничная</button>
                        <button className="buttons" onClick={() => this.addIngredient("vanillaGlazing")} style={{zIndex: 610}}>Ванильная</button>
                        <p style={{zIndex: 610}}>Топпинг</p>
                        <button className="buttons" onClick={() => this.addIngredient("chocolateTopping")} style={{zIndex: 610}}>Шоколадный</button>
                        <button className="buttons" onClick={() => this.addIngredient("pinkTopping")} style={{zIndex: 610}}>Клубничный</button>
                        <p style={{zIndex: 610}}>Украшения</p>
                        <button className="buttons" onClick={() => this.addIngredient("candles")} style={{zIndex: 610}}>Свечи</button>
                        <button className="button_delete" onClick={() => this.removeIngredient()} style={{zIndex: 610}}>Удалить</button>
                </div>
            </>
        );
    }
}