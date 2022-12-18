import { CATEGORIES } from "../../utils/constants/categories";
import { categoryLinkFromId } from "../../utils/links";
import Name from "../general/Name";
import FooterNavCol from "../navigation/FooterNavCol";
import NavItem from "../navigation/NavItem";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-neutral-200 dark:bg-slate-700 w-full">
            <Name />
            <nav className="flex justify-center w-full gap-16">
                <FooterNavCol title="Categories">
                    {CATEGORIES.map((category) => (
                        <NavItem 
                            key={`footer-${category.id}`}
                            title={category.main} 
                            href={categoryLinkFromId(category.id)}
                        />
                    ))}
                </FooterNavCol>
                <FooterNavCol title="Links">
                    <NavItem title="Github" href="/"/>
                </FooterNavCol>
            </nav>
            <p>2022 Benjamin Riethmeier.</p>
        </footer>
    )
}

export default Footer;