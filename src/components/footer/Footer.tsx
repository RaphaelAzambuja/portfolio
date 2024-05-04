import SocialNetworks from "../SocialNetworks/SocialNetworks";

export default function Footer() {
    return(
        <>
            <footer className="w-100 d-flex flex-column-reverse align-items-center justify-content-center border bg-white pt-4 mt-5 gap-3">
                <p className="d-flex justify-content-center">RaphaelAzambuja©2024</p>
                <SocialNetworks />
            </footer>
        </>
    );
}