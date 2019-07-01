import React, { Component } from 'react';
import {Table} from 'react-bootstrap';


export class TablePersonality extends Component {
    state={
        engine:false,
        weight:false,
        wheeldrive:false,
        personality:false,
    }
    render() {
        return (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Table striped bordered hover size="sm" style={{width:"85%",marginTop:"40px"}}>
                    <tbody>
                    <tr>
                        <th rowSpan="5"><h2 style={{marginTop:"10%"}}>Legacy</h2></th>
                        <th colSpan="2">Характеристики</th>
                        </tr>
                        <tr>
                            <td >2.5i-S</td>
                            <td>2.5i-S ES</td>
                        </tr>
                        <tr>
                            <td>2018</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>E7YI</td>
                            <td>E7YM</td>
                        </tr>
                        <tr>
                            <td>Elegance</td>
                            <td>Premium</td>
                        </tr>
                        <tr>
                        <td >Стоимость комплектации:</td>
                        <td>12790000 тг</td>
                        <td>14290000 тг</td>
                        </tr>
                        <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{engine:!old.engine}})}} style={{fontSize:"1.5em"}} colSpan="3"><span style={{float:"left"}}>Двигатель</span>  <span style={{float:"right"}} >{this.state.engine ? ('‾'):('+')}</span></td></tr>
                        {this.state.engine && <>
                        <tr>
                        <td  className="components">ТИП ДВИГАТЕЛЯ</td>
                        <td>Атмосферный, 4 цилиндра</td>
                        <td>Атмосферный, 4 цилиндра</td>
                        </tr>
                      
                        </>}
                        <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{weight:!old.weight}})}} style={{fontSize:"1.5em"}} colSpan="3"><span style={{float:"left"}}>Размер и вес</span>  <span style={{float:"right"}} >{this.state.weight ? ('‾'):('+')}</span></td></tr>
                        {this.state.weight && <>
                        <tr>
                        <td  className="components">Длина, мм</td>
                        <td>4795</td>
                        <td>4795</td>
                        </tr>
                        <tr>
                        <td  className="components">Ширина, мм</td>
                        <td>1840</td>
                        <td>1840</td>
                        </tr>
                        <tr>
                        <td  className="components">Высота, мм</td>
                        <td>1500</td>
                        <td>1500</td>
                        </tr>
                        <tr>
                        <td  className="components">Колесная база, мм</td>
                        <td>2750</td>
                        <td>2750</td>
                        </tr>
                        <tr>
                        <td  className="components">СНАРЯЖЕННАЯ МАССА (КГ)</td>
                        <td>1529</td>
                        <td>1541</td>
                        </tr>
                      
                        </>}
                        <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{wheeldrive:!old.wheeldrive}})}} style={{fontSize:"1.5em"}} colSpan="3"><span style={{float:"left"}}>Система привода</span>  <span style={{float:"right"}} >{this.state.wheeldrive ? ('‾'):('+')}</span></td></tr>
                        {this.state.wheeldrive && <>
                        <tr>
                        <td  className="components">Тип полного привода</td>
                        <td>Система полного привода с активным распределением крутящего момента</td>
                        <td>Система полного привода с активным распределением крутящего момента</td>
                        </tr>
                    
                        </>}
                        <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{personality:!old.personality}})}} style={{fontSize:"1.5em"}} colSpan="3"><span style={{float:"left"}}>Характеристики</span>  <span style={{float:"right"}} >{this.state.personality ? ('‾'):('+')}</span></td></tr>
                        {this.state.personality && <>
                        <tr>
                        <td  className="components">МАКСИМАЛЬНАЯ МОЩНОСТЬ (лс/об/мин)</td>
                        <td>235/4000</td>
                        <td>235/4000</td>
                        </tr>
                        <tr>
                        <td  className="components">МАКСИМАЛЬНЫЙ КРУТЯЩИЙ МОМЕНТ (Нм/об/мин)</td>
                        <td>175/5800</td>
                        <td>175/5800</td>
                        </tr>
                        <tr>
                        <td  className="components">МАКСИМАЛЬНАЯ СКОРОСТЬ (км/ч)</td>
                        <td>210</td>
                        <td>210</td>
                        </tr>
                        <tr>
                        <td  className="components">РАСХОД ТОПЛИВА В ГОРОДЕ/ШОССЕ(л/100км) в идеальных условиях в ходе эксперимента</td>
                        <td>10/6,3</td>
                        <td>10/6,3</td>
                        </tr>
                        <tr>
                        <td  className="components">РАЗГОН ДО 100 км/ч (с)</td>
                        <td>9.6</td>
                        <td>9.6</td>
                        </tr>
                        <tr>
                        <td  className="components">ДОРОЖНЫЙ ПРОСВЕТ, мм</td>
                        <td>150</td>
                        <td>150</td>
                        </tr>
                        <tr>
                        <td  className="components">ОБЪЕМ ТОПЛИВНОГО БАКА (л)</td>
                        <td>60</td>
                        <td>60</td>
                        </tr>
                        <tr>
                        <td  className="components">РАЗМЕР ШИН, ЛЕГКОСПЛАВНЫЕ ДИСКИ</td>
                        <td>225/55 R 17</td>
                        <td>225/50 R 18</td>
                        </tr>

                    
                        </>}
                        <tr style={{visibility:"hidden"}}>
                        <td style={{visibility:"hidden"}} className="components"></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TablePersonality
