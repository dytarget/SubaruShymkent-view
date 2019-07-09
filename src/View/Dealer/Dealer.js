import React, { Component } from 'react';
import './Dealer.css';

const contacts=[
    {name:'Шымкент',comp_name:`ТОО "Eurasia Motor Shymkent"”`,address:'Тамерлановское шоссе, 90а',phone:"т.: 8 (7252) 555-340",site:""},
    {name:'Нур-Султан',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Тюлькубасская,2',phone:"т.: 8 (727) 333-19-09",site:"www.subaru-motor-astana.kz"},
    {name:'Алматы',comp_name:` ТОО “Astana Motor Aktau”`,address:'16 мкр., здание №30 СТО "Актан"',phone:"т.: 8 (7292) 410-308",site:"www.subaru-motor-almaty.kz"},
    {name:'Актау',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Актобе',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Атырау',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Караганда',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:"www.subaru-kristall.kz"},
    {name:'Кокшетау',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Костанай',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Кызылорда',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Павлодар',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Петропавлск',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Талдыкорган',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Уральск',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""},
    {name:'Усть-Каменогорск',comp_name:` ТОО “Subaru Motor Astana”`,address:'ул. Жансугурова, 3',phone:"т.: 8 (7172) 270-111",site:""}
]

export class Dealer extends Component {
    componentWillMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="centered">
                        <h3 className="title-deal-violet">Офицальные Дилеры Subaru</h3>
                        <div className="list">
                            {
                                contacts.map(contact=>{
                                    return <div>
                                        <b>{contact.name}</b>,{contact.comp_name} <br/>{contact.address} <br/>{contact.phone}
                                        <br/>{contact.site && <p onClick={()=>{window.open('http://'+contact.site)}} style={{color:"#1e317a",cursor:"pointer"}}>{contact.site}</p>}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dealer
