import Column from "../Column";
import Card from "../Card";
import { Icons } from "../Icons";

const Footer = () => {
    return (
        <section className="relative overflow-hidden rounded-[48px] px-10 py-4 bg-gradient-to-b from-[#f6f8ff] to-[#eef2ff]">
            <Column gap={7}>
                <h1 className="text-heading uppercase">
                    Наши <br /> <span className="text-primary">контакты</span>
                </h1>

                <div className="flex gap-5">
                    <Card className="gap-4">
                        <div className="flex gap-4 items-center">
                            <Icons.MapPinHouse color="#4361ee" />
                            <Column gap={1}>
                                <p className="text-paragraph text-text-secondary uppercase">
                                    Адрес
                                </p>
                                <p className="text-small uppercase">
                                    Тургенева, 4. АУД. 470
                                </p>
                            </Column>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.Phone color="#4361ee" />
                            <Column gap={1}>
                                <p className="text-paragraph text-text-secondary uppercase">
                                    Телефон
                                </p>
                                <a
                                    className="text-paragraph text-primary uppercase"
                                    href="tel:+79991234567"
                                >
                                    +7 (343) 389-94-24
                                </a>
                            </Column>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.Mail color="#4361ee" />
                            <Column gap={1}>
                                <p className="text-paragraph text-text-secondary uppercase">
                                    Email
                                </p>
                                <a
                                    className="text-paragraph text-primary"
                                    href="mailto:urfuhist@gmail.com"
                                >
                                    urfuhist@gmail.com
                                </a>
                            </Column>
                        </div>
                    </Card>

                    <Card className="gap-4">
                        <div className="flex gap-4 items-center">
                            <Icons.User color="#4361ee" />
                            <Column>
                                <p className="text-paragraph">
                                    Бут Юлия Евгеньевна
                                </p>
                                <p className="text-small text-text-secondary">
                                    Координатор МП
                                </p>
                                <a
                                    className="text-paragraph text-primary"
                                    href="mailto:j.e.komleva@urfu.ru"
                                >
                                    j.e.komleva@urfu.ru
                                </a>
                            </Column>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.User color="#4361ee" />
                            <Column gap={2}>
                                <p className="text-paragraph text-secondary uppercase">
                                    Телефон
                                </p>
                                <a
                                    className="text-paragraph text-primary uppercase"
                                    href="tel:+79991234567"
                                >
                                    +7 (343) 389-94-24
                                </a>
                            </Column>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Icons.User color="#4361ee" />
                            <Column gap={2}>
                                <p className="text-paragraph text-secondary uppercase">
                                    Email
                                </p>
                                <a
                                    className="text-paragraph text-primary uppercase"
                                    href="mailto:urfuhist@gmail.com"
                                >
                                    urfuhist@gmail.com
                                </a>
                            </Column>
                        </div>
                    </Card>
                </div>
            </Column>
        </section>
    );
};

export default Footer;
