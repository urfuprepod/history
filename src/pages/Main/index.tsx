import { Abiturients, Activities, Info, Learning, YouTube } from "./components";
import { Column } from "@/shared";

const Main = () => {
    return (
        <Column gap={10}>
            <Info />
            <Learning />
            <Activities />
            <YouTube />
            <Abiturients />
        </Column>
    );
};

export default Main;
