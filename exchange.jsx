class Exchanger extends React.Component{
    constructor(){
        super()
        this.state={
            sgd: "",
            yen: "",
            usd:"",
            rmb:"",
        }
    }
    inputMoney=(e)=>{
        console.log(e.target.value);
        this.setState({sgd: e.target.value})
        this.convertMoney(e.target.value)
    }
    convertMoney=(giveMe)=>{
        let sgdRaw = giveMe;
        let yenNow = giveMe * 79.97;
        let usdNow = giveMe * 0.73;
        let rmbNow = giveMe * 5.02;
        console.log('Japanese Yen: ', yenNow);
        this.setState({yen: yenNow})
        this.setState({usd: usdNow})
        this.setState({rmb: rmbNow})
    }
    render(){
        console.log('SGD STUFF', this.state.sgd);
        return(
            <div>
                <Form
                buttonMe={this.inputMoney}
                placeholder = 'Input SGD AMOUNT'
                type="number"/>
                <YenConverted yenStuff={this.state.yen}/>
                <UsdConverted usdStuff={this.state.usd}/>
                <RmbConverted rmbStuff={this.state.rmb}/>
            </div>
        );
    }
}
class Form extends React.Component{
    render(){
        return(
            <div>
                <input placeholder = 'Input SGD AMOUNT'
                onChange={(e)=>{this.props.buttonMe(e)}}/>
            </div>
        );
    }
}
class UsdConverted extends React.Component{
    render(){
        console.log('inside Yen stuff', );
        return(
            <div>
            Dollar Amerikana (USD) - {this.props.usdStuff}
            </div>
        );
    }
}
class YenConverted extends React.Component{
    render(){
        console.log('inside Yen stuff', );
        return(
            <div>
            Japanese Yen(JPY) - {this.props.yenStuff}
            </div>
        );
    }
}
class RmbConverted extends React.Component{
    render(){
        console.log('inside Yen stuff', );
        return(
            <div>
            Chinkos (RMB) - {this.props.rmbStuff}
            </div>
        );
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
                <Exchanger/>
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);