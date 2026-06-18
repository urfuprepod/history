import { Abiturients, Activities, Info, Learning, YouTube } from "./components";
import { Column } from "@/shared";

const Main = () => {
    return (
        <Column gap={6}>
            <Info />
            <Learning />
            <Activities />
            <YouTube />
            <Abiturients />
        </Column>
    );
};

export default Main;
