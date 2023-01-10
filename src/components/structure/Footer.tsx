import { CATEGORIES } from "../../utils/constants/categories.js";
import { categoryLinkFromId, GITHUB_LINK, LINKEDIN_LINK } from "../../utils/links";
import Name from "../general/Name";
import FooterNavCol from "../navigation/FooterNavCol";
import NavItem from "../navigation/NavItem";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-5 py-5 justify-center items-center bg-neutral-200 dark:bg-slate-700 w-full transition-colors duration-300">
            <Name />
            <nav className="flex justify-center w-full gap-5">
                <FooterNavCol title="Categories" grid>
                    {CATEGORIES.map((category) => (
                        <NavItem 
                            key={`footer-${category.id}`}
                            title={category.main} 
                            href={categoryLinkFromId(category.id)}
                        />
                    ))}
                </FooterNavCol>
                <FooterNavCol title="Me Elsewhere">
                    <NavItem 
                        title="Github" 
                        href={GITHUB_LINK} 
                        icon={<AiFillGithub />}
                    />

                    <NavItem 
                        title="Linkedin" 
                        href={LINKEDIN_LINK} 
                        icon={<AiFillLinkedin />} 
                    />
                    
                </FooterNavCol>
            </nav>
            <p className="text-slate-500">2022 Benjamin Riethmeier.</p>
        </footer>
    )
}

export default Footer;