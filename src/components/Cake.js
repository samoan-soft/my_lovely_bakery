import React, {Component} from "react";
import './Cake.css';

let decorationFlag = false;
let decorationCandlesFlag = false;
let decorationTopingFlag = false;
let decorationGlazingFlag100 = false;
let decorationGlazingFlag80 = false;
let decorationGlazingFlag60 = false;
let cakeCount = 0;

let ingredients = [];

export default class Cake extends Component {
    state = {
        chocolateCake: 0, chocolateCake80: 0, chocolateCake60: 0, //количество шоколадных коржей коржей
        strawberryСake: 0, strawberryСake80: 0, strawberryСake60: 0, //количество клубничных коржей 60% размера
        vanillaCake: 0, vanillaCake80: 0, vanillaCake60: 0, //количество ванильных коржей 60% размера
        pinkTopping: 0, pinkTopping80: 0, pinkTopping60: 0, //посыпка розовая
        chocolateTopping: 0, chocolateTopping80: 0, chocolateTopping60: 0, //посыпка шоколадная
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
            strawberryСake, strawberryСake80, strawberryСake60, 
            vanillaCake, vanillaCake80, vanillaCake60, 
            pinkTopping, pinkTopping80, pinkTopping60,
            chocolateTopping, chocolateTopping80, chocolateTopping60, 
            candles, candles80, candles60, 
            chocolateGlazing100, chocolateGlazing80, chocolateGlazing60, 
            strawberryGlazing100, strawberryGlazing80, strawberryGlazing60, 
            vanillaGlazing100, vanillaGlazing80, vanillaGlazing60, 
            pinkFlowers, blueFlowers, 
            cakeStand } = this.state

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
            case "strawberryСake":{
                if(!decorationFlag){
                    if(cakeCount === 0){
                        stateValue = strawberryСake;
                        ingredients.push(ingredient);
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({[ingredient]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                    if(cakeCount === 1){
                        stateValue = strawberryСake80;
                        ingredients.push("strawberryСake80");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({["strawberryСake80"]: stateValue >= 0 ? stateValue : 0});
                        break;
                    }
                    if(cakeCount === 2){
                        stateValue = strawberryСake60;
                        ingredients.push("strawberryСake60");
                        stateValue +=1;
                        cakeCount +=1;
                        this.setState({["strawberryСake60"]: stateValue >= 0 ? stateValue : 0});
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
                        stateValue = chocolateTopping;
                        ingredients.push(ingredient);
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["chocolateTopping"]: stateValue >= 0 ? stateValue : 0
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
                        stateValue = pinkTopping;
                        ingredients.push(ingredient);
                        decorationFlag = true;
                        decorationTopingFlag = true;
                        stateValue +=1;
                        this.setState({
                            ["pinkTopping"]: stateValue >= 0 ? stateValue : 0
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
            ["strawberryСake"]: 0, ["strawberryСake80"]: 0, ["strawberryСake60"]: 0, 
            ["vanillaCake"]: 0, ["vanillaCake80"]: 0, ["vanillaCake60"]: 0, 
            ["chocolateGlazing100"]: 0, ["chocolateGlazing80"]: 0, ["chocolateGlazing60"]: 0, 
            ["strawberryGlazing100"]: 0, ["strawberryGlazing80"]: 0, ["strawberryGlazing60"]: 0,
            ["vanillaGlazing100"]: 0, ["vanillaGlazing80"]: 0, ["vanillaGlazing60"]: 0, 
            ["pinkTopping"]: 0, ["pinkTopping80"]: 0, ["pinkTopping60"]: 0, 
            ["chocolateTopping"]: 0, ["chocolateTopping80"]: 0, ["chocolateTopping60"]: 0,  
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
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-4%", alignItems: "center" }}><img src={str_buf}/></div>)
                    if(buf.includes("80"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-10%" }}><img src={str_buf}/></div>)
                    if(buf.includes("100"))
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-10%" }}><img src={str_buf}/></div>)
                }
                if(buf.includes("Cake")){
                    if(buf.includes("60")){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-4%" }}><img src={str_buf}/></div>)
                        console.log(str_buf);
                    }
                    if(buf.includes("80")){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-10%" }}><img src={str_buf}/></div>)
                        console.log(str_buf);
                    }
                    if(!((buf.includes("60") || buf.includes("80")))){
                        cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1, marginBottom: "-10%" }}><img src={str_buf}/></div>)
                        console.log(str_buf);
                    }
                }
                if(!(!buf.includes("Cake") || !buf.includes("Glazing"))){
                    cake.push(<div key={cake.length} className="cakeSide" style={{ zIndex: i+1 }}><img src={str_buf}/></div>)
                }
            }
        }
        console.log(cake);
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
                    <div className="bufIngredientBlock">
                        <p style={{border: '0px', color: 'white',
                        backgroundColor: 'pink', padding: '5%', textTransform: "uppercase", marginTop:'-20%'}}>Корж</p>
                        <p onClick={() => this.addIngredient("chocolateCake")}>Шоколадый</p>
                        <p onClick={() => this.addIngredient("strawberryСake")}>Клубничный</p>
                        <p onClick={() => this.addIngredient("vanillaCake")}>Ванильный</p>
                        <p style={{border: '15px', color: 'white',
                        backgroundColor: 'pink', padding: '5%', textTransform: "uppercase"}}>Глазурь</p>
                        <p onClick={() => this.addIngredient("chocolateGlazing")}>Шоколадная</p>
                        <p onClick={() => this.addIngredient("strawberryGlazing")}>Клубничная</p>
                        <p onClick={() => this.addIngredient("vanillaGlazing")}>Ванильная</p>
                        <p style={{border: '15px', color: 'white',
                        backgroundColor: 'pink', padding: '5%', textTransform: "uppercase"}}>Украшения</p>
                        <p onClick={() => this.addIngredient("candles")}>Свечи</p>
                        <p style={{border: '15px', color: 'white',
                        backgroundColor: 'pink', padding: '5%', textTransform: "uppercase"}}>Топпинг</p>
                        <p onClick={() => this.addIngredient("chocolateTopping")}>Шоколадный</p>
                        <p onClick={() => this.addIngredient("pinkTopping")}>Клубничный</p>
                        <p onClick={() => this.removeIngredient()} style={{border: '15px', color: 'white',
                        backgroundColor: 'pink', padding: '5%', textTransform: "uppercase", /*marginLeft: '35%',*/
                        cursor:"pointer", textAlign:'center', alignItems: 'center', /*borderRadius: '34%'*/}}>Удалить</p>
                        <p style={{border: '15px', color: 'white',
                        backgroundColor: 'pink', padding: '5%', textTransform: "uppercase", /*marginLeft: '32%',*/ marginTop: '10px',
                        cursor:"pointer", textAlign:'center', alignItems: 'center', /*borderRadius: '34%'*/}}>Завершить</p>
                    </div>
                </div>
            </>
        );
    }
}