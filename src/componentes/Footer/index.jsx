import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <di className="redes">
            <a href="www.aluracursos.com">
                <img src="/img/facebook.png" alt="facebook"/>
            </a>

            <a href="www.aluracursos.com">
                <img src="/img/twitter.png" alt="facebook"/>
            </a>

            <a href="www.aluracursos.com">
                <img src="/img/instagram.png" alt="facebook"/>
            </a>
        </di>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Jose Davila</strong>
    </footer>
}

export default Footer