import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';

const Container = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: #000;
    color: #fff;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

const TableHeader = styled.th`
    padding: 1rem;
    background-color: #222;
    border: 1px solid #333;
    text-align: left;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.25rem;
    }
`;

const TableCell = styled.td`
    padding: 1rem;
    border: 1px solid #333;
    text-align: left;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.25rem;
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: -4px;
    &:last-child {
        margin-right: 4px;
    }
`;

const PairText = styled.span`
    margin-left: 12px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  border: 1px solid #333;
  background-color: #111;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    padding: 0.3rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem;
    margin-top: 0.3rem;
  }
`;

const FarmingInfo = () => {
    const data = useMemo(() => [
        {
            pair: 'HYDRA/TON',
            tvl: '$1.9M',
            volume: '$48.52K',
            fees: '$121.29',
            apr: '169.89%',
            icons: [
                'https://assets.dedust.io/images/hydra.webp',
                'https://assets.dedust.io/images/ton.webp',
            ],
        },
        {
            pair: 'GRAM/HYDRA',
            tvl: '$46.03K',
            volume: '$3.67K',
            fees: '$9.17',
            apr: '113.02%',
            icons: [
                'https://assets.dedust.io/images/gram.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'HYDRA/USDT',
            tvl: '$38.79K',
            volume: '$419.88',
            fees: '$1.05',
            apr: '56.72%',
            icons: [
                'https://assets.dedust.io/images/hydra.webp',
                'https://assets.dedust.io/images/usdt.webp',
            ],
        },
        {
            pair: 'SCALE/HYDRA',
            tvl: '$38.72K',
            volume: '$393.79',
            fees: '$0.98',
            apr: '123.53%',
            icons: [
                'https://assets.dedust.io/images/scale.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'JVT/HYDRA',
            tvl: '$37.69K',
            volume: '$1.39K',
            fees: '$3.47',
            apr: '128.84%',
            icons: [
                'https://assets.dedust.io/images/jvt.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'DYOR/HYDRA',
            tvl: '$36.18K',
            volume: '$333.31',
            fees: '$0.83',
            apr: '132.08%',
            icons: [
                'https://assets.dedust.io/images/dyor.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'NOT/HYDRA',
            tvl: '$35.84K',
            volume: '$3.04K',
            fees: '$7.59',
            apr: '51.12%',
            icons: [
                'https://assets.dedust.io/images/not.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'RAFF/HYDRA',
            tvl: '$29.3K',
            volume: '$198.19',
            fees: '$0.5',
            apr: '162.77%',
            icons: [
                'https://assets.dedust.io/images/raff.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'HYDRA/jUSDT',
            tvl: '$27.87K',
            volume: '$135.53',
            fees: '$0.34',
            apr: '171.26%',
            icons: [
                'https://assets.dedust.io/images/hydra.webp',
                'https://assets.dedust.io/images/usdt-old.webp',
            ],
        },
        {
            pair: 'DHD/HYDRA',
            tvl: '$26.29K',
            volume: '$0',
            fees: '$0',
            apr: '180.87%',
            icons: [
                'https://assets.dedust.io/images/dhd.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'AIR/HYDRA',
            tvl: '$21.2K',
            volume: '$0',
            fees: '$0',
            apr: '167.71%',
            icons: [
                'https://i.tonscan.org/resize/Mqek5P9XrUdqsFaibIW-2T_0Q7L8blfzQUOwO8D25Mw/f:jpg/rs:fit:216:216:0/' +
                'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NoYWRvd1RpL3Rva2VuX3NvbnlhL21haW4vTE9HT18' +
                'yNTZfMjU2LnBuZw.jpg',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'ARBUZ/HYDRA',
            tvl: '$20.6K',
            volume: '$82.75',
            fees: '$0.21',
            apr: '231.04%',
            icons: [
                'https://assets.dedust.io/images/arbuz.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'BOLT/HYDRA',
            tvl: '$19.53K',
            volume: '$159.5',
            fees: '$0.4',
            apr: '124.84%',
            icons: [
                'https://assets.dedust.io/images/bolt.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'OPEN/HYDRA',
            tvl: '$18.26K',
            volume: '$590',
            fees: '$1.48',
            apr: '254.78%',
            icons: [
                'https://assets.dedust.io/images/open.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'REDO/HYDRA',
            tvl: '$18.05K',
            volume: '$3.65K',
            fees: '$9.13',
            apr: '148.85%',
            icons: [
                'https://assets.dedust.io/images/redo.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'GLINT/HYDRA',
            tvl: '$17.96K',
            volume: '$1.3K',
            fees: '$3.25',
            apr: '144.84%',
            icons: [
                'https://assets.dedust.io/images/glint.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'stTON/HYDRA',
            tvl: '$17.43K',
            volume: '$297.66',
            fees: '$0.74',
            apr: '140.15%',
            icons: [
                'https://assets.dedust.io/images/stton-bemo.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'WEB3/HYDRA',
            tvl: '$15.29K',
            volume: '$1.09K',
            fees: '$2.72',
            apr: '110.93%',
            icons: [
                'https://assets.dedust.io/images/web3.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'DFC/HYDRA',
            tvl: '$15.23K',
            volume: '$643.04',
            fees: '$1.61',
            apr: '162.81%',
            icons: [
                'https://assets.dedust.io/images/dfc.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'PROTON/HYDRA',
            tvl: '$14.73K',
            volume: '$514.79',
            fees: '$1.29',
            apr: '172.63%',
            icons: [
                'https://assets.dedust.io/images/proton.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'HYDRA/jWBTC',
            tvl: '$13.4K',
            volume: '$441.34',
            fees: '$1.1',
            apr: '183.02%',
            icons: [
                'https://assets.dedust.io/images/hydra.webp',
                'https://assets.dedust.io/images/wbtc.webp',
            ],
        },
        {
            pair: 'TONNEL/HYDRA',
            tvl: '$12.12K',
            volume: '$136.48',
            fees: '$0.34',
            apr: '207.52%',
            icons: [
                'https://assets.dedust.io/images/tonnel.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'DUCK/HYDRA',
            tvl: '$11.81K',
            volume: '$289.59',
            fees: '$0.72',
            apr: '207.56%',
            icons: [
                'https://assets.dedust.io/images/duck.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'LLAMA/HYDRA',
            tvl: '$11.31K',
            volume: '$88.3',
            fees: '$0.22',
            apr: '132.49%',
            icons: [
                'https://assets.dedust.io/images/llama.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MIC/HYDRA',
            tvl: '$11.18K',
            volume: '$162',
            fees: '$0.4',
            apr: '134.5%',
            icons: [
                'https://assets.dedust.io/images/mic.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'CHAPA/HYDRA',
            tvl: '$11.06K',
            volume: '$102.19',
            fees: '$0.26',
            apr: '141.02%',
            icons: [
                'https://assets.dedust.io/images/chapa.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'JETTON/HYDRA',
            tvl: '$11.04K',
            volume: '$111.21',
            fees: '$0.28',
            apr: '221.42%',
            icons: [
                'https://assets.dedust.io/images/jetton.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'KINGY/HYDRA',
            tvl: '$10.9K',
            volume: '$0',
            fees: '$0',
            apr: '220.86%',
            icons: [
                'https://assets.dedust.io/images/kingy.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SCAM/HYDRA',
            tvl: '$10.79K',
            volume: '$1.94K',
            fees: '$4.85',
            apr: '237.45%',
            icons: [
                'https://assets.dedust.io/images/scam.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SLOW/HYDRA',
            tvl: '$9.87K',
            volume: '$0',
            fees: '$0',
            apr: '170.18%',
            icons: [
                'https://assets.dedust.io/images/slow.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'jARBUZ/HYDRA',
            tvl: '$9.79K',
            volume: '$0',
            fees: '$0',
            apr: '247.18%',
            icons: [
                'https://assets.dedust.io/images/arbuz.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'LKY/HYDRA',
            tvl: '$9.28K',
            volume: '$0',
            fees: '$0',
            apr: '234.21%',
            icons: [
                'https://assets.dedust.io/images/lucky.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'UP/HYDRA',
            tvl: '$9.02K',
            volume: '$427.94',
            fees: '$1.07',
            apr: '244.22%',
            icons: [
                'https://assets.dedust.io/images/up.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'AMBR/HYDRA',
            tvl: '$8.77K',
            volume: '$0',
            fees: '$0',
            apr: '277.43%',
            icons: [
                'https://assets.dedust.io/images/ambr.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'FISH/HYDRA',
            tvl: '$8.62K',
            volume: '$31.7',
            fees: '$0.08',
            apr: '187.37%',
            icons: [
                'https://assets.dedust.io/images/fish.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'INC/HYDRA',
            tvl: '$8.3K',
            volume: '$34.08',
            fees: '$0.09',
            apr: '268.67%',
            icons: [
                'https://assets.dedust.io/images/inc.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'GOI/HYDRA',
            tvl: '$8.19K',
            volume: '$4.79K',
            fees: '$11.97',
            apr: '221.27%',
            icons: [
                'https://assets.dedust.io/images/goi-2.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'STATH/HYDRA',
            tvl: '$8.17K',
            volume: '$0',
            fees: '$0',
            apr: '296.19%',
            icons: [
                'https://assets.dedust.io/images/statham.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'HYDRA/STBL',
            tvl: '$8.16K',
            volume: '$15.55',
            fees: '$0.04',
            apr: '272.47%',
            icons: [
                'https://assets.dedust.io/images/hydra.webp',
                'https://assets.dedust.io/images/stbl.webp',
            ],
        },
        {
            pair: 'DUREV/HYDRA',
            tvl: '$7.99K',
            volume: '$107.87',
            fees: '$0.27',
            apr: '137.73%',
            icons: [
                'https://assets.dedust.io/images/durev.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'jNANO/HYDRA',
            tvl: '$7.74K',
            volume: '$21',
            fees: '$0.05',
            apr: '310.27%',
            icons: [
                'https://assets.dedust.io/images/jnano.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'GRBS/HYDRA',
            tvl: '$7.6K',
            volume: '$0',
            fees: '$0',
            apr: '282.32%',
            icons: [
                'https://assets.dedust.io/images/grbs.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SFMT/HYDRA',
            tvl: '$7.39K',
            volume: '$34.45',
            fees: '$0.09',
            apr: '330.24%',
            icons: [
                'https://assets.dedust.io/images/safemars.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SHEEP/HYDRA',
            tvl: '$7.33K',
            volume: '$0',
            fees: '$0',
            apr: '296.57%',
            icons: [
                'https://assets.dedust.io/images/sheep.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'ANON/HYDRA',
            tvl: '$6.94K',
            volume: '$495.82',
            fees: '$1.24',
            apr: '198.92%',
            icons: [
                'https://assets.dedust.io/images/anon.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MEOW/HYDRA',
            tvl: '$6.51K',
            volume: '$0',
            fees: '$0',
            apr: '333.91%',
            icons: [
                'https://assets.dedust.io/images/meow.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'stXP/HYDRA',
            tvl: '$6.42K',
            volume: '$451.35',
            fees: '$1.13',
            apr: '251.76%',
            icons: [
                'https://assets.dedust.io/images/stxp.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'HYDRA/CAVI',
            tvl: '$6.33K',
            volume: '$0',
            fees: '$0',
            apr: '268.18%',
            icons: [
                'https://assets.dedust.io/images/hydra.webp',
                'https://assets.dedust.io/images/cavi.webp',
            ],
        },
        {
            pair: 'MUMBA/HYDRA',
            tvl: '$6.3K',
            volume: '$4.07',
            fees: '$0.01',
            apr: '266.61%',
            icons: [
                'https://assets.dedust.io/images/mumba.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'PLANK/HYDRA',
            tvl: '$6.19K',
            volume: '$0',
            fees: '$0',
            apr: '175.97%',
            icons: [
                'https://assets.dedust.io/images/plankton.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'Y/HYDRA',
            tvl: '$6.11K',
            volume: '$0',
            fees: '$0',
            apr: '259.2%',
            icons: [
                'https://assets.dedust.io/images/y.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SAU/HYDRA',
            tvl: '$5.89K',
            volume: '$0',
            fees: '$0',
            apr: '276.4%',
            icons: [
                'https://assets.dedust.io/images/saud.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'REBA/HYDRA',
            tvl: '$5.84K',
            volume: '$310.55',
            fees: '$0.78',
            apr: '95.04%',
            icons: [
                'https://assets.dedust.io/images/reba.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'COFE/HYDRA',
            tvl: '$5.73K',
            volume: '$0',
            fees: '$0',
            apr: '209.5%',
            icons: [
                'https://assets.dedust.io/images/cofe.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'UNIC/HYDRA',
            tvl: '$5.57K',
            volume: '$0',
            fees: '$0',
            apr: '284.54%',
            icons: [
                'https://assets.dedust.io/images/unic.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MRDN/HYDRA',
            tvl: '$5.55K',
            volume: '$2.23K',
            fees: '$5.57',
            apr: '315.08%',
            icons: [
                'https://assets.dedust.io/images/mrdn.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'POT/HYDRA',
            tvl: '$5.49K',
            volume: '$0',
            fees: '$0',
            apr: '456.81%',
            icons: [
                'https://assets.dedust.io/images/pot.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'IVS/HYDRA',
            tvl: '$5.39K',
            volume: '$0',
            fees: '$0',
            apr: '257.49%',
            icons: [
                'https://assets.dedust.io/images/ivs.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SQRL/HYDRA',
            tvl: '$5.38K',
            volume: '$0',
            fees: '$0',
            apr: '314.68%',
            icons: [
                'https://assets.dedust.io/images/sqrl.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'LAVE/HYDRA',
            tvl: '$5.34K',
            volume: '$0',
            fees: '$0',
            apr: '241.32%',
            icons: [
                'https://assets.dedust.io/images/lave.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'POTATO/HYDRA',
            tvl: '$5.23K',
            volume: '$0',
            fees: '$0',
            apr: '261.44%',
            icons: [
                'https://assets.dedust.io/images/potato.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'ROTGAR/HYDRA',
            tvl: '$5.14K',
            volume: '$30.24',
            fees: '$0.08',
            apr: '212.1%',
            icons: [
                'https://assets.dedust.io/images/rotgar.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'hTON/HYDRA',
            tvl: '$5.11K',
            volume: '$0',
            fees: '$0',
            apr: '126.64%',
            icons: [
                'https://assets.dedust.io/images/hton.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'GOY/HYDRA',
            tvl: '$5.1K',
            volume: '$0',
            fees: '$0',
            apr: '312.9%',
            icons: [
                'https://assets.dedust.io/images/goy.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SHIP/HYDRA',
            tvl: '$5.02K',
            volume: '$0',
            fees: '$0',
            apr: '257.54%',
            icons: [
                'https://assets.dedust.io/images/ship.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'NUDES/HYDRA',
            tvl: '$4.61K',
            volume: '$0',
            fees: '$0',
            apr: '291.71%',
            icons: [
                'https://assets.dedust.io/images/nudes.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MC/HYDRA',
            tvl: '$4.53K',
            volume: '$0',
            fees: '$0',
            apr: '329.38%',
            icons: [
                'https://assets.dedust.io/images/mc.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SAKE/HYDRA',
            tvl: '$4.47K',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/sake.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'XROCK/HYDRA',
            tvl: '$4.3K',
            volume: '$126.63',
            fees: '$0.32',
            apr: '192.01%',
            icons: [
                'https://assets.dedust.io/images/xrock.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'TNX/HYDRA',
            tvl: '$4.29K',
            volume: '$0',
            fees: '$0',
            apr: '352.8%',
            icons: [
                'https://assets.dedust.io/images/tnx.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'RUGPULL/HYDRA',
            tvl: '$3.54K',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/rugpull.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'OCTO/HYDRA',
            tvl: '$3.21K',
            volume: '$11.3',
            fees: '$0.03',
            apr: '0.26%',
            icons: [
                'https://sun9-55.userapi.com/impg/_ueqaaneTsU7xolke9UsObv3CoOtG-TtZCJGnQ/H' +
                '-iPBglaJvk.jpg?size=1080x1080&quality=95&sign=caa53dbda6d6b0e044aa280cefb0cebc&type=album',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MONK/HYDRA',
            tvl: '$2.88K',
            volume: '$0',
            fees: '$0',
            apr: '566.46%',
            icons: [
                'https://assets.dedust.io/images/monk.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'BEE/HYDRA',
            tvl: '$2.7K',
            volume: '$26.95',
            fees: '$0.07',
            apr: '207.01%',
            icons: [
                'https://assets.dedust.io/images/bee.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'ARUT/HYDRA',
            tvl: '$862.57',
            volume: '$55.47',
            fees: '$0.14',
            apr: '4.69%',
            icons: [
                'https://assets.dedust.io/images/arut.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'DUREVOLD/HYDRA',
            tvl: '$461.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/durev-old.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'PET/HYDRA',
            tvl: '$131.17',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/pet.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'HMSTR/HYDRA',
            tvl: '$109.58',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/hmstr.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MY/HYDRA',
            tvl: '$95.82',
            volume: '$3.34',
            fees: '<$0.01',
            apr: '2.55%',
            icons: [
                'https://assets.dedust.io/images/my.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'DDAO/HYDRA',
            tvl: '$34.7',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/ddao.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SHIC/HYDRA',
            tvl: '$31.65',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/shic.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'WEX/HYDRA',
            tvl: '$26.8',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/wex.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MARGA/HYDRA',
            tvl: '$22.16',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/marga.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'FREE/HYDRA',
            tvl: '$19.98',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/free.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'BANANA/HYDRA',
            tvl: '$19.37',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/banana.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'JOG/HYDRA',
            tvl: '$17.98',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/jog.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'GRIMACE/HYDRA',
            tvl: '$15.21',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/grimace.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'YO/HYDRA',
            tvl: '$14.31',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/yo.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'SIM/HYDRA',
            tvl: '$8.51',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/sim.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'PIXEL/HYDRA',
            tvl: '$6.82',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/pixel.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'eNOT/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/enot.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'GM/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/gm.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'RANDOM/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/random.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'HEDGE/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/hedge.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MMT/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/mmt.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'MEM/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/mem.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: 'RCT/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/rct.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
        {
            pair: '1RUSD/HYDRA',
            tvl: '<$0.01',
            volume: '$0',
            fees: '$0',
            apr: '0%',
            icons: [
                'https://assets.dedust.io/images/1rus.webp',
                'https://assets.dedust.io/images/hydra.webp',
            ],
        },
    ], []);

    const columns = useMemo(() => [
        {
            Header: 'Pair',
            accessor: 'pair',
            Cell: ({ row }) => (
                <IconContainer>
                    {row.original.icons.map((icon, idx) => (
                        <Icon key={idx} src={icon} alt={`${row.original.pair} icon`} />
                    ))}
                    <PairText>{row.original.pair}</PairText>
                </IconContainer>
            ),
        },
        {
            Header: 'TVL',
            accessor: 'tvl',
        },
        {
            Header: 'Volume (24h)',
            accessor: 'volume',
        },
        {
            Header: 'Fees (24h)',
            accessor: 'fees',
        },
        {
            Header: 'APR',
            accessor: 'apr',
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state: { globalFilter },
    } = useTable({ columns, data }, useGlobalFilter, useSortBy);

    return (
        <Container>
            <SearchInput
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Search..."
            />
            <Table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                        {headerGroup.headers.map((column, j) => (
                            <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())} key={j}>
                                {column.render('Header')}
                                <span>
                    {column.isSorted
                        ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                        : ''}
                  </span>
                            </TableHeader>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={i}>
                            {row.cells.map((cell, j) => (
                                <TableCell {...cell.getCellProps()} key={j}>
                                    {cell.render('Cell')}
                                </TableCell>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </Container>
    );
};

export default FarmingInfo;
