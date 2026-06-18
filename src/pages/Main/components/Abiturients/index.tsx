import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Abiturients = () => {
    return (
        <div className="flex flex-col gap-6 bg-white m-[-20px] p-4 rounded-md w-full">
            <h2 className="text-sub-heading">
                Информация для будущих выпускников
            </h2>

            <Accordion>
                <AccordionItem
                    header={
                        <span className="text-strong">
                            Дополнительные преимущества
                        </span>
                    }
                >
                    <ul className="text-small list-disc list-inside space-y-2">
                        <li>
                            участие в грантах и научно-исследовательских
                            проектах (УрФУ, РНФ, Благотворительный фонд В.
                            Потанина)
                        </li>

                        <li>
                            возможность получать повышенные стипендии за учебную
                            и научную деятельность
                        </li>

                        <li>
                            наличие собственных научных изданий и возможность
                            публикации в них результатов исследований
                            магистрантов
                        </li>

                        <li>участие в ежегодных молодежных конференциях</li>

                        <li>высокие шансы для поступления в аспирантуру</li>

                        <li>
                            возможность обучения и построения карьеры в столице
                            Урала, входящей в топ мировых городов, комфортных
                            для бизнеса
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem
                    header={
                        <span className="text-strong">
                            Сферы профессиональной деятельности выпускника
                        </span>
                    }
                >
                   <ul className="text-small list-disc list-inside space-y-2">
                        <li>
                            Анализ современных миграционных, этнополитических и этноконфессиональных процессов
                        </li>

                        <li>
                            Экспертная деятельность в области сохранения и актуализации историко-культурного наследия стран Запада и Востока
                        </li>

                        <li>
                            Консалтинг органов государственной власти и местного самоуправления в сфере этноконфессиональных взаимоотношений
                        </li>

                        <li>Научные организации, архивы, музеи, учреждения культуры</li>

                        <li>Образовательные организации высшего образования</li>

                        <li>
                            Издательские проекты по публикации иноязычных исторических текстов
                        </li>

                         <li>
                            Мониторинг и менеджмент процессов межкультурной коммуникации в условиях деглобализации современного мира
                        </li>

                         <li>
                            Туристическо-экскурсионные организации
                        </li>
                    </ul>
                </AccordionItem>

                <AccordionItem header="Why do we use it?">
                    Suspendisse massa risus, pretium id interdum in, dictum sit
                    amet ante. Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>
            </Accordion>
            <div className="flex gap-4 items-center justify-between"></div>
        </div>
    );
};

export default Abiturients;
