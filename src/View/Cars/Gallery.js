import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
import TablePrice from './TablePrice';
import TablePersonality from './TablePersonality';

export class Gallery extends Component {
    
    state = {
        photoIndex: 0,
        isOpen: false,
        active:"exterior"
    };
    
    
    render() {
        const { photoIndex, isOpen } = this.state;

        if (this.state.active==="exterior" || this.state.active==="interior") {
            var images = [
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (1).jpg'),
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (2).jpg'),   
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (3).jpg'), 
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (4).jpg'), 
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (5).jpg'), 
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (6).jpg'), 
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (7).jpg'), 
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (8).jpg'), 
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (9).jpg'), 
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (10).jpg'),
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (11).jpg'),
                require('./images/subaruxv/photos/'+this.state.active+'/xv18'+this.state.active+' (12).jpg'),  
              ];
              
              var smallImages = images;
            
        }
       
        return (
            <div>
                <div className="tab-container">
                    <div onClick={()=>{this.setState({active:"exterior"})}} className="tab-element">Экстерьер</div>
                    <div onClick={()=>{this.setState({active:"interior"})}} className="tab-element">Интерьер</div>
                    <div onClick={()=>{this.setState({active:"Technology"})}} className="tab-element">Технологии</div>
                    <div onClick={()=>{this.setState({active:"Safety"})}} className="tab-element">Безопасность</div>
                    <div onClick={()=>{this.setState({active:"Price"})}} className="tab-element">Комплектации и цены</div>
                    <div onClick={()=>{this.setState({active:"Personality"})}} className="tab-element">Характеристика</div>
                </div>
                 {(this.state.active==="exterior" || this.state.active==="interior") && <MDBContainer>
                    <div className="mdb-lightbox no-margin zb">
                    <MDBRow>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[0]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 0, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[1]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 1, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[2]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 2, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[3]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 3, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[4]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 4, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[5]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 5, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[6]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 6, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[7]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 7, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[8]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 8, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[9]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 9, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[10]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 10, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                        <MDBCol md="4">
                        <figure>
                            <img
                            src={smallImages[11]}
                            alt="Gallery"
                            className="img-fluid"
                            onClick={() =>
                                this.setState({ photoIndex: 11, isOpen: true })
                            }
                            />
                        </figure>
                        </MDBCol>
                       
                    </MDBRow>
                    </div>
                    {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length
                        })
                        }
                    />
                    )}
                </MDBContainer>}

                {this.state.active==="Technology" && 

                    <div>
                    <h1 className="tech-title">Технологии</h1>
                    <MDBContainer >
                      
                            <div>
                            <h3 className="h3-responsive title">Двигатель Subaru Boxer</h3>
                            </div>
                            <div className="techs">
                                <div className="techs-photo">
                                    <img src={require('./images/boxer.294c029de01dfca8a4c5c29f84c66e6132.jpg')} alt=""/>
                                </div>
                                <div className="techs-text">
                                    <p>
                                    Горизонтально-оппозитный 4-цилиндровый бензиновый двигатель третьего поколения демонстрирует уникальный опыт Subaru в разработке двигателей. Новый мотор сохранил все преимущества предыдущего поколения — компактность, легкость конструкции, низкий центр тяжести и низкий уровень вибрации. И вместе с тем был усовершенствован, благодаря чему снижен расход топлива примерно на 10% (по сравнению с предыдущей моделью) и уровень выбросов выхлопных газов. Также улучшены ходовые характеристики.

                                     При горизонтальном расположении цилиндров друг против друга силы инерции, возникающие при движении поршней, взаимно гасятся. Благодаря чему, двигатель обладает хорошей уравновешенностью и низким уровнем вибраций. Невысокий уровень вибраций позволяет обойтись противовесами небольшой массы и не устанавливать уравновешивающие валы. В результате двигатель расходует меньше топлива и обладает лучшей отзывчивостью. Инерция относительно вертикальной оси автомобиля меньше, что повышает быстроту реакции на управление. Небольшая высота двигателя и низкое положение центра тяжести дополнительно улучшают быстроту реакции и повышают устойчивость автомобиля.

                                     Возможность получения большого диаметра цилиндров облегчает создание высокооборотистых двигателей для спортивных автомобилей.

                                     Конструкция горизонтально-оппозитного двигателя обладает большей жесткостью, что позволяет уменьшить механические потери при работе двигателя. Благодаря этому увеличивается ресурс двигателя.
                                    </p>
                                </div>
                            </div>
                            <hr/>
                     
                            <div>
                            <h3 className="h3-responsive title">Симметричный полный привод Symmetrical AWD</h3>
                            </div>
                            <div className="techs">
                                <div className="techs-photo">
                                    <img src={require('./images/sawd.294c029de01dfca8a4c5c29f84c66e6132.jpg')} alt=""/>
                                </div>
                                <div className="techs-text">
                                    <p>
                                    Система полного привода Subaru обеспечивает эффективное распределение тягового усилия по всем четырем колесам. Благодаря сочетанию симметричного полного привода (SAWD) и горизонтально-оппозитного двигателя Subaru Boxer силовой агрегат располагается симметрично относительно продольной оси автомобиля, а трансмиссия смещается назад, в пределы колесной базы. Такая компоновка оптимизирует продольно-поперечный баланс масс и обеспечивает стабильную тягу на любых покрытиях в разных условиях движения. Кроме того, достигается великолепная устойчивость на высоких скоростях и прекрасные характеристики поворачиваемости и чувствительности к управлению, что делает SAWD основной технологией, подводящей фундамент под философию безопасности Subaru в сочетании с удовольствием от вождения.
                                    </p>
                                </div>
                            </div>
                            <hr/>
            
                        
                            <div>
                            <h3 className="h3-responsive title">Система интеллектуального привода SI-Drive</h3>
                            </div>
                            <div className="techs">
                                <div className="techs-photo">
                                    <img src={require('./images/sidrive.294c029de01dfca8a4c5c29f84c66e6132.jpg')} alt=""/>
                                </div>
                                <div className="techs-text">
                                    <p>
                                    Горизонтально-оппозитный 4-цилиндровый бензиновый двигатель третьего поколения демонстрирует уникальный опыт Subaru в разработке двигателей. Новый мотор сохранил все преимущества предыдущего поколения — компактность, легкость конструкции, низкий центр тяжести и низкий уровень вибрации. И вместе с тем был усовершенствован, благодаря чему снижен расход топлива примерно на 10% (по сравнению с предыдущей моделью) и уровень выбросов выхлопных газов. Также улучшены ходовые характеристики.

                                     При горизонтальном расположении цилиндров друг против друга силы инерции, возникающие при движении поршней, взаимно гасятся. Благодаря чему, двигатель обладает хорошей уравновешенностью и низким уровнем вибраций. Невысокий уровень вибраций позволяет обойтись противовесами небольшой массы и не устанавливать уравновешивающие валы. В результате двигатель расходует меньше топлива и обладает лучшей отзывчивостью. Инерция относительно вертикальной оси автомобиля меньше, что повышает быстроту реакции на управление. Небольшая высота двигателя и низкое положение центра тяжести дополнительно улучшают быстроту реакции и повышают устойчивость автомобиля.

                                     Возможность получения большого диаметра цилиндров облегчает создание высокооборотистых двигателей для спортивных автомобилей.

                                     Конструкция горизонтально-оппозитного двигателя обладает большей жесткостью, что позволяет уменьшить механические потери при работе двигателя. Благодаря этому увеличивается ресурс двигателя.
                                    </p>
                                </div>
                            </div>
                            <hr/>
                          
                            <div>
                            <h3 className="h3-responsive title">Бесступенчатая трансмиссия Lineartronic</h3>
                            </div>
                            <div className="techs">
                                <div className="techs-photo">
                                    <img src={require('./images/linearttronic.294c029de01dfca8a4c5c29f84c66e6132.jpg')} alt=""/>
                                </div>
                                <div className="techs-text">
                                    <p>
                                    Бесступенчатая трансмиссия c цепным приводом LINEARTRONIC

                                    Созданная для того, чтобы получать максимум от двигателя SUBARU BOXER и симметричного полного привода, бесступенчатая вариаторная трансмиссия Lineartronic обеспечивает максимально эффективный режим работы двигателя при любой скорости автомобиля, создавая условия для идеального баланса мощности и топливной экономичности. При интенсивном разгоне блок управления бесступенчатой трансмиссией переключает передачи в ступенчатом режиме, что позволяет водителю чувствовать моменты переключения и создает надежную и четкую связь между автомобилем и водителем.

                                    Для обеспечения моментальной реакции на изменение дорожных условий в бесступенчатой трансмиссии Lineartronic вместо ремня применяется цепь, что позволяет расширить диапазон передаточных отношений. В результате улучшается динамика и снижается расход топлива.

                                    В   цепи передачи крутящего момента от двигателя к вариатору установлен гидротрансформатор, обеспечивая плавность передачи момента и защищая вариатор от ударных динамических нагрузок, что значительно повышает надежность как вариатора так и все трансмиссии в целом.
                                    </p>
                                </div>
                            </div>
                            </MDBContainer >
                    </div>
                }
                {this.state.active==="Safety" && 
                <div>
                <h1 className="tech-title">Безопасность</h1>
                <MDBContainer className="tech-cont">
                  
                        <div>
                        <h3 className="h3-responsive title">Система помощи водителю EyeSight</h3>
                        </div>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/eyesight.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                Система помощи водителю EyeSight - Две камеры, которые функционируют аналогично человеческим глазам, используются для обработки изображения впереди автомобиля в 3D
Постоянная помощь водителям, помогающая предотвратить столкновение или же уменьшить повреждения при столкновении, уменьшение усталости в поездках на дальние расстояния и предотвратить непреднамеренное ускорение при ошибке выбора передачи или же непреднамеренном ускорении. 
                               </p>
                            </div>
                        </div>
                        <hr/>
                        <h5 ><strong>Система автоматического экстренного торможения.</strong> </h5>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/eyesight1.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                В случае риска столкновения система EYESIGHT предупреждает водителя об опасности
Если не последовало реакции водителя, то используется торможение, чтобы снизить скорость или полностью остановить автомобиль, если позволяют условия.
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <h5 ><strong>Адаптивный круиз-контроль.</strong> </h5>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/cruiz.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                Это система поддержки вождения, предназначенная для езды на автомагистралях или скоростных дорогах. Вышеуказанная функция может не работать как предусмотрено, в зависимости от различных условий, в том числе дороги, погоды и автомобиля. Система не обеспечивает водителя функцией автоматического вождения, способной работать в любых дорожных условиях. Водители должны помнить и не превышать установленные ограничения скорости. Диапазон адаптивного круиз-контроля может отличаться в зависимости от страны.
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <h5 ><strong>Предаварийное управление акселератором.</strong> </h5>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/accelerator.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                Если водитель по ошибке выберет движение вперед вместо заднего хода, когда автомобиль стоит на месте или едет очень медленно, и впереди автомобиля распознан потенциально опасный объект, то система помощи водителю EYESIGHT выдает предупреждение – отображается визуальная информация на табло и ограничивается подача топлива в двигатель. *Система может не активироваться в зависимости от формы или видимости стен или предметов перед автомобилем.
                              </p>
                            </div>
                        </div>
                        <hr/>
                        <h5 ><strong>Система предупреждения о смене полосы движения. </strong> </h5>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/polosa.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                Когда система обнаруживает отклонение от прямолинейного движения, а скорость автомобиля 60 км/ч или выше, система помощи водителю EYESIGHT выдает водителю звуковое предупреждение, и отображается визуальная информация на табло.
                                </p>
                            </div>
                        </div>
                        <hr/>
                 
                        <div>
                        <h3 className="h3-responsive title">SRH - Фары, реагирующие на рулевое управление. </h3>
                        </div>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/srhfara.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                Правая и левая фары освещают дорогу впереди, а их соответствующие оптические оси подстраиваются под разные углы поворота рулевого колеса и обеспечивать четкую видимость.
Это позволяет быстро распознать автомобиль или пешехода и, таким образом, повышает уровень безопасности во время ночной езды.
                                </p>
                            </div>
                        </div>
                        <hr/>
        
                    
                        <div>
                        <h3 className="h3-responsive title">Система помощи при движении Х-Mode.</h3>
                        </div>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/xmode.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                Система помощи при движении по бездорожью X-Mode регулируя параметры работы двигателя, бесступенчатой трансмиссии Lineartronic, систем полного привода и динамической стабилизации (VDC), Х-Mode позволит водителям с любым опытом вождения в полной мере воспользоваться выдающимися внедорожными качествами автомобиля Subaru.

X-Mode включает в себя систему, помогающую автоматически поддерживать постоянную скорость при спуске с уклона. Это позволяет сконцентрироваться на управлении и избежать опасной в таких условиях блокировки колес.
                                </p>
                            </div>
                        </div>
                        <hr/>
                      
                        <div>
                        <h3 className="h3-responsive title">Силовой каркас кольцеобразной формы.</h3>
                        </div>
                        <div className="techs">
                            <div className="techs-photo">
                                <img src={require('./images/carcas.jpg')} alt=""/>
                            </div>
                            <div className="techs-text">
                                <p>
                                В 1996 году с выходом первого поколения Forester Subaru объявила об использовании силового каркаса кольцеобразной формы, который защищает салон от ударов при фронтальных, фронтальных смещенных, боковых и задних столкновениях. Forester стал хитом продаж во всем мире благодаря высокому уровню безопасности. В его конструкции использовалась кольцевая структура, соединяющая крышу и пол с помощью боковых стоек с усиленными боковыми продольными балками и боковыми порогами, создавая клетку, которая охватывала весь салон автомобиля. Такая конструкция эффективно поглощает удары с любого направления при столкновении, обеспечивая надежную защиту салона. 
                               </p>
                            </div>
                        </div>
                        </MDBContainer >
                </div>
            }
            {this.state.active==="Price" && <TablePrice/>}
            {this.state.active==="Personality" && <TablePersonality/>}
            </div>
        )
    }
}

export default Gallery;
