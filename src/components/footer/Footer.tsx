import SocialNetworks from "../SocialNetworks/SocialNetworks";

export default function Footer() {
    return(
        <>
            <footer className="w-100 d-flex flex-column-reverse align-items-center justify-content-center border bg-white pt-4 mt-5 gap-3">
                <p>Raphael Azambuja©2024</p>
                <SocialNetworks />
            </footer>
        </>
    );
}