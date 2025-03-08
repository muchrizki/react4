export default function Sidebar (props) {
    
    const {menuNav, handleNav} = props

    return (
        <>
            <p onClick={handleNav} style={{ cursor: "pointer" }}>X</p>
            <ul>
                {menuNav.map(item => <li key={item}> {item} </li>)}
            </ul>
        </>
    )
}