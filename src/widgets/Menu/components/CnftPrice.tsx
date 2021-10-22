import React from "react";
import styled from "styled-components";
import { CnftfinanceRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cnftPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CnftPrice: React.FC<Props> = ({ cnftPriceUsd }) => {
  return cnftPriceUsd ? (
    <PriceLink
      href="https://info.cheeseswap.app/#/0xc6D866628B5A1C63E196557C1BA189211b779F64"
      target="_blank"
    >
      <CnftfinanceRoundIcon width="20px" mr="4px" />
      <Text color="textSubtle" bold>{`$${cnftPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CnftPrice);
