import './Title.css'
// forma estruturada
// export default function Title(props) {
//     return (
//         <div>
//             <h1 className="title">{props.title}</h1>
//             <br />
//             <h2 className="subtitle">{props.subtitle}</h2>
//         </div>
//     )
// }

// forma não estruturada(desestruturada?) 
export default function Title({title, subtitle}) {
    return (
        // <> </> fragmento react para fazer os elementos funcionarem no jsx sem precisar usar <div>
        // usar <React.Fragment> </React.Fragment> quando estiver usando props> 
        <div className="title-block">
        {/* <div>*/}
            <h1 className="title">{title}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        {/* </div> */}
        </div>
    )
}