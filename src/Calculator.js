import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Slider, Select, MenuItem, InputLabel, FormControl, Typography, Avatar, Box } from '@mui/material';
import axios from 'axios';



const ResultContainer = styled(Box)`
    margin: 2rem 0;
    color: #00ff00;
    text-align: center;

    & > p {
        margin: 0.5rem 0;
        font-size: 1.25rem;
    }

    @media (max-width: 768px) {
        & > p {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        & > p {
            font-size: 0.875rem;
        }
    }
`;

const PoolSelect = styled(FormControl)`
    margin: 1rem 0;
    min-width: 220px;

    .MuiInputLabel-root {
        color: #00e676;
    }

    .MuiSelect-root {
        color: #00e676;
        background: #00ff00;
        border-radius: 8px;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: #00e676;
    }

    .MuiSelect-icon {
        color: #00e676;
    }
`;

const StyledSlider = styled(Slider)`
    width: 100%;
    color: #00e676;

    .MuiSlider-thumb {
        background-color: #00e676;
    }

    .MuiSlider-rail {
        background-color: #00ff00;
    }

    .MuiSlider-track {
        background-color: #00e676;
    }
`;

const SubTitle = styled.h3`
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #00ff00;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

const Section = styled.section`
    margin-bottom: 3rem;
    padding: 2rem;
    background-color: #111;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);

    @media (max-width: 768px) {
        padding: 1rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem;
        margin-bottom: 1rem;
    }
`;

const Calculator = ({ pools }) => {
    if (!pools || pools.length === 0) {
        // ну да и что
        pools = [
            { id: 'up-hydra', name: 'UP/HYDRA', apr: 250.28, icon: 'https://assets.dedust.io/images/up.webp' },
            { id: 'ton-hydra', name: 'TON/HYDRA', apr: 169.53, icon: 'https://assets.dedust.io/images/ton.webp' },
            { id: 'gram-hydra', name: 'GRAM/HYDRA', apr: 124.49, icon: 'https://assets.dedust.io/images/gram.webp' },
            { id: 'scale-hydra', name: 'SCALE/HYDRA', apr: 122.03, icon: 'https://assets.dedust.io/images/scale.webp' },
            { id: 'jvt-hydra', name: 'JVT/HYDRA', apr: 124.62, icon: 'https://assets.dedust.io/images/jvt.webp' },
            { id: 'hydra-usdt', name: 'HYDRA/USDT', apr: 61.18, icon: 'https://assets.dedust.io/images/usdt.webp' },
            { id: 'dyor-hydra', name: 'DYOR/HYDRA', apr: 130.52, icon: 'https://assets.dedust.io/images/dyor.webp' },
            { id: 'hydra-jusdt', name: 'HYDRA/jUSDT', apr: 137.26, icon: 'https://assets.dedust.io/images/usdt-old.webp' },
            { id: 'not-hydra', name: 'NOT/HYDRA', apr: 47.21, icon: 'https://assets.dedust.io/images/not.webp' },
            { id: 'raff-hydra', name: 'RAFF/HYDRA', apr: 161.35, icon: 'https://assets.dedust.io/images/raff.webp' },
            { id: 'dhd-hydra', name: 'DHD/HYDRA', apr: 191.27, icon: 'https://assets.dedust.io/images/dhd.webp' },
            { id: 'arbuz-hydra', name: 'ARBUZ/HYDRA', apr: 229.11, icon: 'https://assets.dedust.io/images/arbuz.webp' },
            { id: 'web3-hydra', name: 'WEB3/HYDRA', apr: 83.12, icon: 'https://assets.dedust.io/images/web3.webp' },
            { id: 'bolt-hydra', name: 'BOLT/HYDRA', apr: 124.77, icon: 'https://assets.dedust.io/images/bolt.webp' },
            { id: 'glint-hydra', name: 'GLINT/HYDRA', apr: 140.05, icon: 'https://assets.dedust.io/images/glint.webp' },
            { id: 'redo-hydra', name: 'REDO/HYDRA', apr: 150.89, icon: 'https://assets.dedust.io/images/redo.webp' },
            { id: 'open-hydra', name: 'OPEN/HYDRA', apr: 260.15, icon: 'https://assets.dedust.io/images/open.webp' },
            { id: 'stton-hydra', name: 'stTON/HYDRA', apr: 139.04, icon: 'https://assets.dedust.io/images/stton-bemo.webp' },
            { id: 'dfc-hydra', name: 'DFC/HYDRA', apr: 158.02, icon: 'https://assets.dedust.io/images/dfc.webp' },
            { id: 'proton-hydra', name: 'PROTON/HYDRA', apr: 170.18, icon: 'https://assets.dedust.io/images/proton.webp' },
            { id: 'hydra-jwbtc', name: 'HYDRA/jWBTC', apr: 179.43, icon: 'https://assets.dedust.io/images/wbtc.webp' },
            { id: 'duck-hydra', name: 'DUCK/HYDRA', apr: 198.12, icon: 'https://assets.dedust.io/images/duck.webp' },
            { id: 'jetton-hydra', name: 'JETTON/HYDRA', apr: 199.08, icon: 'https://assets.dedust.io/images/jetton.webp' },
            { id: 'tonnel-hydra', name: 'TONNEL/HYDRA', apr: 207.11, icon: 'https://assets.dedust.io/images/tonnel.webp' },
            { id: 'scam-hydra', name: 'SCAM/HYDRA', apr: 205.86, icon: 'https://assets.dedust.io/images/scam.webp' },
            { id: 'llama-hydra', name: 'LLAMA/HYDRA', apr: 132.86, icon: 'https://assets.dedust.io/images/llama.webp' },
            { id: 'mic-hydra', name: 'MIC/HYDRA', apr: 132.9, icon: 'https://assets.dedust.io/images/mic.webp' },
            { id: 'kingy-hydra', name: 'KINGY/HYDRA', apr: 220.87, icon: 'https://assets.dedust.io/images/kingy.webp' },
            { id: 'chapa-hydra', name: 'CHAPA/HYDRA', apr: 147.37, icon: 'https://assets.dedust.io/images/chapa.webp' },
            { id: 'durev-hydra', name: 'DUREV/HYDRA', apr: 110.21, icon: 'https://assets.dedust.io/images/durev.webp' },
            { id: 'slow-hydra', name: 'SLOW/HYDRA', apr: 169.01, icon: 'https://assets.dedust.io/images/slow.webp' },
            { id: 'jarbuz-hydra', name: 'jARBUZ/HYDRA', apr: 247.11, icon: 'https://assets.dedust.io/images/arbuz.webp' },
            { id: 'lky-hydra', name: 'LKY/HYDRA', apr: 239.34, icon: 'https://assets.dedust.io/images/lucky.webp' },
            { id: 'ambr-hydra', name: 'AMBR/HYDRA', apr: 277.35, icon: 'https://assets.dedust.io/images/ambr.webp' },
            { id: 'statham-hydra', name: 'STATHAM/HYDRA', apr: 279.1, icon: 'https://assets.dedust.io/images/statham.webp' },
            { id: 'fish-hydra', name: 'FISH/HYDRA', apr: 187.03, icon: 'https://assets.dedust.io/images/fish.webp' },
            { id: 'inc-hydra', name: 'INC/HYDRA', apr: 263.84, icon: 'https://assets.dedust.io/images/inc.webp' },
            { id: 'goi-hydra', name: 'GOI/HYDRA', apr: 213.13, icon: 'https://assets.dedust.io/images/goi-2.webp' },
            { id: 'hydra-stbl', name: 'HYDRA/STBL', apr: 274.59, icon: 'https://assets.dedust.io/images/stbl.webp' },
            { id: 'jnano-hydra', name: 'jNANO/HYDRA', apr: 311.14, icon: 'https://assets.dedust.io/images/jnano.webp' },
            { id: 'sfmt-hydra', name: 'SFMT/HYDRA', apr: 319.86, icon: 'https://assets.dedust.io/images/safemars.webp' },
            { id: 'grbs-hydra', name: 'GRBS/HYDRA', apr: 282.26, icon: 'https://assets.dedust.io/images/grbs.webp' },
            { id: 'sheep-hydra', name: 'SHEEP/HYDRA', apr: 296.55, icon: 'https://assets.dedust.io/images/sheep.webp' },
            { id: 'anon-hydra', name: 'ANON/HYDRA', apr: 194.9, icon: 'https://assets.dedust.io/images/anon.webp' },
            { id: 'meow-hydra', name: 'MEOW/HYDRA', apr: 324.27, icon: 'https://assets.dedust.io/images/meow.webp' },
            { id: 'mumba-hydra', name: 'MUMBA/HYDRA', apr: 264.21, icon: 'https://assets.dedust.io/images/mumba.webp' },
            { id: 'hydra-cavi', name: 'HYDRA/CAVI', apr: 267.56, icon: 'https://assets.dedust.io/images/cavi.webp' },
            { id: 'y-hydra', name: 'Y/HYDRA', apr: 251.61, icon: 'https://assets.dedust.io/images/y.webp' },
            { id: 'stxp-hydra', name: 'stXP/HYDRA', apr: 260.67, icon: 'https://assets.dedust.io/images/stxp.webp' },
            { id: 'plankton-hydra', name: 'PLANKTON/HYDRA', apr: 177.83, icon: 'https://assets.dedust.io/images/plankton.webp' },
            { id: 'unic-hydra', name: 'UNIC/HYDRA', apr: 276.05, icon: 'https://assets.dedust.io/images/unic.webp' },
            { id: 'sau-hydra', name: 'SAU/HYDRA', apr: 285.95, icon: 'https://assets.dedust.io/images/saud.webp' },
            { id: 'reba-hydra', name: 'REBA/HYDRA', apr: 94.74, icon: 'https://assets.dedust.io/images/reba.webp' },
            { id: 'mrdn-hydra', name: 'MRDN/HYDRA', apr: 289.39, icon: 'https://assets.dedust.io/images/mrdn.webp' },
            { id: 'cofe-hydra', name: 'COFE/HYDRA', apr: 213.25, icon: 'https://assets.dedust.io/images/cofe.webp' },
            { id: 'sqrl-hydra', name: 'SQRL/HYDRA', apr: 303.41, icon: 'https://assets.dedust.io/images/sqrl.webp' },
            { id: 'pot-hydra', name: 'POT/HYDRA', apr: 456.81, icon: 'https://assets.dedust.io/images/pot.webp' },
            { id: 'ivs-hydra', name: 'IVS/HYDRA', apr: 259.3, icon: 'https://assets.dedust.io/images/ivs.webp' },
            { id: 'rotgar-hydra', name: 'ROTGAR/HYDRA', apr: 209.15, icon: 'https://assets.dedust.io/images/rotgar.webp' },
            { id: 'lave-hydra', name: 'LAVE/HYDRA', apr: 246.6, icon: 'https://assets.dedust.io/images/lave.webp' },
            { id: 'potato-hydra', name: 'POTATO/HYDRA', apr: 261.39, icon: 'https://assets.dedust.io/images/potato.webp' },
            { id: 'sake-hydra', name: 'SAKE/HYDRA', apr: 107.91, icon: 'https://assets.dedust.io/images/sake.webp' },
            { id: 'hton-hydra', name: 'hTON/HYDRA', apr: 126.61, icon: 'https://assets.dedust.io/images/hton.webp' },
            { id: 'goy-hydra', name: 'GOY/HYDRA', apr: 311.96, icon: 'https://assets.dedust.io/images/goy.webp' },
            { id: 'ship-hydra', name: 'SHIP/HYDRA', apr: 257.69, icon: 'https://assets.dedust.io/images/ship.webp' },
            { id: 'mc-hydra', name: 'MC/HYDRA', apr: 311.83, icon: 'https://assets.dedust.io/images/mc.webp' },
            { id: 'tnx-hydra', name: 'TNX/HYDRA', apr: 320.7, icon: 'https://assets.dedust.io/images/tnx.webp' },
            { id: 'nudes-hydra', name: 'NUDES/HYDRA', apr: 291.65, icon: 'https://assets.dedust.io/images/nudes.webp' },
            { id: 'xrock-hydra', name: 'XROCK/HYDRA', apr: 184.69, icon: 'https://assets.dedust.io/images/xrock.webp' },
            { id: 'rugpull-hydra', name: 'RUGPULL/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/rugpull.webp' },
            { id: 'monk-hydra', name: 'MONK/HYDRA', apr: 484.39, icon: 'https://assets.dedust.io/images/monk.webp' },
            { id: 'bee-hydra', name: 'BEE/HYDRA', apr: 207.05, icon: 'https://assets.dedust.io/images/bee.webp' },
            { id: 'shic-hydra', name: 'SHIC/HYDRA', apr: 271.87, icon: 'https://assets.dedust.io/images/shic.webp' },
            { id: 'arut-hydra', name: 'ARUT/HYDRA', apr: 1.03, icon: 'https://assets.dedust.io/images/arut.webp' },
            { id: 'durevold-hydra', name: 'DUREVOLD/HYDRA', apr: 0.95, icon: 'https://assets.dedust.io/images/durev-old.webp' },
            { id: 'pet-hydra', name: 'PET/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/pet.webp' },
            { id: 'hmstr-hydra', name: 'HMSTR/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/hmstr.webp' },
            { id: 'my-hydra', name: 'MY/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/my.webp' },
            { id: 'ddao-hydra', name: 'DDAO/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/ddao.webp' },
            { id: 'wex-hydra', name: 'WEX/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/wex.webp' },
            { id: 'marga-hydra', name: 'MARGA/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/marga.webp' },
            { id: 'free-hydra', name: 'FREE/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/free.webp' },
            { id: 'banana-hydra', name: 'BANANA/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/banana.webp' },
            { id: 'jog-hydra', name: 'JOG/HYDRA', apr: 7.58, icon: 'https://assets.dedust.io/images/jog.webp' },
            { id: 'grimace-hydra', name: 'GRIMACE/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/grimace.webp' },
            { id: 'yo-hydra', name: 'YO/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/yo.webp' },
            { id: 'sim-hydra', name: 'SIM/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/sim.webp' },
            { id: 'pixel-hydra', name: 'PIXEL/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/pixel.webp' },
            { id: 'enot-hydra', name: 'eNOT/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/enot.webp' },
            { id: 'gm-hydra', name: 'GM/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/gm.webp' },
            { id: 'random-hydra', name: 'RANDOM/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/random.webp' },
            { id: 'mmt-hydra', name: 'MMT/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/mmt.webp' },
            { id: 'hedge-hydra', name: 'HEDGE/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/hedge.webp' },
            { id: 'rct-hydra', name: 'RCT/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/rct.webp' },
            { id: 'mem-hydra', name: 'MEM/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/mem.webp' },
            { id: 'lon-hydra', name: 'LON/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/lon.webp' },
            { id: '1rusd-hydra', name: '1RUSD/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/1rus.webp' },
            { id: 'pavul-hydra', name: 'PAVUL/HYDRA', apr: 0, icon: 'https://assets.dedust.io/images/pavul.webp' }
        ];
    }
    const [selectedPool, setSelectedPool] = useState(pools[0].id);
    const [investment, setInvestment] = useState(1000);
    const [apr, setApr] = useState(pools[0].apr);
    const [dailyYield, setDailyYield] = useState(0);
    const [annualYield, setAnnualYield] = useState(0);
    const [rubRate, setRubRate] = useState(0);

    useEffect(() => {
        const pool = pools.find(p => p.id === selectedPool);
        setApr(pool.apr);
    }, [selectedPool, pools]);

    useEffect(() => {
        const fetchRubRate = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
                setRubRate(response.data.rates.RUB);
            } catch (error) {
                console.error('Error fetching RUB rate:', error);
            }
        };
        fetchRubRate();
    }, []);

    useEffect(() => {
        const dailyYield = (investment * apr) / 100 / 365;
        const annualYield = (investment * apr) / 100;
        setDailyYield(dailyYield);
        setAnnualYield(annualYield);
    }, [investment, apr]);

    return (
        <Section>
            <SubTitle variant="h5">Калькулятор доходности</SubTitle>
            <br/>
            <PoolSelect variant="filled">
                <InputLabel id="pool-select-label">Выберите пул</InputLabel>
                <Select
                    labelId="pool-select-label"
                    value={selectedPool}
                    onChange={e => setSelectedPool(e.target.value)}
                    renderValue={(selected) => {
                        const pool = pools.find(p => p.id === selected);
                        return (
                            <div style={{ color: '#00ff00', display: 'flex', alignItems: 'center' }}>
                                <Avatar src={pool.icon} style={{ marginRight: 10 }} />
                                {pool.name}
                            </div>
                        );
                    }}
                >
                    {pools.map(pool => (
                        <MenuItem key={pool.id} value={pool.id}>
                            <Avatar src={pool.icon} style={{ marginRight: 10 }} />
                            {pool.name}
                        </MenuItem>
                    ))}
                </Select>
            </PoolSelect>
            <br/>
            <Typography gutterBottom style={{color: "#00ff00"}}>Инвестиции: ${investment} ({(investment * rubRate).toFixed(2)} ₽)</Typography>
            <StyledSlider
                value={investment}
                min={0}
                max={50000}
                step={10}
                onChange={(e, value) => setInvestment(value)}
                valueLabelDisplay="auto"
            />
            <ResultContainer>
                <p>Доход в день: ${dailyYield.toFixed(2)} ({(dailyYield * rubRate).toFixed(2)} ₽)</p>
                <p>Доход в год: ${annualYield.toFixed(2)} ({(annualYield * rubRate).toFixed(2)} ₽)</p>
            </ResultContainer>
            </Section>
    );
};

export default Calculator;
