import SocialNetworks from "../SocialNetworks/SocialNetworks";

// import './Footer.scss';
export default function Footer() {
    return(
        <>
            <footer className="w-100 d-flex flex-column-reverse align-items-center justify-content-center gap-3">
                <p>Raphael Azambuja©2024 ️‍🔥</p>
                <SocialNetworks />
            </footer>
        </>
    );
}