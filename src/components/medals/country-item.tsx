import Image from "next/image";
import { useState } from "react";
import { readStreamableValue } from "ai/rsc";

//Components
import { CountryHeader } from "@/components/medals/country-header";
import { CountryBody } from "@/components/medals/country-body";
import { Modal } from "@/components/ui/modal";

//Actions
import { generateCountryInformation } from "@/actions/genereteCountryInformation";

//Interfaces
import { CountryAndMedals } from "@/interfaces/olympics";

interface CountryItemProps {
  item: CountryAndMedals;
}

export const CountryItem = ({
  item: { rank, medals, country },
}: CountryItemProps) => {
  const [showModal, setShowModal] = useState(false);
  const [textGeneration, setTextGeneration] = useState("");

  const genereteInformation = async () => {
    const { output } = await generateCountryInformation({
      rank,
      medals,
      country,
    });

    for await (const delta of readStreamableValue(output)) {
      setTextGeneration((currentGeneration) => `${currentGeneration}${delta}`);
    }
  };

  const openModal = () => {
    setShowModal(true);
    genereteInformation();
  };

  const closeModal = () => {
    setShowModal(false);
    setTextGeneration("");
  };

  return (
    <>
      <div
        key={country.code}
        className="flex flex-row justify-between bg-white rounded-md shadow-md p-4 cursor-pointer"
        onClick={openModal}
      >
        <CountryHeader country={country} rank={rank} />
        <CountryBody medals={medals} />
      </div>

      <Modal isOpen={showModal} closeModal={closeModal}>
        <div className="flex flex-col space-y-5">
          <CountryHeader country={country} rank={rank} />
          <div className="font-light text-md">{textGeneration}</div>
        </div>
      </Modal>
    </>
  );
};
