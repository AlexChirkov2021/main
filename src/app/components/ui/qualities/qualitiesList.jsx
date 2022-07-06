import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQuality";

const QualitiesList = ({ qualities }) => {
    const { getQuality, isLoading } = useQualities();
    if (!isLoading) {
        return (
            <>
                {qualities.map((qual) => (
                    <Quality key={qual} quality={getQuality(qual)} />
                ))}
            </>
        );
    } else {
        return <>loading...</>;
    }
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
