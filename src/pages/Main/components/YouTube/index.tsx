import { Column } from "@/shared";

const YouTube = () => {
    return (
        <div className="flex gap-5 items-start [&>*]:flex-[1_1_50%]">
            <Column gap={6}>
                <p className="text-paragraph">
                    О развитии академической грамотности в Уральском
                    гуманитарном институте УрФУ
                </p>

                <Column gap={3}>
                    <span className="text-small text-text-secondary">
                        #фондпотанина25
                    </span>
                    <span className="text-small text-text-secondary">
                        #академическоеписьмо
                    </span>
                    <span className="text-small text-text-secondary">
                        #уральскийгуманитарныйинститут
                    </span>
                </Column>
            </Column>

            <iframe
                width="800"
                height="500"
                src="https://www.youtube.com/watch?v=LQzAZ3bmWzM&source_ve_path=OTY3MTQ&embeds_referring_euri=https%3A%2F%2Fworldhist-urfu.ru%2F"
                title="YouTube video player"
                allowFullScreen
            />
        </div>
    );
};

export default YouTube;
