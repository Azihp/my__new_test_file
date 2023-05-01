import './main.css'
import img from './img/c5303bf485867dd1a7035e522908b265.jpg'
import img1 from './img/cgo1oa7g49devoad0u6g.jpg'

import { Component } from 'react'

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state ={
            son: 1,
            pul: 25000,
            son1:1,
            pul1:50000,
        }
    }
    
    render(){
        let a = 0
        const minus =  () => {
      if (this.state.son >1) {
        
          this.setState({son: this.state.son -1})
          this.setState({pul: this.state.pul -25000})
      }

        }
        const pilus =  () => {
            this.setState({ son: this.state.son +1})
        this.setState({pul: this.state.pul +25000})


        }

        const minus1 =  () => {
            if (this.state.son1 >1) {
              
                this.setState({son1: this.state.son1 -1})
                this.setState({pul1: this.state.pul1 -50000})
            }
      
              }
              const pilus1 =  () => {
                  this.setState({ son1: this.state.son1 +1})
              this.setState({pul1: this.state.pul1 +50000})
      
      
              }
        return(
            <main>
                <div className='main__block'>
                   <div className="main__box_one">
                    <img src={img} alt="" className='main__img' />
                    <div className="main_jojo">
                    <p className='main__p'>купит Tide Color,3kg </p>
                        <p className=''>Продавец: <span className='main_span'>Я ты лох</span> </p>
                    </div>
                    <div className="main_muu">
                        <button className='main_btn' onClick={minus}>-</button>
                        <p className='main_for'>{this.state.son}</p>
                        <button className='main__btn_two'onClick={pilus}>+</button>
                    </div>
                    <div className="main__good">
                        
                      <p className="dflkgj">{this.state.pul} sum</p>
                    </div>
                   </div>
                   
                </div>
                   <div className="main__box_two">
                    <img src={img1} alt="" className='main__img1' />
                    <div className="main_jojo">
                    <p className='main__p'>Zam-Zam </p>
                        <p className=''>Продавец: <span className='main_span'>Я ты лох</span> </p>
                    </div>
                    <div className="main_muu">
                        <button className='main_btn' onClick={minus1}>-</button>
                        <p className='main_for'>{this.state.son1}</p>
                        <button className='main__btn_two'onClick={pilus1}>+</button>
                    </div>
                    <div className="main__good">
                        
                      <p className="dflkgj">{this.state.pul1} sum</p>
                    </div>
                   </div>
                   <div className="asdada">
                    <h1 className="dfgsss">{this.state.pul+this.state.pul1} опшая сума</h1>
                    
                   </div>
            </main>
        )
    }
    
}