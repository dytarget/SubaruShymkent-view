import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
 

export class TablePrice extends Component {
    state={
        exterier:false,
        interier:false,
        control:false,
        detection:false,
        eyesight:false
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
                        
                        <tr  style={{cursor:"pointer"}}><td onClick={()=>{this.setState(old=>{return{exterier:!old.exterier}})}} style={{fontSize:"1.5em"}} colSpan="3"><span style={{float:"left"}}>Экстерьер</span>  <span style={{float:"right"}} >{this.state.exterier ? ('‾'):('+')}</span></td></tr>
                        
                        {this.state.exterier && 
                        <>
                        <tr>
                        <td  className="components">18-дюймовые легкосплавные диски</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Выдвижные омыватели фар</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Задний противотуманный фонарь</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Корпуса боковых зеркал окрашенные в цвет кузова</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Обогрев боковых зеркал и зоны стеклоочистителей ветрового стекла</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Светодиодные LED дневные ходовые огни</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Светодиодные LED фары с автоматической регулировкой</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Стекла с защитой от ультрафиолетового излучения</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Тонировка задних боковых стекол</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Функция изменения направления светового пучка при движении на повороте (SRH)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Цвет «металлик» или «перламутр» (без дополнительной платы)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Электропривод складывания боковых зеркал</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        </>
                    }
                        <tr><td onClick={()=>{this.setState(old=>{return{interier:!old.interier}})}} colSpan="3" style={{cursor:"pointer",fontSize:"1.5rem"}}><span style={{float:"left"}}>Интерьер</span>  <span style={{float:"right"}} >{this.state.interier ? ('‾'):('+')}</span></td></tr>
                        {this.state.interier && 
                        <>
                        <tr>
                        <td  className="components">Система доступа в автомобиль без ключа "Smart Entry"</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Запуск двигателя кнопкой "Push Start"</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Мультимедийная система SUBARU STARLINK с сенсорным дисплеем 8,0 дюймов (iPOD/BT/AUX/USB)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Камера заднего вида</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Коммуникационная система Bluetooth</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Бортовой компьютер с дисплеем на панели приборов</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Круиз-контроль с управлением на рулевом колесе</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Кожаная обивка салона</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Кожаная обивка рулевого колеса и рукоятки КПП</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Регуливка рулевого колеса по высоте и по вылету</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Подогрев передних сидений</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Подогрев задних сидений</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Обогрев рулевого колеса</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Подрулевые лепестки переключения передач</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Двухзонный климат-контроль с фильтром очистки воздуха</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Отделение для очков в потолочной консоли</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Бокс в подлокотнике</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Карманы в боковых дверях со встроенными держателями для бутылок</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Подстаканники в центральной консоли</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Плафон подсветки багажного отделения</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Набор крючков для крепления и подвешивания багажа</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Сиденье водителя с электроприводом регулировок в 10 направлениях</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Функция памяти настроек сиденья водителя</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Сиденье переднего пассажира с электроприводом</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>

                        <tr>
                        <td  className="components">Задний подлокотник со встроенными подстаканниками</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>

                        <tr>
                        <td  className="components">Декоративные вставки в салоне под дерево</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>

                        <tr>
                        <td  className="components">4 стеклоподъемника с режимом "AUTO"</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>

                        <tr>
                        <td  className="components">Алюминиевые накладки на педали и порогов передних дверей</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Камера переднего обзора</td>
                        <td> </td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Камера передне-бокового обзора (со стороны переднего пассажира)</td>
                        <td> </td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Датчики света и дождя</td>
                        <td> </td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Люк с электроприводом</td>
                        <td> </td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Салонное зеркало с автоматическим затемнением</td>
                        <td> </td>
                        <td>*</td>
                        </tr>
                        </>
                        }
                        <tr><td onClick={
                            ()=>{this.setState(old=>{return{control:!old.control}})}
                        } colSpan="3" style={{cursor:"pointer",fontSize:"1.5rem"}}><span style={{float:"left"}}>Управляемость и системы активной безопасности</span>  <span style={{float:"right"}} >{this.state.control ? ('‾'):('+')}</span></td></tr>

                       {this.state.control && <> <tr>
                        <td  className="components">Система SI Drive с управлением на рулевом колесе (2 режима)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Антиблокировочная система тормозов (ABS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Система курсовой устойчивости (VDC)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Электронная система распределения тормозного усилия (EBD)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td className="components">Система активного управления вектором тяги (ATV)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Сигнал экстренного торможения (EBS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Усилитель экстренного торможения (BA)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Травмобезопасная педаль тормоза (SBPS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Система приоритета педали тормоза (BOS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Передние и боковые подушки безопасности (SRS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Боковые шторки безопасности (SRS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Коленная подушка безопасности (SRS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Ремни безопасности с преднатяжителем и ограничителем нагрузки</td>
                        <td>*</td>
                        <td>*</td>
                        </tr><tr>
                        <td className="components">Подголовники для трех пассажиров на заднем сидении</td>
                        <td>*</td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Система ISO-FIX </td>
                        <td>*</td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Иммобилайзер</td>
                        <td>*</td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Система ЭРА-ГЛОНАСС</td>
                        <td>*</td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Датчики давления в шинах (TPMS)</td>
                        <td>*</td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Система автоматического управления дальним светом (HBA)</td>
                        <td> </td>
                        <td>*</td>
                        </tr></>}
                        <tr><td colSpan="3"
                        onClick={
                            ()=>{this.setState(old=>{return{detection:!old.detection}})}
                        } style={{cursor:"pointer",fontSize:"1.30rem"}}><span style={{float:"left"}}>Subaru Rear Vehicle Detection-комплекс систем обнаружения автомобиля,движущегося сзади</span>  <span style={{float:"right"}} >{this.state.detection ? ('‾'):('+')}</span></td></tr>
                       {this.state.detection && <> <tr>
                        <td  className="components">Система обнаружения объектов в "слепых" зонах (BSD)</td>
                        <td> </td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Система помощи при смене полосы движения (LCA)</td>
                        <td> </td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Система помощи при движении задним ходом (RCTA)	</td>
                        <td> </td>
                        <td>*</td>
                        </tr></>}

                        <tr><td
                            onClick={()=>{this.setState(old=>{return{eyesight:!old.eyesight}})}}
                         colSpan="3" style={{cursor:"pointer",fontSize:"1.4rem"}}><span style={{float:"left"}}>Система EyeSight-система помощи водителю</span>  <span style={{float:"right"}} >{this.state.eyesight ? ('‾'):('+')}</span></td></tr>
                        
                        {this.state.eyesight && <><tr>
                        <td  className="components">Адаптивный круиз-контроль с управлением на рулевом колесе</td>
                        <td> </td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Система предаварийного торможения</td>
                        <td> </td>
                        <td>*</td>
                        </tr><tr>
                        <td  className="components">Система предаварийного управления дроссельной заслонкой	</td>
                        <td> </td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Система предупреждения о смене полосы движения</td>
                        <td> </td>
                        <td>*</td>
                        </tr>
                        <tr>
                        <td  className="components">Система предупреждения о начале движения идущего впереди автомобиля</td>
                        <td> </td>
                        <td>*</td>
                        </tr></>}
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

export default TablePrice;
