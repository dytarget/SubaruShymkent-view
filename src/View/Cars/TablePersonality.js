import React, { Component } from 'react';
import {Table} from 'react-bootstrap';


export class TablePersonality extends Component {
    constructor(props){
        super(props);
        this.state={
            engine:false,
            weight:false,
            wheeldrive:false,
            personality:false,
        }
    }
    
    render() {
        var body="";
        if (this.props.match.path==="/models/legacy") {
            body= <tbody>
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
            </tbody>;
        }
        else if(this.props.match.path==="/models/subaruxv"){
            body= <tbody>
            <tr>
                <th rowSpan="5"><h2 style={{marginTop:"10%"}}>Subaru XV</h2></th>
                <th colSpan="4">Характеристики</th>
                </tr>
                <tr>
                    <td >2.0i</td>
                    <td>2.0i-S</td>
                    <td >2.0i</td>
                    <td>2.0i-ES</td>
                </tr>
                <tr>
                    <td>2018</td>
                    <td>2018</td>
                    <td>2019</td>
                    <td>2019</td>
                </tr>
                <tr>
                    <td>RD</td>
                    <td>SG</td>
                    <td>RD</td>
                    <td>JG</td>
                </tr>
                <tr>
                    <td>Comfort</td>
                    <td>Elegance</td>
                    <td>Comfort</td>
                    <td>Elegance</td>
                </tr>
                <tr>
                <td >Стоимость комплектации:</td>
                <td>10990000 тг</td>
                <td>11990000 тг</td>
                <td>11390000 тг</td>
                <td>12990000 тг</td>
                </tr>
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{engine:!old.engine}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Двигатель</span>  <span style={{float:"right"}} >{this.state.engine ? ('‾'):('+')}</span></td></tr>
                {this.state.engine && <>
                <tr>
                <td  className="components">ТИП ДВИГАТЕЛЯ</td>
                    <td>Горизонтально-оппозитный, 4-цилиндра, четырехтактный, бензиновый DOHC 16-клапанов</td>
                    <td>Горизонтально-оппозитный, 4-цилиндра, четырехтактный, бензиновый DOHC 16-клапанов</td>
                    <td>Горизонтально-оппозитный, 4-цилиндра, четырехтактный, бензиновый DOHC 16-клапанов</td>
                    <td>Горизонтально-оппозитный, 4-цилиндра, четырехтактный, бензиновый DOHC 16-клапанов</td>
                </tr>
                <tr>
                <td  className="components">Диаметр Х ход поршня (мм)</td>
                    <td>84.0 x 90.0</td>
                    <td>84.0 x 90.0</td>
                    <td>84.0 x 90.0</td>
                    <td>84.0 x 90.0</td>
                </tr>
                <tr>
                <td  className="components">Объём (см3)</td>
                    <td>1,995</td>
                    <td>1,995</td>
                    <td>1,995</td>
                    <td>1,995</td>
                </tr>
                <tr>
                <td  className="components">Топливная система</td>
                    <td>Непосредственный впрыск топлива</td>
                    <td>Непосредственный впрыск топлива</td>
                    <td>Непосредственный впрыск топлива</td>
                    <td>Непосредственный впрыск топлива</td>
                </tr>
                <tr>
                <td  className="components">Объем бака (л.)</td>
                    <td>63</td>
                    <td>63</td>
                    <td>63</td>
                    <td>63</td>
                </tr>
              
              
              
              
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{weight:!old.weight}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Размер и вес</span>  <span style={{float:"right"}} >{this.state.weight ? ('‾'):('+')}</span></td></tr>
                {this.state.weight && <>
                <tr>
                <td  className="components">Длина, мм</td>
                <td>4465</td>
                <td>4465</td>
                <td>4465</td>
                <td>4465</td>
                </tr>
                <tr>
                <td  className="components">Ширина, мм</td>
                <td>1800</td>
                <td>1800</td>
                <td>1800</td>
                <td>1800</td>
                </tr>
                <tr>
                <td  className="components">Высота, мм</td>
                <td>1595</td>
                <td>1595</td>
                <td>1595</td>
                <td>1595</td>
                </tr>
                <tr>
                <td  className="components">Колесная база, мм</td>
                <td>2665</td>
                <td>2665</td>
                <td>2665</td>
                <td>2665</td>
                </tr>
                <tr>
                <td  className="components">Клиренс</td>
                <td>220</td>
                <td>220</td>
                <td>220</td>
                <td>220</td>
                </tr>
                <tr>
                <td  className="components">Кол-во пассажиров</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                </tr>
                <tr>
                <td  className="components">СНАРЯЖЕННАЯ МАССА (КГ)</td>
                <td>1565</td>
                <td>1565</td>
                <td>1565</td>
                <td>1565</td>
                </tr>
                <tr>
                <td  className="components">Объем багажного отсека (л.)</td>
                <td>310 </td>
                <td>310 </td>
                <td>310 </td>
                <td>310 </td>
                </tr>
                <tr>
                <td  className="components">Масса буксируемого прицепа (оборудованного тормозной системой) (кг)</td>
                <td>1 400 </td>
                <td>1 400 </td>
                <td>1 400 </td>
                <td>1 400 </td>
                </tr>
              
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{wheeldrive:!old.wheeldrive}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Система привода</span>  <span style={{float:"right"}} >{this.state.wheeldrive ? ('‾'):('+')}</span></td></tr>
                {this.state.wheeldrive && <>
                <tr>
                <td  className="components">Тип полного привода</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                </tr>
            
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{personality:!old.personality}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Характеристики</span>  <span style={{float:"right"}} >{this.state.personality ? ('‾'):('+')}</span></td></tr>
                {this.state.personality && <>
                <tr>
                <td  className="components">МАКСИМАЛЬНАЯ МОЩНОСТЬ (лс/об/мин)</td>
                <td>150/6000</td>
                <td>150/6000</td>
                <td>150/6000</td>
                <td>150/6000</td>
                </tr>
                <tr>
                <td  className="components">МАКСИМАЛЬНЫЙ КРУТЯЩИЙ МОМЕНТ (Нм/об/мин)</td>
                <td>196/6000</td>
                <td>196/6000</td>
                <td>196/6000</td>
                <td>196/6000</td>
                </tr>
                <tr>
                <td  className="components">МАКСИМАЛЬНАЯ СКОРОСТЬ (км/ч)</td>
                <td>194</td>
                <td>194</td>
                <td>194</td>
                <td>194</td>
                </tr>
                <tr>
                <td  className="components">Расход топлива (л./100 kм)*1 / Городской цикл</td>
                <td>9.0</td>
                <td>9.0</td>
                <td>9.0</td>
                <td>9.0</td>
                </tr>
                <tr>
                <td  className="components">Расход топлива (л./100 kм)*1 / Загородный цикл</td>
                <td>5.9</td>
                <td>5.9</td>
                <td>5.9</td>
                <td>5.9</td>
                </tr>
                <tr>
                <td  className="components">Расход топлива (л./100 kм)*1 / Смешанный цикл</td>
                <td>7.1</td>
                <td>7.1</td>
                <td>7.1</td>
                <td>7.1</td>
                </tr>
                <tr>
                <td  className="components">РАЗГОН ДО 100 км/ч (с)</td>
                <td>10.4</td>
                <td>10.4</td>
                <td>10.4</td>
                <td>10.4</td>
                </tr>
              
            
                </>}
                <tr style={{visibility:"hidden"}}>
                <td style={{visibility:"hidden"}} className="components"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>;
        }
        else if(this.props.match.path==="/models/forester"){
            body= <tbody>
            <tr>    
                <th rowSpan="5"><h2 style={{marginTop:"10%"}}>Forester</h2></th>
                <th colSpan="4">Характеристики</th>
                </tr>
                <tr>
                    <td >2.0i</td>
                    <td>2.0i-L</td>
                    <td >2.5i-L ES</td>
                    <td>2.5i-S ES</td>
                </tr>
                <tr>
                    <td>2019</td>
                    <td>2019</td>
                    <td>2019</td>
                    <td>2019</td>
                </tr>
                <tr>
                    <td>E7VF</td>
                    <td>E7BM</td>
                    <td>E7LS</td>
                    <td>E7FW</td>
                </tr>
                <tr>
                    <td>Standart</td>
                    <td>Elegance</td>
                    <td>Prestigie</td>
                    <td>Premium</td>
                </tr>
                <tr>
                <td >Стоимость комплектации:</td>
                <td>11890000 тг</td>
                <td>13190000 тг</td>
                <td>14890000 тг</td>
                <td>16190000 тг</td>
                </tr>
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{engine:!old.engine}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Двигатель</span>  <span style={{float:"right"}} >{this.state.engine ? ('‾'):('+')}</span></td></tr>
                {this.state.engine && <>
                <tr>
                <td  className="components">ТИП ДВИГАТЕЛЯ</td>
                    <td>Горизонтально-оппозитный, 4-х цилиндровый, 4-х тактный, бензиновый</td>
                    <td>Горизонтально-оппозитный, 4-х цилиндровый, 4-х тактный, бензиновый</td>
                    <td>Горизонтально-оппозитный, 4-х цилиндровый, 4-х тактный, бензиновый</td>
                    <td>Горизонтально-оппозитный, 4-х цилиндровый, 4-х тактный, бензиновый</td>
                </tr>
                <tr>
                <td  className="components">Диаметр Х ход поршня (мм)</td>
                    <td>84.0 x 90.0</td>
                    <td>84.0 x 90.0</td>
                    <td>94,0 X 90,0</td>
                    <td>94,0 X 90,0</td>
                </tr>
                <tr>
                <td  className="components">Объём (см3)</td>
                    <td>1,995</td>
                    <td>1,995</td>
                    <td>2498</td>
                    <td>2498</td>
                </tr>
                <tr>
                <td  className="components">Топливная система</td>
                    <td>Непосредственный впрыск топлива</td>
                    <td>Непосредственный впрыск топлива</td>
                    <td>Непосредственный впрыск топлива</td>
                    <td>Непосредственный впрыск топлива</td>
                </tr>
                <tr>
                <td  className="components">Объем бака (л.)</td>
                    <td>63</td>
                    <td>63</td>
                    <td>63</td>
                    <td>63</td>
                </tr>
              
              
              
              
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{weight:!old.weight}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Размер и вес</span>  <span style={{float:"right"}} >{this.state.weight ? ('‾'):('+')}</span></td></tr>
                {this.state.weight && <>
                <tr>
                <td  className="components">Длина, мм</td>
                <td>4625</td>
                <td>4625</td>
                <td>4625</td>
                <td>4625</td>
                </tr>
                <tr>
                <td  className="components">Ширина, мм</td>
                <td>1810</td>
                <td>1810</td>
                <td>1810</td>
                <td>1810</td>
                </tr>
                <tr>
                <td  className="components">Высота, мм</td>
                <td>1730</td>
                <td>1730</td>
                <td>1730</td>
                <td>1730</td>
                </tr>
                <tr>
                <td  className="components">Колесная база, мм</td>
                <td>2665</td>
                <td>2665</td>
                <td>2665</td>
                <td>2665</td>
                </tr>
                <tr>
                <td  className="components">Клиренс</td>
                <td>220</td>
                <td>220</td>
                <td>220</td>
                <td>220</td>
                </tr>
                <tr>
                <td  className="components">Кол-во пассажиров</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                </tr>
                <tr>
                <td  className="components">СНАРЯЖЕННАЯ МАССА (КГ)</td>
                <td>1565</td>
                <td>1565</td>
                <td>1565</td>
                <td>1565</td>
                </tr>
                <tr>
                <td  className="components">Объем багажного отсека (л.)</td>
                <td>1775</td>
                <td>1775</td>
                <td>1775</td>
                <td>1775</td>
                </tr>
              
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{wheeldrive:!old.wheeldrive}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Система привода</span>  <span style={{float:"right"}} >{this.state.wheeldrive ? ('‾'):('+')}</span></td></tr>
                {this.state.wheeldrive && <>
                <tr>
                <td  className="components">Тип полного привода</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                </tr>
            
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{personality:!old.personality}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Характеристики</span>  <span style={{float:"right"}} >{this.state.personality ? ('‾'):('+')}</span></td></tr>
                {this.state.personality && <>
                <tr>
                <td  className="components">МАКСИМАЛЬНАЯ МОЩНОСТЬ (лс/об/мин)</td>
                <td>150/6000</td>
                <td>150/6000</td>
                <td>185/5800</td>
                <td>185/5800</td>
                </tr>
                <tr>
                <td  className="components">МАКСИМАЛЬНЫЙ КРУТЯЩИЙ МОМЕНТ (Нм/об/мин)</td>
                <td>196/4000</td>
                <td>196/4000</td>
                <td>239/4400</td>
                <td>239/4400</td>
                </tr>
                <tr>
                <td  className="components">МАКСИМАЛЬНАЯ СКОРОСТЬ (км/ч)</td>
                <td>193</td>
                <td>193</td>
                <td>193</td>
                <td>193</td>
                </tr>
                <tr>
                <td  className="components">Расход топлива (л./100 kм)*1 / Городской цикл</td>
                <td>9.9</td>
                <td>9.9</td>
                <td>11.6</td>
                <td>11.6</td>
                </tr>
                <tr>
                <td  className="components">Расход топлива (л./100 kм)*1 / Загородный цикл</td>
                <td>6.3</td>
                <td>6.3</td>
                <td>6.4</td>
                <td>6.4</td>
                </tr>
                <tr>
                <td  className="components">Расход топлива (л./100 kм)*1 / Смешанный цикл</td>
                <td>7.2</td>
                <td>7.2</td>
                <td>7.4</td>
                <td>7.4</td>
                </tr>
                <tr>
                <td  className="components">РАЗГОН ДО 100 км/ч (с)</td>
                <td>10.3</td>
                <td>10.3</td>
                <td>9.5</td>
                <td>9.5</td>
                </tr>
              
            
                </>}
                <tr style={{visibility:"hidden"}}>
                <td style={{visibility:"hidden"}} className="components"></td>
                <td></td>
                <td></td>
                <td></td><td></td>
                </tr>
            </tbody>;
        }  
        else if(this.props.match.path==="/models/outback"){
            body= <tbody>
            <tr>    
                <th rowSpan="5"><h2 style={{marginTop:"10%"}}>Outback</h2></th>
                <th colSpan="4">Характеристики</th>
                </tr>
                <tr>
                    <td >2.5i</td>
                    <td>2.5i-S ES</td>
                    <td >2.5i</td>
                    <td>2.5i-S ES</td>
                </tr>
                <tr>
                    <td>2018</td>
                    <td>2018</td>
                    <td>2019</td>
                    <td>2019</td>
                </tr>
                <tr>
                    <td>E7II</td>
                    <td>E7ZM</td>
                    <td>E7II</td>
                    <td>E7ZM</td>
                </tr>
                <tr>
                    <td>Elegance</td>
                    <td>Premium</td>
                    <td>Elegance</td>
                    <td>Premium</td>
                </tr>
                <tr>
                <td >Стоимость комплектации:</td>
                <td>14990000 тг</td>
                <td>16290000 тг</td>
                <td>15190000 тг</td>
                <td>17190000 тг</td>
                </tr>
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{engine:!old.engine}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Двигатель</span>  <span style={{float:"right"}} >{this.state.engine ? ('‾'):('+')}</span></td></tr>
                {this.state.engine && <>
                <tr>
                <td  className="components">ТИП ДВИГАТЕЛЯ</td>
                    <td>Атмосферный, 4 цилиндра</td>
                    <td>Атмосферный, 4 цилиндра</td>
                    <td>Атмосферный, 4 цилиндра</td>
                    <td>Атмосферный, 4 цилиндра</td>
                </tr>
                <tr>
                <td  className="components">КОРОБКА ПЕРЕКЛЮЧЕНИЯ ПЕРЕДАЧ</td>
                    <td>CVT "Lineartronic" </td>
                    <td>CVT "Lineartronic" </td>
                    <td>CVT "Lineartronic" </td>
                    <td>CVT "Lineartronic" </td>
                </tr>

              
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{weight:!old.weight}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Размер и вес</span>  <span style={{float:"right"}} >{this.state.weight ? ('‾'):('+')}</span></td></tr>
                {this.state.weight && <>
                <tr>
                <td  className="components">Длина, мм</td>
                <td>4815</td>
                <td>4815</td>
                <td>4815</td>
                <td>4815</td>
                </tr>
                <tr>
                <td  className="components">Ширина, мм</td>
                <td>1840</td>
                <td>1840</td>
                <td>1840</td>
                <td>1840</td>
                </tr>
                <tr>
                <td  className="components">Высота, мм</td>
                <td>1675</td>
                <td>1675</td>
                <td>1675</td>
                <td>1675</td>
                </tr>
                <tr>
                <td  className="components">Колесная база, мм</td>
                <td>2745</td>
                <td>2745</td>
                <td>2745</td>
                <td>2745</td>
                </tr>
                <tr>
                <td  className="components">Клиренс</td>
                <td>213</td>
                <td>213</td>
                <td>213</td>
                <td>213</td>
                </tr>
                <tr>
                <td  className="components">Кол-во пассажиров</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                </tr>
                <tr>
                <td  className="components">СНАРЯЖЕННАЯ МАССА (КГ)</td>
                <td>1590</td>
                <td>1603</td>
                <td>1590</td>
                <td>1603</td>
                </tr>
              
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{wheeldrive:!old.wheeldrive}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Система привода</span>  <span style={{float:"right"}} >{this.state.wheeldrive ? ('‾'):('+')}</span></td></tr>
                {this.state.wheeldrive && <>
                <tr>
                <td  className="components">Тип полного привода</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                <td>Система полного привода с активным распределением крутящего момента</td>
                </tr>
            
                </>}
                <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{personality:!old.personality}})}} style={{fontSize:"1.5em"}} colSpan="5"><span style={{float:"left"}}>Характеристики</span>  <span style={{float:"right"}} >{this.state.personality ? ('‾'):('+')}</span></td></tr>
                {this.state.personality && <>
                <tr>
                <td  className="components">МАКСИМАЛЬНАЯ МОЩНОСТЬ (лс/об/мин)</td>
                <td>175/5800</td>
                <td>175/5800</td>
                <td>175/5800</td>
                <td>175/5800</td>
                </tr>
                <tr>
                <td  className="components">МАКСИМАЛЬНЫЙ КРУТЯЩИЙ МОМЕНТ (Нм/об/мин)</td>
                <td>235/4000</td>
                <td>235/4000</td>
                <td>235/4000</td>
                <td>235/4000</td>
                </tr>
                <tr>
                <td  className="components">МАКСИМАЛЬНАЯ СКОРОСТЬ (км/ч)</td>
                <td>198</td>
                <td>198</td>
                <td>198</td>
                <td>198</td>
                </tr>
                <tr>
                <td  className="components">РАСХОД ТОПЛИВА В ГОРОДЕ/ШОССЕ(л/100км) в идеальных условиях в ходе эксперимента</td>
                <td>10/6.3</td>
                <td>10/6.3</td>
                <td>10/6.3</td>
                <td>10/6.3</td>
                </tr>
               <tr>
                <td  className="components">Объем бака (л.)</td>
                    <td>63</td>
                    <td>63</td>
                    <td>63</td>
                    <td>63</td>
                </tr>
              
                <tr>
                <td  className="components">РАЗГОН ДО 100 км/ч (с)</td>
                <td>10.2</td>
                <td>10.2</td>
                <td>10.2</td>
                <td>10.2</td>
                </tr>
              
            
                </>}
                <tr style={{visibility:"hidden"}}>
                <td style={{visibility:"hidden"}} className="components"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>;
        }
        return (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Table className="tables" striped bordered hover size="sm" style={{width:"85%",marginTop:"40px"}}>
                    {body}
                   
                </Table>
            </div>
        )
    }
}

export default TablePersonality
