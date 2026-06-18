import Link from "../Link";

const LINKS = [
    { title: "О программе", link: "/" },
    { title: "Преподаватели", link: "/professors" },
];

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-white rounded-lg shadow-xs py-3 px-8 sticky top-0 left-0 -ml-[30px] -mr-[30px] z-333">
            <img src="/logo.svg" width={140} />

            <div className="flex gap-5 items-center">
                {LINKS.map(({ title, link }) => (
                    <Link key={link} url={link}>
                        {title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
