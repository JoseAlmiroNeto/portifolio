import { Card } from "../ui/Card";
import { Separetor } from "../ui/Separetor";
import { SubTitle } from "../ui/SubTitle";
import { Languages } from "../../data/languagesData";

export function Skills() {
  return (
    <main data-aos="fade-right">
      <SubTitle>Skills</SubTitle>
      <Separetor className="h-[2px] w-full bg-white" />
      <div className="w-full flex flex-wrap justify-between gap-4 py-4">
        {Languages.map((language, index) => {
          return (
            <Card className="w-[46%] xs:w-[48%] h-16 gap-1" key={index}>
              {language.icon} {language.language}
            </Card>
          );
        })}
      </div>
    </main>
  );
}
